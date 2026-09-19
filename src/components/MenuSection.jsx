import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, CheckCircle2, BookOpen } from 'lucide-react';

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Visual Accent Container */}
      <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-b from-[#15151B] to-[#0A0A0C] border border-amber-500/30 shadow-2xl overflow-hidden">
        
        {/* Background Decorative Light */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/25">
            <BookOpen className="w-3.5 h-3.5" />
            Carta Oficial Sushi Hari
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Consulta Nuestro Menú Completo
          </h2>

          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            Explora nuestra carta completa con todos los rollos tradicionales y de autor, nigiris, sashimis, yakitoris, bebidas y promociones del día.
          </p>

          {/* Feature Badges Included in Menu */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-stone-300 py-2">
            <div className="p-2.5 rounded-xl bg-stone-900/60 border border-stone-800 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Rolls de Autor</span>
            </div>
            <div className="p-2.5 rounded-xl bg-stone-900/60 border border-stone-800 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Nigiris & Sashimi</span>
            </div>
            <div className="p-2.5 rounded-xl bg-stone-900/60 border border-stone-800 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Combos & Bebidas</span>
            </div>
            <div className="p-2.5 rounded-xl bg-stone-900/60 border border-stone-800 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Precios en MXN</span>
            </div>
          </div>

          {/* Directly Embedded PDF Viewer Box */}
          <div className="pt-4 text-left">
            <div className="rounded-2xl border border-stone-700 bg-stone-950 p-2 sm:p-3 overflow-hidden shadow-2xl">
              <div className="p-3 bg-stone-900/90 rounded-xl flex items-center justify-between text-xs text-stone-300 mb-2">
                <span className="flex items-center gap-2 font-mono font-medium">
                  <FileText className="w-4 h-4 text-amber-400" />
                  Menú Oficial Sushi Hari — Carta Digital
                </span>
                <a
                  href={`${import.meta.env.BASE_URL}menu.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 hover:underline flex items-center gap-1.5 font-semibold transition-colors"
                >
                  <span>Abrir en pestaña nueva</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <iframe
                src={`${import.meta.env.BASE_URL}menu.pdf#toolbar=0`}
                title="Menú Sushi Hari PDF"
                className="w-full h-[520px] sm:h-[650px] lg:h-[750px] rounded-lg border-0 bg-stone-900"
              />
            </div>
          </div>

          {/* Action Below PDF: Download Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={`${import.meta.env.BASE_URL}menu.pdf`}
              download="Menu_Sushi_Hari.pdf"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-amber-600 to-amber-500 hover:from-red-500 hover:to-amber-400 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Descargar Menú (PDF)
            </motion.a>
          </div>

          <p className="text-xs text-stone-400 pt-2">
            ¿Deseas ordenar directamente?{' '}
            <a
              href="https://wa.me/525535698683?text=Hola%2C%20quisiera%20hacer%20un%20pedido%20en%20Sushi%20Hari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 inline-flex items-center gap-1"
            >
              Escríbenos por WhatsApp al +52 55 3569 8683
            </a>{' '}
            o visítanos en C. Rublos 76, GAM.
          </p>

        </div>
      </div>
    </section>
  );
}
