import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Copy, Check, Navigation, Calendar, UtensilsCrossed } from 'lucide-react';

export default function HoursLocation() {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [copied, setCopied] = useState(false);

  const address = "C. Rublos 76, Fernando Casas Alemán, Gustavo A. Madero, 07960 Ciudad de México, CDMX";
  const googleMapsUrl = "https://maps.google.com/?q=C.+Rublos+76,+Fernando+Casas+Alem%C3%A1n,+Gustavo+A.+Madero,+07960+Ciudad+de+M%C3%A9xico,+CDMX";

  useEffect(() => {
    // Check if open (12:00 to 20:00 every day)
    const checkOpen = () => {
      const now = new Date();
      const currentHour = now.getHours();
      setIsOpenNow(currentHour >= 12 && currentHour < 20);
    };
    checkOpen();
    const interval = setInterval(checkOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scheduleDays = [
    { day: 'Lunes', hours: '12:00 p.m. – 8:00 p.m.' },
    { day: 'Martes', hours: '12:00 p.m. – 8:00 p.m.' },
    { day: 'Miércoles', hours: '12:00 p.m. – 8:00 p.m.' },
    { day: 'Jueves', hours: '12:00 p.m. – 8:00 p.m.' },
    { day: 'Viernes', hours: '12:00 p.m. – 8:00 p.m.' },
    { day: 'Sábado', hours: '12:00 p.m. – 8:00 p.m.' },
    { day: 'Domingo', hours: '12:00 p.m. – 8:00 p.m.' },
  ];

  return (
    <section id="horarios" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
          <Clock className="w-3.5 h-3.5" />
          Servicio & Atención
        </div>
        <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Horarios & Ubicación
        </h2>
        <p className="text-sm sm:text-base text-stone-400 font-light">
          Estamos listos para recibirte todos los días en la alcaldía Gustavo A. Madero.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Weekly Schedule Card */}
        <div className="lg:col-span-6 glass-card rounded-3xl p-6 sm:p-8 space-y-6">
          
          <div className="flex items-center justify-between border-b border-stone-800 pb-4">
            <div>
              <h3 className="font-serif-title text-xl font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-400" />
                Horario de Atención
              </h3>
              <p className="text-xs text-stone-400">Abierto de Lunes a Domingo de forma continua</p>
            </div>

            {/* Dynamic Status Pill */}
            <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
              isOpenNow 
                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' 
                : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
            }`}>
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
              <span>{isOpenNow ? 'Abierto Ahora' : 'Cerrado Ahora (Abre 12:00 p.m.)'}</span>
            </div>
          </div>

          {/* Daily Table */}
          <div className="space-y-2 text-sm">
            {scheduleDays.map((item, idx) => (
              <div 
                key={item.day}
                className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                  idx === 5 || idx === 6
                    ? 'bg-amber-500/10 border border-amber-500/20 text-white font-medium'
                    : 'bg-stone-900/40 border border-stone-800/60 text-stone-300'
                }`}
              >
                <span>{item.day}</span>
                <span className="font-mono text-amber-400 font-bold tabular-nums">{item.hours}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Physical Address & Map */}
        <div id="ubicacion" className="lg:col-span-6 glass-card rounded-3xl p-6 sm:p-8 space-y-6">
          
          <div className="border-b border-stone-800 pb-4">
            <h3 className="font-serif-title text-xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-500" />
              Visítanos en Gustavo A. Madero
            </h3>
            <p className="text-xs text-stone-400">Punto de encuentro y recogida de pedidos en CDMX</p>
          </div>

          {/* Address Display Box */}
          <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block font-mono">
              Dirección Oficial:
            </span>
            <p className="text-base text-white font-medium leading-snug">
              C. Rublos 76, Fernando Casas Alemán
            </p>
            <p className="text-sm text-stone-400">
              Gustavo A. Madero, 07960 Ciudad de México, CDMX
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={handleCopy}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
                <span>{copied ? '¡Dirección Copiada!' : 'Copiar Dirección'}</span>
              </button>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-red-600/90 hover:bg-red-500 text-white flex items-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Cómo Llegar (Google Maps)</span>
              </a>

              <a
                href="https://wa.me/525535698683?text=Hola%2C%20quisiera%20hacer%20un%20pedido%20en%20Sushi%20Hari"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp: +52 55 3569 8683</span>
              </a>
            </div>
          </div>

          {/* Map Embed Mockup / Interactive Frame */}
          <div className="rounded-2xl overflow-hidden border border-stone-800 h-60 relative shadow-inner bg-stone-950">
            <iframe
              title="Mapa de Ubicación Sushi Hari"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.5!2d-99.088!3d19.488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f95300000001%3A0x0!2sC.%20Rublos%2076%2C%20Fernando%20Casas%20Alem%C3%A1n%2C%20Gustavo%20A.%20Madero%2C%2007960%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
              className="w-full h-full border-0 grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-stone-400">
            <span>Modalidades: Comedor en mesa & Para llevar</span>
            <span className="text-amber-400 font-semibold">C. Rublos 76</span>
          </div>

        </div>

      </div>
    </section>
  );
}
