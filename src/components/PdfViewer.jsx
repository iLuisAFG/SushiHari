import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { Loader2, ZoomIn, ZoomOut, RotateCcw, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function PdfViewer({ url }) {
  const containerRef = useRef(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [rendering, setRendering] = useState(false);
  const [error, setError] = useState(null);
  const [scaleMultiplier, setScaleMultiplier] = useState(1);
  const canvasRefs = useRef([]);
  const renderTasksRef = useRef({});

  // Cancel any ongoing render operations
  const cancelAllRenders = useCallback(() => {
    Object.keys(renderTasksRef.current).forEach((key) => {
      const task = renderTasksRef.current[key];
      if (task && typeof task.cancel === 'function') {
        try {
          task.cancel();
        } catch (e) {
          // ignore
        }
      }
    });
    renderTasksRef.current = {};
  }, []);

  // Load Document
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    const loadPdf = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument({
          url,
          cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@' + pdfjsLib.version + '/cmaps/',
          cMapPacked: true,
        });
        const doc = await loadingTask.promise;
        if (!isMounted) return;
        setPdfDoc(doc);
        setNumPages(doc.numPages);
        setLoading(false);
      } catch (err) {
        console.error('Error loading PDF with pdf.js:', err);
        if (isMounted) {
          setError('No se pudo procesar el PDF en el navegador.');
          setLoading(false);
        }
      }
    };

    loadPdf();

    return () => {
      isMounted = false;
      cancelAllRenders();
    };
  }, [url, cancelAllRenders]);

  // Render All Pages into Canvases
  const renderAllPages = useCallback(async () => {
    if (!pdfDoc || !containerRef.current) return;
    cancelAllRenders();
    setRendering(true);

    try {
      const containerWidth = Math.max(containerRef.current.clientWidth - 24, 280);
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);

      for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
        const page = await pdfDoc.getPage(pageNum);
        const canvas = canvasRefs.current[pageNum - 1];
        if (!canvas) continue;

        const baseViewport = page.getViewport({ scale: 1.0 });
        const fitScale = (containerWidth / baseViewport.width) * scaleMultiplier;
        const viewport = page.getViewport({ scale: fitScale });

        const ctx = canvas.getContext('2d', { alpha: false });
        canvas.width = Math.floor(viewport.width * dpr);
        canvas.height = Math.floor(viewport.height * dpr);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        // Fill background with white before rendering to guarantee exact original color calibration
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, viewport.width, viewport.height);

        const renderContext = {
          canvasContext: ctx,
          viewport: viewport,
        };

        const renderTask = page.render(renderContext);
        renderTasksRef.current[pageNum] = renderTask;

        try {
          await renderTask.promise;
        } catch (err) {
          if (err?.name !== 'RenderingCancelledException') {
            console.error(`Error rendering page ${pageNum}:`, err);
          }
        }
      }
    } catch (err) {
      console.error('Error in renderAllPages:', err);
    } finally {
      setRendering(false);
    }
  }, [pdfDoc, scaleMultiplier, cancelAllRenders]);

  useEffect(() => {
    if (pdfDoc) {
      renderAllPages();
    }
  }, [pdfDoc, renderAllPages]);

  // Handle Resize
  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (pdfDoc) renderAllPages();
      }, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [pdfDoc, renderAllPages]);

  const handleZoomIn = () => setScaleMultiplier((prev) => Math.min(Number((prev + 0.2).toFixed(2)), 2.2));
  const handleZoomOut = () => setScaleMultiplier((prev) => Math.max(Number((prev - 0.2).toFixed(2)), 0.6));
  const handleResetZoom = () => setScaleMultiplier(1);

  if (error) {
    return (
      <div className="p-8 text-center bg-stone-900/80 rounded-2xl border border-red-500/30 text-stone-300 space-y-4">
        <AlertCircle className="w-10 h-10 text-red-400 mx-auto" />
        <p className="text-sm">{error}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-xs"
        >
          <FileText className="w-4 h-4" />
          Descargar o Ver Menú en Pantalla Completa
        </a>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center">
      {/* Viewer Header / Zoom Controls Bar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 p-3 bg-stone-900/95 backdrop-blur-md rounded-xl border border-stone-800 mb-5 text-xs text-stone-300 shadow-lg">
        <div className="flex items-center gap-2 font-mono">
          <FileText className="w-4 h-4 text-amber-400" />
          <span className="font-semibold text-white">Menú Oficial Sushi Hari</span>
          <span className="text-stone-500 hidden sm:inline">•</span>
          <span className="text-[11px] text-stone-400 hidden sm:inline">
            {numPages > 0 ? `${numPages} Páginas disponibles` : 'Procesando...'}
          </span>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-1.5 ml-auto sm:ml-0">
          <button
            onClick={handleZoomOut}
            disabled={scaleMultiplier <= 0.6}
            aria-label="Reducir zoom"
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 disabled:opacity-40 transition-colors text-white cursor-pointer"
            title="Alejar (-)"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          
          <span className="font-mono text-amber-400 font-semibold w-12 text-center text-xs">
            {Math.round(scaleMultiplier * 100)}%
          </span>

          <button
            onClick={handleZoomIn}
            disabled={scaleMultiplier >= 2.2}
            aria-label="Aumentar zoom"
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 disabled:opacity-40 transition-colors text-white cursor-pointer"
            title="Acercar (+)"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {scaleMultiplier !== 1 && (
            <button
              onClick={handleResetZoom}
              aria-label="Restablecer tamaño original"
              className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 transition-colors text-amber-400 cursor-pointer ml-1 text-xs flex items-center gap-1"
              title="Restablecer escala al 100%"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="text-[10px] hidden md:inline">100%</span>
            </button>
          )}
        </div>
      </div>

      {/* Loading state indicator */}
      {loading && (
        <div className="py-20 flex flex-col items-center justify-center gap-3 text-stone-400">
          <Loader2 className="w-9 h-9 text-amber-500 animate-spin" />
          <p className="text-xs font-mono tracking-wider text-stone-300">
            Renderizando carta digital con Mozilla PDF.js...
          </p>
        </div>
      )}

      {/* Document Pages Container (Canvas Stack) */}
      <div className="w-full flex flex-col items-center gap-8 overflow-x-auto pb-4">
        {Array.from({ length: numPages }).map((_, index) => {
          const pageNum = index + 1;
          return (
            <div
              key={pageNum}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-800/90 bg-white"
            >
              {/* Floating page tag */}
              <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-sm text-[11px] font-mono text-stone-200 border border-white/10 pointer-events-none shadow">
                Página {pageNum} de {numPages}
              </div>

              {/* Native HTML5 Canvas Page */}
              <canvas
                ref={(el) => (canvasRefs.current[index] = el)}
                className="block max-w-none transition-transform duration-150"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
