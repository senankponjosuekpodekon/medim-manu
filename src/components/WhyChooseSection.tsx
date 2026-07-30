import React from 'react';
import { Crown, ShieldCheck, Sparkles, HeartHandshake, Globe2, ScrollText } from 'lucide-react';
import { WHY_CHOOSE_MANU } from '../data/content';

export const WhyChooseSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown': return <Crown className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      case 'Globe2': return <Globe2 className="w-6 h-6" />;
      case 'ScrollText': return <ScrollText className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="pourquoi" className="py-16 sm:py-20 lg:py-24 bg-base relative border-t border-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-gold font-bold px-3 py-1.5 rounded-full bg-card-2 border border-gold">
            Piliers de Confiance
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-main leading-tight">
            Pourquoi Accorder Votre Confiance à <br className="hidden sm:block" />
            <span className="text-gold-gradient">Medium Manu ?</span>
          </h2>
          <p className="text-sm sm:text-base text-soft leading-relaxed">
            Face à la multitude d'offres incertaines sur internet, découvrez les fondements éthiques et la tradition séculaire qui distinguent un accompagnement authentique au Bénin.
          </p>
        </div>

        {/* 6 Pillars Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_MANU.map((pillar, idx) => (
            <div
              key={idx}
              className="premium-card rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden group animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent group-hover:via-[#DFB86A] transition-all" />

              {/* Icon Box */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#16382E] to-[#0A1814] border border-gold flex items-center justify-center text-gold shadow-md group-hover:scale-110 transition-transform">
                {getIcon(pillar.icon)}
              </div>

              {/* Title & Description */}
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-main group-hover:text-gold transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-soft leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Assurance Quote Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-banner-gradient border border-gold text-center space-y-3 shadow-xl">
          <p className="font-serif-luxury text-lg sm:text-xl lg:text-2xl text-amber-themed italic max-w-4xl mx-auto leading-relaxed">
            « Mon rôle est de restaurer la lumière et la sérénité dans votre vie, en respectant la dignité de chaque être humain et la volonté des forces de la nature. »
          </p>
          <p className="text-xs sm:text-sm font-bold text-gold uppercase tracking-wider">
            — Medium Manu, Praticien Traditionnel
          </p>
        </div>

      </div>
    </section>
  );
};
