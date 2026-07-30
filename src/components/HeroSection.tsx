import React from 'react';
import { MessageCircle, Calendar, ShieldCheck, Sparkles, Award, Globe, CheckCircle } from 'lucide-react';
import { HERO_CONTENT } from '../data/content';
import { ModalType } from '../types';

interface HeroSectionProps {
  whatsappNumber: string;
  onOpenModal: (type: ModalType) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ whatsappNumber, onOpenModal }) => {
  const whatsappClean = whatsappNumber.replace(/[^0-9]/g, '');
  const directWhatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(
    "Bonjour Medium Manu, je viens de découvrir votre site web et je souhaite échanger directement avec vous."
  )}`;

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#08120F]">
      {/* Background Hero Image with Dark Gradient Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_CONTENT.heroImage}
          alt={HERO_CONTENT.imageAlt}
          className="w-full h-full object-cover object-center opacity-25 scale-105 transform filter contrast-125 brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08120F] via-[#08120F]/80 to-[#08120F]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132A22]/90 border border-[#C5A059]/40 text-[#DFB86A] text-xs font-semibold tracking-wide backdrop-blur-md shadow-md animate-fadeIn">
              <Sparkles className="w-3.5 h-3.5 text-[#DFB86A]" />
              <span>{HERO_CONTENT.badge}</span>
            </div>

            {/* H1 Main Powerful Title */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight">
              Accompagnement Spirituel <br />
              <span className="text-gold-gradient">Traditionnel & Guidance</span> <br />
              Ancestrale du Bénin
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {HERO_CONTENT.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#25D366] via-[#20BA5C] to-[#128C7E] text-white font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-3 shadow-xl shadow-[#25D366]/25 hover:scale-105 hover:shadow-[#25D366]/40 transition-all group"
              >
                <MessageCircle className="w-5 h-5 fill-current group-hover:rotate-12 transition-transform" />
                <span>{HERO_CONTENT.ctaPrimary}</span>
              </a>

              <button
                onClick={() => onOpenModal('booking')}
                className="px-7 py-4 rounded-xl bg-[#0F261F] hover:bg-[#16382E] text-white font-semibold text-sm border border-[#C5A059]/40 hover:border-[#C5A059] flex items-center justify-center gap-2.5 transition-all shadow-lg"
              >
                <Calendar className="w-4 h-4 text-[#DFB86A]" />
                <span>{HERO_CONTENT.ctaSecondary}</span>
              </button>
            </div>

            {/* Quick Micro Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#25D366]" />
                <span>Réponse rapide WhatsApp (24h/24)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                <span>Discrétion 100% garantie</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                <span>Paiements sécurisés</span>
              </div>
            </div>

          </div>

          {/* Right Hero Card / Visual Container (Col 5) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#C5A059]/40 via-[#C5A059]/10 to-transparent shadow-2xl gold-glow">
              <div className="bg-[#0F261F]/90 backdrop-blur-xl rounded-[22px] p-6 sm:p-8 space-y-6 border border-[#C5A059]/20">
                
                {/* Practitioner Header Badge */}
                <div className="flex items-center gap-4 pb-4 border-b border-slate-800">
                  <div className="relative">
                    <img
                      src={HERO_CONTENT.heroImage}
                      alt="Medium Manu au Bénin"
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#C5A059]"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#25D366] border-2 border-[#0F261F]" title="En ligne sur WhatsApp" />
                  </div>
                  <div>
                    <h3 className="font-serif-luxury text-xl font-bold text-white">
                      Medium Manu
                    </h3>
                    <p className="text-xs text-[#DFB86A] font-medium">
                      Praticien & Dignitaire Traditionnel
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Cotonou - Ouidah, République du Bénin
                    </p>
                  </div>
                </div>

                {/* Trust Arguments Grid */}
                <div className="space-y-3.5">
                  <p className="text-xs uppercase tracking-wider text-[#C5A059] font-bold">
                    Engagements de Confiance & Garantie :
                  </p>
                  {HERO_CONTENT.trustArguments.map((arg, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#08120F]/60 border border-slate-800/80">
                      <div className="p-2 rounded-lg bg-[#C5A059]/15 text-[#DFB86A] shrink-0 mt-0.5">
                        {idx === 0 && <ShieldCheck className="w-4 h-4" />}
                        {idx === 1 && <Award className="w-4 h-4" />}
                        {idx === 2 && <Globe className="w-4 h-4" />}
                        {idx === 3 && <Sparkles className="w-4 h-4" />}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">
                          {arg.title}
                        </h4>
                        <p className="text-[11px] text-slate-300 leading-snug">
                          {arg.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct Consultation Box */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-950/40 to-[#132A22] border border-[#C5A059]/30 text-center space-y-2">
                  <p className="text-xs text-amber-200 font-medium">
                    "Vous traversez un doute spirituel ou sentimental ?"
                  </p>
                  <a
                    href={directWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#DFB86A] hover:text-white underline underline-offset-4"
                  >
                    <span>Poser une question privée sur WhatsApp</span>
                    <span>→</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
