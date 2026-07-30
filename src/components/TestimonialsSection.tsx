import React, { useState } from 'react';
import { Star, CheckCircle, Quote, Filter, MessageCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

interface TestimonialsSectionProps {
  whatsappNumber: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ whatsappNumber }) => {
  const [filterDomain, setFilterDomain] = useState<string>('Tous');

  const domains = ['Tous', 'Retour Affectif', 'Déblocage Spirituel', 'Protection Spirituelle', 'Attirance d\'Argent', 'Promotion Professionnelle'];

  const filteredTestimonials = filterDomain === 'Tous'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.domain.toLowerCase().includes(filterDomain.toLowerCase()));

  const whatsappClean = whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <section id="temoignages" className="py-20 bg-[#08120F] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold px-3 py-1 rounded-full bg-[#132A22] border border-[#C5A059]/30">
            Retours d'Expérience Internationaux
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Témoignages & Récits de <br />
            <span className="text-gold-gradient">Personnes Accompagnées</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Découvrez des témoignages authentiques provenant de France, Belgique, Suisse, Canada, USA et des Antilles. Chaque histoire reflète le respect des traditions.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {domains.map((dom) => (
            <button
              key={dom}
              onClick={() => setFilterDomain(dom)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 border ${
                filterDomain === dom
                  ? 'bg-gradient-to-r from-[#DFB86A] to-[#C5A059] text-[#08120F] border-[#C5A059] shadow-md'
                  : 'bg-[#0F261F] text-slate-300 border-slate-800 hover:border-[#C5A059]/40 hover:text-white'
              }`}
            >
              <Filter className="w-3 h-3" />
              <span>{dom}</span>
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="glass-panel glass-panel-hover rounded-3xl p-7 space-y-5 flex flex-col justify-between relative overflow-hidden border-gold-glow"
            >
              {/* Top Row: Name, Country Flag & Rating */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#16382E] border border-[#C5A059]/40 flex items-center justify-center text-lg shadow-inner">
                      {t.flag}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif-luxury text-xl font-bold text-white">
                          {t.clientName}
                        </h3>
                        {t.verified && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#25D366]/20 text-[#25D366] text-[10px] font-bold">
                            <CheckCircle className="w-3 h-3" />
                            Accompagnement Vérifié
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400">
                        {t.location} • {t.date}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 text-[#DFB86A]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Domain Tag */}
                <div className="inline-block px-3 py-1 rounded-md bg-[#08120F] border border-[#C5A059]/30 text-[#DFB86A] text-[11px] font-bold">
                  Problème : {t.domain}
                </div>

                {/* Story */}
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed pt-1">
                  "{t.story}"
                </p>
              </div>

              {/* Outcome Box */}
              <div className="p-4 rounded-xl bg-[#0F261F] border border-[#C5A059]/30 space-y-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#25D366]">
                  ✓ Résultat Évolutif :
                </p>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  {t.outcome}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA for Testimonials */}
        <div className="mt-14 text-center space-y-4 max-w-xl mx-auto p-6 rounded-2xl bg-[#0F261F] border border-[#C5A059]/30">
          <p className="text-xs sm:text-sm text-slate-300">
            Vous souhaitez, vous aussi, trouver une issue favorable à votre situation ?
          </p>
          <a
            href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent("Bonjour Medium Manu, j'ai lu les témoignages de votre site et souhaite bénéficier d'un accompagnement.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Engager mon accompagnement sur WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
