import React from 'react';
import { MapPin, Clock, Phone, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-800/80 bg-[#070709] text-stone-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={`${import.meta.env.BASE_URL}logo.jpg`} 
                alt="Sushi Hari Logo" 
                className="w-12 h-12 rounded-xl object-cover border border-amber-500/30"
              />
              <div>
                <span className="font-serif-title text-xl font-bold text-white tracking-wider block">
                  SUSHI HARI
                </span>
                <span className="text-xs text-amber-400 font-mono tracking-widest font-bold">
                  RESTAURANTE DE SUSHI
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed font-light max-w-sm">
              Sabor artesanal, pesca fresca del día y rollos preparados al momento en Gustavo A. Madero, Ciudad de México.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono">Navegación</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-amber-400 transition-colors">Inicio</a></li>
              <li><a href="#especialidades" className="hover:text-amber-400 transition-colors">Especialidades</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Descargar Menú PDF</a></li>
              <li><a href="#horarios" className="hover:text-amber-400 transition-colors">Horarios de Atención</a></li>
              <li><a href="#ubicacion" className="hover:text-amber-400 transition-colors">Ubicación y Mapa</a></li>
            </ul>
          </div>

          {/* Business Info */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider font-mono">Contacto & Ubicación</h4>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>C. Rublos 76, Fernando Casas Alemán, Gustavo A. Madero, 07960 CDMX</span>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Lunes a Domingo: 12:00 p.m. – 8:00 p.m.</span>
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/525535698683?text=Hola%2C%20quisiera%20hacer%20un%20pedido%20en%20Sushi%20Hari"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-600/30 hover:bg-emerald-600/30 font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp: +52 55 3569 8683</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Sushi Hari. Todos los derechos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
