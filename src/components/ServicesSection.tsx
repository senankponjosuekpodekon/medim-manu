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
    <section id="accompagnements" className="py-16 sm:py-20 lg:py-24 bg-base relative border-t border-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-gold font-bold px-3 py-1.5 rounded-full bg-card-2 border border-gold">
            Nos Accompagnements
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-main leading-tight">
            Des Solutions Spirituelles <br className="hidden sm:block" />
            <span className="text-gold-gradient">Sur-Mesure pour Vous</span>
          </h2>
          <p className="text-sm sm:text-base text-soft leading-relaxed">
            Chaque accompagnement débute par une analyse préalable de votre situation. Découvrez nos domaines d'expertise, pratiqués dans les règles sacrées de la tradition béninoise.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {OFFERINGS.map((offer, idx) => {
            const offerWhatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(offer.presetMessage)}`;

            return (
              <div
                key={offer.id}
                className="premium-card rounded-3xl p-6 sm:p-7 space-y-5 flex flex-col justify-between relative group animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Badge if present */}
                {offer.badge && (
                  <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-gold/20 border border-gold text-gold text-xs font-bold">
                    {offer.badge}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-card-2 to-base border border-gold flex items-center justify-center text-gold shadow-lg group-hover:scale-110 transition-transform">
                    {getIcon(offer.iconName)}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-main group-hover:text-gold transition-colors">
                    {offer.title}
                  </h3>

                  <p className="text-sm text-soft leading-relaxed">
                    {offer.shortDescription}
                  </p>

                  {/* 3 Benefits List */}
                  <div className="space-y-2 pt-3 border-t border-soft">
                    <p className="text-xs font-bold uppercase tracking-wider text-gold">
                      Bénéfices :
                    </p>
                    {offer.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-sm text-soft">
                        <div className="w-4 h-4 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="space-y-3 pt-4 border-t border-soft/80">
                  <a
                    href={offerWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-main font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Discuter sur WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSelectedService(offer)}
                    className="w-full py-2 text-xs text-muted hover:text-gold font-medium flex items-center justify-center gap-1 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>En savoir plus</span>
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
          <div className="bg-card border border-gold rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 text-muted hover:text-main p-2 rounded-full bg-card/50"
            >
              ✕
            </button>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-icon border border-gold text-gold">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs text-gold font-semibold uppercase tracking-wider">
                  Accompagnement Sur-Mesure
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-main">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-soft leading-relaxed">
              <p className="bg-base p-4 rounded-xl border border-soft">
                {selectedService.fullDescription}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-gold font-bold">
                  Bénéfices Attendus :
                </h4>
                <ul className="space-y-2">
                  {selectedService.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-soft">
                      <Check className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-themed border border-amber-themed text-xs text-amber-themed">
                <strong>Recommandé pour :</strong> {selectedService.recommendedFor}
              </div>
            </div>

            <div className="pt-4 border-t border-soft flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent(selectedService.presetMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-xl bg-[#25D366] text-main font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Demander cet accompagnement sur WhatsApp</span>
              </a>

              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-3 rounded-xl bg-card text-soft hover:bg-card-2 text-xs font-semibold"
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
