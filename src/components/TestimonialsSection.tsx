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
    <section id="temoignages" className="py-16 sm:py-20 lg:py-24 bg-base relative border-t border-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-14">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-gold font-bold px-3 py-1.5 rounded-full bg-card-2 border border-gold">
            Témoignages Internationaux
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-main leading-tight">
            Récits de Personnes <br className="hidden sm:block" />
            <span className="text-gold-gradient">Accompagnées avec Succès</span>
          </h2>
          <p className="text-sm sm:text-base text-soft leading-relaxed">
            Des témoignages authentiques de France, Belgique, Suisse, Canada, USA et des Antilles. Chaque histoire reflète le respect des traditions.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
          {domains.map((dom) => (
            <button
              key={dom}
              onClick={() => setFilterDomain(dom)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 border ${
                filterDomain === dom
                  ? 'bg-gradient-to-r from-[#DFB86A] to-[#C5A059] text-main border-[#C5A059] shadow-md'
                  : 'bg-card text-soft border-soft hover:border-gold hover:text-main'
              }`}
            >
              <Filter className="w-3 h-3" />
              <span>{dom}</span>
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredTestimonials.map((t, idx) => (
            <div
              key={t.id}
              className="premium-card rounded-3xl p-6 sm:p-7 space-y-5 flex flex-col justify-between relative overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {/* Top Row: Name, Country Flag & Rating */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-icon border border-gold flex items-center justify-center text-lg shadow-inner shrink-0">
                      {t.flag}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-main">
                          {t.clientName}
                        </h3>
                        {t.verified && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#25D366]/20 text-[#25D366] text-xs font-bold">
                            <CheckCircle className="w-3 h-3" />
                            Vérifié
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted">
                        {t.location} • {t.date}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 text-gold shrink-0">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Domain Tag */}
                <div className="inline-block px-3 py-1 rounded-md bg-base border border-gold text-gold text-xs font-bold">
                  {t.domain}
                </div>

                {/* Story */}
                <p className="text-sm text-soft italic leading-relaxed pt-1">
                  "{t.story}"
                </p>
              </div>

              {/* Outcome Box */}
              <div className="p-4 rounded-xl bg-card border border-gold space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#25D366]">
                  ✓ Résultat :
                </p>
                <p className="text-sm text-soft leading-relaxed font-medium">
                  {t.outcome}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA for Testimonials */}
        <div className="mt-10 sm:mt-14 text-center space-y-4 max-w-xl mx-auto p-6 rounded-2xl bg-card border border-gold">
          <p className="text-sm text-soft">
            Vous aussi, vous voulez trouver une issue favorable à votre situation ?
          </p>
          <a
            href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent("Bonjour Medium Manu, j'ai lu les témoignages de votre site et souhaite bénéficier d'un accompagnement.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-main font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Demander mon accompagnement</span>
          </a>
        </div>

      </div>
    </section>
  );
};
