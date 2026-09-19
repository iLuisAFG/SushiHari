import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, FileText, ChevronRight, Sparkles, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-red-600/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Copywriting & CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          
          {/* Real Schedule Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-stone-900/80 border border-amber-500/30 text-amber-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono">Abierto Hoy: 12:00 p.m. – 8:00 p.m.</span>
            <span className="text-stone-500">•</span>
            <span className="text-stone-300">Lunes a Domingo</span>
          </div>

          <h1 className="font-serif-title text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            El Auténtico <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-amber-200">
              Sabor del Sushi
            </span> <br />
            en la CDMX
          </h1>

          <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-stone-300 leading-relaxed font-light">
            Ingredientes frescos de calidad superior, rollos de autor y el espíritu de nuestro <strong className="text-white font-medium">Ninja Maneki-Neko</strong>. Disfruta en nuestro comedor o pide para llevar en Gustavo A. Madero.
          </p>

          {/* Quick Real Address Indicator */}
          <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-stone-400">
            <MapPin className="w-4 h-4 text-red-500 shrink-0" />
            <span>C. Rublos 76, Fernando Casas Alemán, GAM, 07960 CDMX</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#menu"
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-red-500 to-amber-600 hover:from-red-500 hover:to-amber-500 shadow-xl shadow-red-600/30 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Menú & Carta PDF
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/525535698683?text=Hola%2C%20quisiera%20hacer%20un%20pedido%20en%20Sushi%20Hari"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Pedir WhatsApp
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#ubicacion"
              className="w-full sm:w-auto px-5 py-4 rounded-xl font-semibold text-sm text-stone-200 border border-stone-700 hover:border-amber-500 hover:text-white bg-stone-900/60 transition-all flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              Ubicación
            </motion.a>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-800/80 max-w-md mx-auto lg:mx-0">
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-amber-400 font-serif-title">100%</span>
              <span className="text-[11px] text-stone-400">Pesca Fresca</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-red-500 font-serif-title">7 Días</span>
              <span className="text-[11px] text-stone-400">12:00 a 20:00 hrs</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-white font-serif-title">GAM</span>
              <span className="text-[11px] text-stone-400">CDMX</span>
            </div>
          </div>

        </motion.div>

        {/* Right Column: Emblematic Logo & Visual Medallion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="relative group">
            
            {/* Animated Rotating Aura */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-red-600 via-amber-500 to-red-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-700"></div>

            {/* Kanji Watermark Behind */}
            <div className="absolute -top-10 -right-8 text-8xl font-jp text-white/[0.03] select-none pointer-events-none">
              寿し
            </div>

            {/* Logo Container Card */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="relative rounded-3xl p-4 sm:p-5 bg-gradient-to-b from-[#18181D] to-[#0E0E12] border border-amber-500/20 shadow-2xl"
            >
              <img 
                src={`${import.meta.env.BASE_URL}logo.jpg`} 
                alt="Sushi Hari - Logotipo Oficial Ninja Cat" 
                className="w-72 h-72 sm:w-88 sm:h-88 object-cover rounded-2xl shadow-inner border border-white/5"
              />

              {/* Card Footer Info */}
              <div className="pt-4 text-center">
                <div className="flex items-center justify-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  Sushi Hari
                </div>
                <span className="text-[11px] text-stone-400 block mt-0.5">
                  C. Rublos 76 • Gustavo A. Madero, CDMX
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
