import React from 'react';
import { ABOUT_MANU } from '../data/content';
import { Shield, Heart, Eye, UserCheck, MessageCircle } from 'lucide-react';

interface AboutSectionProps {
  whatsappNumber: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ whatsappNumber }) => {
  const whatsappClean = whatsappNumber.replace(/[^0-9]/g, '');
  const directWhatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(
    "Bonjour Medium Manu, j'ai lu votre présentation et je souhaite échanger personnellement avec vous."
  )}`;

  return (
    <section id="apropos" className="py-20 bg-[#060E0C] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Visuals (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#C5A059]/50 via-[#C5A059]/20 to-transparent shadow-2xl gold-glow">
              <div className="bg-[#0F261F] rounded-[22px] overflow-hidden">
                <img
                  src={ABOUT_MANU.portraitImage}
                  alt="Medium Manu portrait"
                  className="w-full h-[420px] object-cover object-top hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 space-y-2 bg-[#08120F]/90 border-t border-[#C5A059]/30">
                  <h3 className="font-serif-luxury text-2xl font-bold text-white">
                    Medium Manu
                  </h3>
                  <p className="text-xs text-[#DFB86A] font-medium">
                    Héritier de Tradition & Dignitaire au Bénin
                  </p>
                  <p className="text-xs text-slate-400">
                    Bénin • Consultations à Distance & en Présentiel
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-Artifact Image preview */}
            <div className="rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-lg relative group">
              <img
                src={ABOUT_MANU.artifactsImage}
                alt="Instruments traditionnels et plantes sacrées"
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-3">
                <p className="text-[11px] text-amber-200 font-medium">
                  Instruments divinatoires et plantes sacrées du sanctuaire
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Story Copy & Values (Col 7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold px-3 py-1 rounded-full bg-[#132A22] border border-[#C5A059]/30">
                Parcours & Valeurs Humaines
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {ABOUT_MANU.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#DFB86A] font-semibold tracking-wide">
                {ABOUT_MANU.subtitle}
              </p>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {ABOUT_MANU.paragraphs.map((p, idx) => (
                <p key={idx} className="bg-[#0F261F]/40 p-4 rounded-xl border border-slate-800/80">
                  {p}
                </p>
              ))}
            </div>

            {/* 4 Core Values Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {ABOUT_MANU.values.map((v, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0F261F] border border-[#C5A059]/20 space-y-1">
                  <h4 className="text-xs font-bold text-[#DFB86A] uppercase tracking-wider">
                    {v.title}
                  </h4>
                  <p className="text-[11px] text-slate-300">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Faire Connaissance sur WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
