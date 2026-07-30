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
    <section id="pourquoi" className="py-20 bg-[#08120F] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold px-3 py-1 rounded-full bg-[#132A22] border border-[#C5A059]/30">
            Piliers de Confiance & Légitimité
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Pourquoi Accorder Votre Confiance à <br />
            <span className="text-gold-gradient">Medium Manu ?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Face à la multitude d'offres incertaines sur internet, découvrez les fondements éthiques et la tradition séculaire qui distinguent un accompagnement authentique au Bénin.
          </p>
        </div>

        {/* 6 Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_MANU.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-8 space-y-4 relative overflow-hidden group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent group-hover:via-[#DFB86A] transition-all" />

              {/* Icon Box */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#16382E] to-[#0A1814] border border-[#C5A059]/30 flex items-center justify-center text-[#DFB86A] shadow-md group-hover:scale-110 transition-transform">
                {getIcon(pillar.icon)}
              </div>

              {/* Title & Description */}
              <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#DFB86A] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Assurance Quote Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0F261F] via-[#143329] to-[#0F261F] border border-[#C5A059]/30 text-center space-y-3 shadow-xl">
          <p className="font-serif-luxury text-lg sm:text-xl text-amber-200 italic max-w-4xl mx-auto">
            « Mon rôle est de restaurer la lumière et la sérénité dans votre vie, en respectant la dignité de chaque être humain et la volonté des forces de la nature. »
          </p>
          <p className="text-xs font-bold text-[#DFB86A] uppercase tracking-wider">
            — Medium Manu, Praticien Traditionnel
          </p>
        </div>

      </div>
    </section>
  );
};
