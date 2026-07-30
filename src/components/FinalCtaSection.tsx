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
    <section className="py-24 bg-gradient-to-b from-[#08120F] via-[#0D261E] to-[#060E0C] relative overflow-hidden border-t border-slate-900">
      {/* Background Decorative Gold Radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-transparent opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#132A22] border border-[#C5A059]/50 text-[#DFB86A] text-xs font-bold uppercase tracking-wider shadow-xl">
          <Sparkles className="w-4 h-4 text-[#DFB86A]" />
          <span>Faites Le Premier Pas Vers Votre Sérénité</span>
        </div>

        {/* Title */}
        <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {FINAL_CTA.h2Title}
        </h2>

        {/* Emotional Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {FINAL_CTA.paragraph}
        </p>

        {/* Guarantees Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 py-2">
          {FINAL_CTA.guarantees.map((g, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-amber-200 bg-[#08120F]/80 px-4 py-2 rounded-xl border border-amber-900/40">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              <span>{g}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <a
            href={directWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#25D366] via-[#20BA5C] to-[#128C7E] text-white font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-3 shadow-2xl shadow-[#25D366]/30 hover:scale-105 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{FINAL_CTA.primaryButton}</span>
          </a>

          <button
            onClick={() => onOpenModal('booking')}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0F261F] hover:bg-[#16382E] text-white font-semibold text-sm border border-[#C5A059]/50 hover:border-[#C5A059] flex items-center justify-center gap-2.5 transition-all shadow-xl"
          >
            <Calendar className="w-4 h-4 text-[#DFB86A]" />
            <span>{FINAL_CTA.secondaryButton}</span>
          </button>
        </div>

        {/* Reassuring Micro Note */}
        <p className="text-xs text-slate-400 italic">
          "Votre message arrive directement sur le téléphone privé de Medium Manu. Aucune secrétaire, aucun intermédiaire."
        </p>

      </div>
    </section>
  );
};
