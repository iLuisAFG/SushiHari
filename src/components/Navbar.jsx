import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Clock, MapPin, FileText } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Menú Digital', href: '#menu' },
    { name: 'Horarios', href: '#horarios' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3">
      <nav className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between ${
        isScrolled ? 'glass-nav shadow-2xl border border-white/10' : 'bg-transparent border border-transparent'
      }`}>
        
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <motion.img 
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            src={`${import.meta.env.BASE_URL}logo.jpg`}
            alt="Sushi Hari Logo" 
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover border border-amber-500/30 shadow-md group-hover:border-amber-400 transition-colors"
          />
          <div>
            <span className="font-serif-title text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-amber-400 transition-colors">
              SUSHI HARI
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative hover:text-amber-400 transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#menu"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-stone-300 border border-stone-700 hover:border-amber-500 hover:text-white transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            Carta PDF
          </a>

          <a
            href="https://wa.me/525535698683?text=Hola%2C%20quisiera%20hacer%20un%20pedido%20en%20Sushi%20Hari"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 shadow-lg shadow-red-600/20 hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Phone className="w-3.5 h-3.5" />
            Pedir por WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-stone-800/60 border border-stone-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 p-5 rounded-2xl glass-nav border border-white/10 shadow-2xl space-y-4"
          >
            <div className="flex flex-col gap-3 text-base font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-stone-200 hover:text-amber-400 hover:bg-white/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-800 space-y-2">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-stone-200 border border-stone-700 bg-stone-900/60"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                Ver Carta y Descargar Menú PDF
              </a>
              <a
                href="https://wa.me/525535698683?text=Hola%2C%20quisiera%20hacer%20un%20pedido%20en%20Sushi%20Hari"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-amber-600 shadow-md"
              >
                <Phone className="w-4 h-4" />
                Pedir por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
