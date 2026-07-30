import React from 'react';
import { MessageCircle, Calendar, ShieldCheck, Clock, HeartHandshake, Sparkles } from 'lucide-react';
import { FINAL_CTA } from '../data/content';
import { ModalType } from '../types';

interface FinalCtaSectionProps {
  whatsappNumber: string;
  onOpenModal: (type: ModalType) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ whatsappNumber, onOpenModal }) => {
  const whatsappClean = whatsappNumber.replace(/[^0-9]/g, '');
  const directWhatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(
    "Bonjour Medium Manu, je souhaite faire le premier pas et échanger avec vous en toute confidentialité."
  )}`;

  return (
    <section className="py-16 sm:py-24 bg-section-gradient relative overflow-hidden border-t border-section">
      {/* Background Decorative Gold Radial */}
      <div className="absolute inset-0 opacity-50" style={{ background: 'radial-gradient(circle at center, var(--c-gold) 0%, transparent 70%)', opacity: 0.1 }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-2 border border-gold text-gold text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl">
          <Sparkles className="w-4 h-4 text-gold" />
          <span>Faites le Premier Pas</span>
        </div>

        {/* Title */}
        <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold text-main leading-tight">
          {FINAL_CTA.h2Title}
        </h2>

        {/* Emotional Subtitle */}
        <p className="text-base sm:text-lg text-soft max-w-3xl mx-auto leading-relaxed">
          {FINAL_CTA.paragraph}
        </p>

        {/* Guarantees Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 py-2">
          {FINAL_CTA.guarantees.map((g, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-amber-themed bg-base/80 px-4 py-2 rounded-xl border border-amber-themed">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              <span>{g}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
          <a
            href={directWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl bg-gradient-to-r from-[#25D366] via-[#20BA5C] to-[#128C7E] text-main font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-3 shadow-2xl shadow-[#25D366]/30"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{FINAL_CTA.primaryButton}</span>
          </a>

          <button
            onClick={() => onOpenModal('booking')}
            className="w-full sm:w-auto px-6 sm:px-7 py-4 rounded-xl bg-card hover:bg-icon text-main font-semibold text-sm border border-gold hover:border-[#C5A059] flex items-center justify-center gap-2.5 transition-all shadow-xl"
          >
            <Calendar className="w-4 h-4 text-gold" />
            <span>{FINAL_CTA.secondaryButton}</span>
          </button>
        </div>

        {/* Reassuring Micro Note */}
        <p className="text-xs sm:text-sm text-muted italic">
          "Votre message arrive directement sur le téléphone privé de Medium Manu. Aucun intermédiaire."
        </p>

      </div>
    </section>
  );
};
