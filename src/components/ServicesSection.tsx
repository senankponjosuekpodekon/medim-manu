import React, { useState } from 'react';
import { 
  HeartHandshake, KeyRound, ShieldAlert, Coins, Compass, Briefcase, Flame, 
  Check, MessageCircle, ArrowRight, Info 
} from 'lucide-react';
import { OFFERINGS } from '../data/content';
import { ServiceOffering } from '../types';

interface ServicesSectionProps {
  whatsappNumber: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ whatsappNumber }) => {
  const [selectedService, setSelectedService] = useState<ServiceOffering | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      case 'KeyRound': return <KeyRound className="w-6 h-6" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      case 'Coins': return <Coins className="w-6 h-6" />;
      case 'Compass': return <Compass className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      case 'Flame': return <Flame className="w-6 h-6" />;
      default: return <HeartHandshake className="w-6 h-6" />;
    }
  };

  const whatsappClean = whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <section id="accompagnements" className="py-20 bg-[#08120F] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold px-3 py-1 rounded-full bg-[#132A22] border border-[#C5A059]/30">
            Travaillons Ensemble sur Votre Situation
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Nos Accompagnements <br />
            <span className="text-gold-gradient">Spirituels Sur-Mesure</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Chaque accompagnement est initié à la suite d'une analyse préalable. Découvrez nos domaines d'expertise réalisés dans les règles sacrées de la tradition béninoise.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFERINGS.map((offer) => {
            const offerWhatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(offer.presetMessage)}`;

            return (
              <div
                key={offer.id}
                className="glass-panel glass-panel-hover rounded-3xl p-7 space-y-6 flex flex-col justify-between relative group border-gold-glow"
              >
                {/* Badge if present */}
                {offer.badge && (
                  <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#DFB86A] text-[11px] font-bold">
                    {offer.badge}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#16382E] to-[#08120F] border border-[#C5A059]/30 flex items-center justify-center text-[#DFB86A] shadow-lg group-hover:scale-105 transition-transform">
                    {getIcon(offer.iconName)}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-serif-luxury text-2xl font-bold text-white group-hover:text-[#DFB86A] transition-colors">
                    {offer.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {offer.shortDescription}
                  </p>

                  {/* 3 Benefits List */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">
                      Bénéfices Majeurs :
                    </p>
                    {offer.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="space-y-3 pt-4 border-t border-slate-800/80">
                  <a
                    href={offerWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20 hover:scale-[1.02] transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Discuter sur WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSelectedService(offer)}
                    className="w-full py-2 text-xs text-slate-400 hover:text-[#DFB86A] font-medium flex items-center justify-center gap-1 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>En savoir plus sur cet accompagnement</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal for Selected Service */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#0F261F] border border-[#C5A059]/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full bg-slate-800/50"
            >
              ✕
            </button>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#16382E] border border-[#C5A059]/40 text-[#DFB86A]">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs text-[#C5A059] font-semibold uppercase tracking-wider">
                  Accompagnement Sur-Mesure
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p className="bg-[#08120F] p-4 rounded-xl border border-slate-800">
                {selectedService.fullDescription}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-[#C5A059] font-bold">
                  Bénéfices Attendus :
                </h4>
                <ul className="space-y-2">
                  {selectedService.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-900/40 text-xs text-amber-200">
                <strong>Recommandé pour :</strong> {selectedService.recommendedFor}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent(selectedService.presetMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Demander cet accompagnement sur WhatsApp</span>
              </a>

              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-3 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold"
              >
                Fermer
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
