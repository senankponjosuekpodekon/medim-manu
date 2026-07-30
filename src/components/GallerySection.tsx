import React, { useState } from 'react';
import { Maximize2, X, Info, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="galerie" className="py-20 bg-[#060E0C] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold px-3 py-1 rounded-full bg-[#132A22] border border-[#C5A059]/30">
            Aperçu de la Tradition Béninoise
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Galerie & Lieux de <br />
            <span className="text-gold-gradient">Cérémonie Sacrée</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Plongez au cœur de la réalité traditionnelle : découvrez les lieux de prières, la pharmacopée des plantes sacrées et l'oracle Fá du Bénin.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden cursor-pointer group border-gold-glow flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08120F] via-transparent to-transparent opacity-80" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#08120F]/80 backdrop-blur-md border border-[#C5A059]/40 text-[#DFB86A] text-[10px] font-bold">
                  {item.category}
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-[#C5A059] text-[#08120F]">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-serif-luxury text-lg font-bold text-white group-hover:text-[#DFB86A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Gallery Modal Lightbox */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#0F261F] border border-[#C5A059]/40 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative space-y-0">
            
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 text-slate-300 hover:text-white p-2.5 rounded-full bg-black/60 backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-80 sm:h-96">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F261F] via-transparent to-transparent" />
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-[#132A22] border border-[#C5A059]/40 text-[#DFB86A] text-xs font-bold">
                  {activeItem.category}
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-white">
                  {activeItem.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeItem.description}
              </p>

              <div className="p-4 rounded-xl bg-[#08120F] border border-[#C5A059]/30 text-xs text-amber-200/90 leading-relaxed space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#DFB86A]">
                  <Sparkles className="w-4 h-4" />
                  <span>Portée Culturelle & Rituelles :</span>
                </div>
                <p>{activeItem.culturalContext}</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
