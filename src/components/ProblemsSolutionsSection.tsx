import React, { useState } from 'react';
import { Heart, Zap, TrendingUp, Shield, Eye, ArrowRight, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import { PROBLEMS_SOLUTIONS } from '../data/content';

interface ProblemsSolutionsSectionProps {
  whatsappNumber: string;
}

export const ProblemsSolutionsSection: React.FC<ProblemsSolutionsSectionProps> = ({ whatsappNumber }) => {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS_SOLUTIONS[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart': return <Heart className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Shield': return <Shield className="w-5 h-5" />;
      case 'Eye': return <Eye className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const whatsappClean = whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-alt relative border-t border-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-14">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-gold font-bold px-3 py-1.5 rounded-full bg-card-2 border border-gold">
            Comprendre Votre Situation
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-main leading-tight">
            Quelle Situation Traversez-Vous <br className="hidden sm:block" />
            <span className="text-gold-gradient">En Ce Moment ?</span>
          </h2>
          <p className="text-sm sm:text-base text-soft leading-relaxed">
            Chaque épreuve possède une cause visible et une racine invisible. Identifiez le problème qui vous pèse pour découvrir la réponse traditionnelle appropriée.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
          {PROBLEMS_SOLUTIONS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-[#DFB86A] to-[#C5A059] text-main border-[#C5A059] shadow-lg shadow-[#C5A059]/20'
                  : 'bg-card text-soft border-soft hover:border-gold hover:text-main'
              }`}
            >
              {getIcon(item.iconName)}
              <span className="hidden sm:inline">{item.category}</span>
              <span className="sm:hidden">{item.category.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Problem - Solution Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {PROBLEMS_SOLUTIONS.filter(item => item.id === activeTab).map((item) => {
            const specificMsg = `Bonjour Medium Manu, je me reconnais dans la situation : "${item.problemTitle}". J'aimerais échanger avec vous pour trouver une solution.`;
            const itemWhatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(specificMsg)}`;

            return (
              <React.Fragment key={item.id}>
                
                {/* Problem Side (Col 6) */}
                <div className="lg:col-span-6 bg-card border border-amber-themed rounded-3xl p-6 sm:p-8 space-y-5 flex flex-col justify-between shadow-xl animate-fadeInUp">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-themed border border-amber-themed text-gold text-xs font-bold uppercase tracking-wider">
                      <AlertCircle className="w-3.5 h-3.5 text-gold" />
                      <span>Le Problème</span>
                    </div>

                    <h3 className="font-serif-luxury text-xl sm:text-2xl lg:text-3xl font-bold text-amber-themed leading-snug">
                      {item.problemTitle}
                    </h3>

                    <p className="text-sm text-soft leading-relaxed">
                      {item.problemDescription}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-base border border-amber-themed text-xs sm:text-sm text-amber-themed/80 leading-relaxed italic">
                    "Ces symptômes entraînent souvent un sentiment d'isolement, de la fatigue morale et une incertitude pesante au quotidien."
                  </div>
                </div>

                {/* Solution Side (Col 6) */}
                <div className="lg:col-span-6 bg-card border border-gold rounded-3xl p-6 sm:p-8 space-y-5 flex flex-col justify-between shadow-xl gold-glow animate-fadeInUp delay-200">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card-2 border border-gold text-gold text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>La Solution Traditionnelle</span>
                    </div>

                    <h3 className="font-serif-luxury text-xl sm:text-2xl lg:text-3xl font-bold text-main leading-snug">
                      {item.solutionTitle}
                    </h3>

                    <p className="text-sm text-soft leading-relaxed">
                      {item.solutionDescription}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <a
                      href={itemWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-premium w-full py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-main font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Parler de ce problème sur WhatsApp</span>
                    </a>
                  </div>
                </div>

              </React.Fragment>
            );
          })}
        </div>

        {/* All Categories Quick List */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {PROBLEMS_SOLUTIONS.map((ps) => (
            <button
              key={ps.id}
              onClick={() => setActiveTab(ps.id)}
              className={`p-4 rounded-2xl border text-left transition-all space-y-2 ${
                activeTab === ps.id
                  ? 'bg-card-2 border-[#C5A059] text-main'
                  : 'bg-base border-soft text-muted hover:text-soft'
              }`}
            >
              <div className="text-gold">
                {getIcon(ps.iconName)}
              </div>
              <p className="text-xs font-bold text-main">
                {ps.category}
              </p>
              <p className="text-xs text-muted line-clamp-2">
                {ps.solutionTitle}
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
