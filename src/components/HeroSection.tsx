import React from 'react';
import { MessageCircle, Calendar, ShieldCheck, Sparkles, Award, Globe, CheckCircle, Star } from 'lucide-react';
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
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-base">
      {/* Background Hero Image with Dark Gradient Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_CONTENT.heroImage}
          alt={HERO_CONTENT.imageAlt}
          className="w-full h-full object-cover object-center hero-img-opacity scale-105 transform"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 overlay-hero" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, var(--c-gold) 0%, transparent 70%)', opacity: 0.15 }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Copy (Col 7) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left animate-fadeInUp">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-2/90 border border-gold text-gold text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>{HERO_CONTENT.badge}</span>
            </div>

            {/* H1 Main Powerful Title */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-main tracking-tight">
              Medium Manu
              <span className="block text-gold-gradient mt-1">Guide Spirituel du Bénin</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-soft font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {HERO_CONTENT.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto lg:mx-0">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium px-6 sm:px-8 py-4 rounded-xl bg-gradient-to-r from-[#25D366] via-[#20BA5C] to-[#128C7E] text-main font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-3 shadow-xl shadow-[#25D366]/25"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{HERO_CONTENT.ctaPrimary}</span>
              </a>

              <button
                onClick={() => onOpenModal('booking')}
                className="px-6 sm:px-7 py-4 rounded-xl bg-card hover:bg-icon text-main font-semibold text-sm border border-gold hover:border-[#C5A059] flex items-center justify-center gap-2.5 transition-all shadow-lg"
              >
                <Calendar className="w-4 h-4 text-gold" />
                <span>{HERO_CONTENT.ctaSecondary}</span>
              </button>
            </div>

            {/* Quick Micro Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-muted">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#25D366]" />
                <span>Réponse rapide (24h/24)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-gold" />
                <span>Discrétion 100% garantie</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-gold" />
                <span>Paiements sécurisés</span>
              </div>
            </div>

          </div>

          {/* Right Hero Card / Visual Container (Col 5) */}
          <div className="lg:col-span-5 animate-fadeInUp delay-200">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#C5A059]/40 via-[#C5A059]/10 to-transparent shadow-2xl gold-glow max-w-md mx-auto">
              <div className="bg-card/90 backdrop-blur-xl rounded-[22px] p-5 sm:p-7 space-y-5 border border-gold">
                
                {/* Practitioner Header Badge */}
                <div className="flex items-center gap-4 pb-4 border-b border-soft">
                  <div className="relative shrink-0">
                    <img
                      src={HERO_CONTENT.heroImage}
                      alt="Medium Manu au Bénin"
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#C5A059]"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#25D366] border-2 border-card" title="En ligne sur WhatsApp" />
                  </div>
                  <div>
                    <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-main">
                      Medium Manu
                    </h3>
                    <p className="text-xs sm:text-sm text-gold font-medium">
                      Praticien & Dignitaire Traditionnel
                    </p>
                    <p className="text-xs text-soft mt-0.5">
                      Cotonou - Ouidah, République du Bénin
                    </p>
                  </div>
                </div>

                {/* Trust Arguments Grid */}
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wider text-gold font-bold">
                    Pourquoi me faire confiance :
                  </p>
                  {HERO_CONTENT.trustArguments.map((arg, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-base/60 border border-soft/80">
                      <div className="p-2 rounded-lg bg-gold/15 text-gold shrink-0 mt-0.5">
                        {idx === 0 && <ShieldCheck className="w-4 h-4" />}
                        {idx === 1 && <Award className="w-4 h-4" />}
                        {idx === 2 && <Globe className="w-4 h-4" />}
                        {idx === 3 && <Sparkles className="w-4 h-4" />}
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-main">
                          {arg.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-soft leading-snug">
                          {arg.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct Consultation Box */}
                <div className="p-4 rounded-xl bg-banner-gradient border border-gold text-center space-y-2">
                  <p className="text-xs sm:text-sm text-amber-themed font-medium">
                    "Vous traversez un doute spirituel ou sentimental ?"
                  </p>
                  <a
                    href={directWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold hover:text-main underline underline-offset-4"
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
