import React from 'react';
import { Landmark, Compass, Sprout, Heart, Quote, BookOpen } from 'lucide-react';
import { VODUN_HERITAGE } from '../data/content';

export const VodunHeritageSection: React.FC = () => {
  return (
    <section id="heritage" className="py-16 sm:py-20 lg:py-24 bg-base relative border-t border-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-gold font-bold px-3 py-1.5 rounded-full bg-card-2 border border-gold">
            Culture Ancestrale
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-main leading-tight">
            Le Vodun du Bénin : une <br className="hidden sm:block" />
            <span className="text-gold-gradient">Sagesse Scientifique & Sacrée</span>
          </h2>
          <p className="text-sm sm:text-base text-soft leading-relaxed">
            {VODUN_HERITAGE.subtitle}
          </p>
        </div>

        {/* Intro Highlight Box */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-card border border-gold mb-10 sm:mb-12 space-y-4 shadow-xl">
          <div className="flex items-center gap-3 text-gold">
            <BookOpen className="w-6 h-6" />
            <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-main">
              Démystifier les Idées Reçues
            </h3>
          </div>
          <p className="text-sm text-soft leading-relaxed">
            {VODUN_HERITAGE.introParagraph}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {VODUN_HERITAGE.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="premium-card rounded-3xl p-6 sm:p-8 space-y-3 animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-icon border border-gold flex items-center justify-center text-gold text-sm font-bold">
                0{idx + 1}
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-main">
                {pillar.title}
              </h3>
              <p className="text-sm text-soft leading-relaxed">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Banner */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-banner-gradient border border-gold text-center space-y-3 shadow-2xl">
          <Quote className="w-8 h-8 text-gold mx-auto opacity-70" />
          <p className="font-serif-luxury text-lg sm:text-xl text-amber-themed italic leading-relaxed">
            {VODUN_HERITAGE.quote}
          </p>
          <p className="text-xs sm:text-sm font-bold text-gold uppercase tracking-widest pt-2">
            — {VODUN_HERITAGE.quoteAuthor}
          </p>
        </div>

      </div>
    </section>
  );
};
