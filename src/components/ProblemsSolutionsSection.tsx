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
    <section className="py-20 bg-[#060E0C] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold px-3 py-1 rounded-full bg-[#132A22] border border-[#C5A059]/30">
            Comprendre Vos Douleurs & Vos Besoins
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Quelle Situation Traversez-Vous <br />
            <span className="text-gold-gradient">En Ce Moment ?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Chaque épreuve de la vie possède une cause visible et une racine invisible. Identifiez le problème qui vous pèse pour découvrir la réponse traditionnelle appropriée.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {PROBLEMS_SOLUTIONS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-[#DFB86A] to-[#C5A059] text-[#08120F] border-[#C5A059] shadow-lg shadow-[#C5A059]/20'
                  : 'bg-[#0F261F] text-slate-300 border-slate-800 hover:border-[#C5A059]/40 hover:text-white'
              }`}
            >
              {getIcon(item.iconName)}
              <span>{item.category}</span>
            </button>
          ))}
        </div>

        {/* Problem - Solution Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {PROBLEMS_SOLUTIONS.filter(item => item.id === activeTab).map((item) => {
            const specificMsg = `Bonjour Medium Manu, je me reconnais dans la situation : "${item.problemTitle}". J'aimerais échanger avec vous pour trouver une solution.`;
            const itemWhatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(specificMsg)}`;

            return (
              <React.Fragment key={item.id}>
                
                {/* Problem Side (Col 6) */}
                <div className="lg:col-span-6 bg-[#18110D] border border-amber-900/40 rounded-3xl p-8 space-y-6 flex flex-col justify-between shadow-xl">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/50 text-amber-300 text-xs font-bold uppercase tracking-wider">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                      <span>Le Problème Constaté</span>
                    </div>

                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-amber-100 leading-snug">
                      {item.problemTitle}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.problemDescription}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0F0B08] border border-amber-950 text-xs text-amber-200/80 leading-relaxed italic">
                    "Ces symptômes entraînent souvent un sentiment d'isolement, de la fatigue morale et une incertitude pesante au quotidien."
                  </div>
                </div>

                {/* Solution Side (Col 6) */}
                <div className="lg:col-span-6 bg-[#0F261F] border border-[#C5A059]/40 rounded-3xl p-8 space-y-6 flex flex-col justify-between shadow-xl gold-glow">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132A22] border border-[#C5A059]/50 text-[#DFB86A] text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>La Réponse Traditionnelle du Bénin</span>
                    </div>

                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white leading-snug">
                      {item.solutionTitle}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.solutionDescription}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <a
                      href={itemWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 hover:scale-[1.02] transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Soumettre ce problème à Medium Manu sur WhatsApp</span>
                    </a>
                  </div>
                </div>

              </React.Fragment>
            );
          })}
        </div>

        {/* All Categories Quick List */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROBLEMS_SOLUTIONS.map((ps) => (
            <button
              key={ps.id}
              onClick={() => setActiveTab(ps.id)}
              className={`p-4 rounded-2xl border text-left transition-all space-y-2 ${
                activeTab === ps.id
                  ? 'bg-[#132A22] border-[#C5A059] text-white'
                  : 'bg-[#08120F] border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="text-[#DFB86A]">
                {getIcon(ps.iconName)}
              </div>
              <p className="text-xs font-bold text-white">
                {ps.category}
              </p>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                {ps.solutionTitle}
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
