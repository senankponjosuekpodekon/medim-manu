import React from 'react';
import { Landmark, Compass, Sprout, Heart, Quote, BookOpen } from 'lucide-react';
import { VODUN_HERITAGE } from '../data/content';

export const VodunHeritageSection: React.FC = () => {
  return (
    <section id="heritage" className="py-20 bg-[#08120F] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold px-3 py-1 rounded-full bg-[#132A22] border border-[#C5A059]/30">
            Pédagogie & Culture Ancestrale
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Pourquoi le Vodun du Bénin est une <br />
            <span className="text-gold-gradient">Sagesse Scientifique & Sacrée</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {VODUN_HERITAGE.subtitle}
          </p>
        </div>

        {/* Intro Highlight Box */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0F261F] border border-[#C5A059]/30 mb-12 space-y-4 shadow-xl">
          <div className="flex items-center gap-3 text-[#DFB86A]">
            <BookOpen className="w-6 h-6" />
            <h3 className="font-serif-luxury text-xl font-bold text-white">
              Démystifier les Idées Reçues
            </h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {VODUN_HERITAGE.introParagraph}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {VODUN_HERITAGE.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-3xl p-8 space-y-3 relative border-gold-glow"
            >
              <div className="w-10 h-10 rounded-xl bg-[#16382E] border border-[#C5A059]/40 flex items-center justify-center text-[#DFB86A] text-sm font-bold">
                0{idx + 1}
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-white">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Banner */}
        <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-amber-950/40 via-[#132A22] to-amber-950/40 border border-[#C5A059]/40 text-center space-y-3 shadow-2xl">
          <Quote className="w-8 h-8 text-[#DFB86A] mx-auto opacity-70" />
          <p className="font-serif-luxury text-xl text-amber-100 italic leading-relaxed">
            {VODUN_HERITAGE.quote}
          </p>
          <p className="text-xs font-bold text-[#C5A059] uppercase tracking-widest pt-2">
            — {VODUN_HERITAGE.quoteAuthor}
          </p>
        </div>

      </div>
    </section>
  );
};
