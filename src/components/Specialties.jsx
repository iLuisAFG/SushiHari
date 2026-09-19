import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, specialtiesList } from '../data/specialtiesData';
import { Sparkles, ArrowUpRight, Utensils } from 'lucide-react';

export default function Specialties() {
  const [activeCategory, setActiveCategory] = useState('todos');

  const filteredItems = activeCategory === 'todos'
    ? specialtiesList
    : specialtiesList.filter((item) => item.category === activeCategory);

  return (
    <section id="especialidades" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
          <Sparkles className="w-3.5 h-3.5" />
          Nuestras Creaciones Populares
        </div>
        <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Especialidades de la Casa
        </h2>
        <p className="text-sm sm:text-base text-stone-400 font-light">
          Platillos insignia, makis de autor y paquetes completos preparados al momento con ingredientes de calidad en Sushi Hari.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg shadow-amber-500/20 font-bold'
                : 'text-stone-300 hover:text-white bg-stone-900/60 border border-stone-800 hover:border-stone-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Dishes */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((dish) => (
            <motion.div
              layout
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              className={`glass-card rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 border ${
                dish.highlight ? 'border-amber-500/40 bg-gradient-to-b from-[#181820] to-[#101014]' : 'border-white/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                    dish.highlight 
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                      : 'bg-stone-800 text-stone-300 border border-stone-700'
                  }`}>
                    {dish.badge}
                  </span>
                  <span className="text-stone-500 text-xs font-mono">
                    Sushi Hari
                  </span>
                </div>

                <h3 className="font-serif-title font-bold text-xl text-white group-hover:text-amber-400 transition-colors">
                  {dish.name}
                </h3>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mt-2.5 font-light">
                  {dish.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-stone-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-stone-500 block font-mono">Precio</span>
                  <span className="font-bold text-xl text-amber-400 font-mono tabular-nums">
                    {dish.price} <span className="text-xs text-stone-400">MXN</span>
                  </span>
                </div>

                <a
                  href={`https://wa.me/525535698683?text=Hola%2C%20quisiera%20pedir%20el%20platillo%20${encodeURIComponent(dish.name)}%20en%20Sushi%20Hari`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-red-600/90 to-amber-600/90 hover:from-red-500 hover:to-amber-500 text-white flex items-center gap-1.5 text-xs font-bold transition-all shadow-md group-hover:shadow-amber-500/20"
                  title="Ordenar por WhatsApp"
                >
                  <span>Pedir</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
  );
}
