import React from 'react';
import { MessageSquare, Search, FileCheck, Flame, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

interface ProcessSectionProps {
  whatsappNumber: string;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ whatsappNumber }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'Search': return <Search className="w-5 h-5" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5" />;
      default: return <MessageSquare className="w-5 h-5" />;
    }
  };

  const whatsappClean = whatsappNumber.replace(/[^0-9]/g, '');
  const directWhatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(
    "Bonjour Medium Manu, je souhaite entamer la première étape de mon accompagnement spirituel."
  )}`;

  return (
    <section id="processus" className="py-16 sm:py-20 lg:py-24 bg-alt relative border-t border-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-gold font-bold px-3 py-1.5 rounded-full bg-card-2 border border-gold">
            Un Parcours Transparent
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-main leading-tight">
            Comment Se Déroule Votre <br className="hidden sm:block" />
            <span className="text-gold-gradient">Accompagnement Spirituel ?</span>
          </h2>
          <p className="text-sm sm:text-base text-soft leading-relaxed">
            Pas de démarche obscure. Chaque étape est clairement expliquée pour vous offrir une sérénité absolue, du premier message au suivi final.
          </p>
        </div>

        {/* Steps Timeline / Cards */}
        <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="premium-card rounded-3xl p-5 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 relative overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Left Number & Icon */}
              <div className="flex items-center gap-4 sm:gap-5 shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-card-2 to-base border border-gold flex flex-col items-center justify-center text-gold shadow-lg">
                  <span className="text-xs font-bold font-mono opacity-80">{step.number}</span>
                  {getIcon(step.iconName)}
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-gold font-bold">
                    Étape {step.number} • {step.duration}
                  </span>
                  <h3 className="font-serif-luxury text-lg sm:text-2xl font-bold text-main">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-themed/90 font-medium mt-0.5">
                    {step.subtitle}
                  </p>
                </div>
              </div>

              {/* Center Description */}
              <div className="flex-1 space-y-2">
                <p className="text-sm text-soft leading-relaxed">
                  {step.description}
                </p>

                {/* Key Actions Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {step.keyActions.map((action, aIdx) => (
                    <span
                      key={aIdx}
                      className="px-2.5 py-1 rounded-md bg-base border border-soft text-xs text-soft"
                    >
                      ✓ {action}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Call To Action Box for Process */}
        <div className="mt-10 sm:mt-14 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-banner-gradient border border-gold text-center space-y-4 shadow-2xl gold-glow">
          <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-main">
            Prêt(e) à Franchir la Première Étape ?
          </h3>
          <p className="text-sm text-soft max-w-xl mx-auto">
            Le premier contact sur WhatsApp ne vous engage à rien et se déroule dans la plus stricte confidentialité.
          </p>
          <a
            href={directWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BA5C] text-main font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Commencer l'Étape 1 sur WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
