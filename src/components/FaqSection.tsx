import React, { useState } from 'react';
import { ChevronDown, Search, ShieldCheck, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/content';

interface FaqSectionProps {
  whatsappNumber: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ whatsappNumber }) => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Toutes');

  const categories = ['Toutes', 'Confidentialité & Ethique', 'Deroulement & Consultation', 'Vodun & Tradition', 'Paiement & Tarifs'];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = selectedCategory === 'Toutes' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const whatsappClean = whatsappNumber.replace(/[^0-9]/g, '');
  const directWhatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent("Bonjour Medium Manu, j'ai une question à vous poser.")}`;

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-base relative border-t border-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-gold font-bold px-3 py-1.5 rounded-full bg-card-2 border border-gold">
            Questions Fréquentes
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-main leading-tight">
            Vos Questions, <br className="hidden sm:block" />
            <span className="text-gold-gradient">Nos Réponses Claires</span>
          </h2>
          <p className="text-sm sm:text-base text-soft leading-relaxed">
            Vous hésitez encore ? Parcourez les questions les plus fréquemment posées par nos visiteurs internationaux.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-6 sm:mb-8">
          <Search className="w-5 h-5 text-muted absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher une question..."
            className="w-full py-3.5 sm:py-4 pl-12 pr-4 rounded-xl bg-card border border-soft focus:border-gold text-sm text-main placeholder:text-muted outline-none transition-colors"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#DFB86A] to-[#C5A059] text-main border-[#C5A059] shadow-md'
                  : 'bg-card text-soft border-soft hover:border-gold hover:text-main'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {filteredFaqs.map((faq, idx) => (
            <div
              key={faq.id}
              className="premium-card rounded-2xl overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left"
              >
                <span className="font-serif-luxury text-base sm:text-lg font-bold text-main">
                  {faq.question}
                </span>
                <div className={`shrink-0 p-1.5 rounded-lg bg-icon border border-gold text-gold transition-transform ${
                  openId === faq.id ? 'rotate-180' : ''
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {openId === faq.id && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 space-y-3 animate-fadeIn">
                  <p className="text-sm text-soft leading-relaxed">
                    {faq.answer}
                  </p>

                  <div className="flex items-center gap-2 pt-2 border-t border-soft/60">
                    <span className="text-xs text-muted">Besoin de plus de précisions ?</span>
                    <a
                      href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent(`Bonjour Medium Manu, j'ai une question concernant : "${faq.question}"`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:text-[#20BA5C]"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Demander sur WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 text-muted space-y-3">
            <p className="text-base font-semibold">Aucune question ne correspond à votre recherche.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('Toutes'); }}
              className="text-xs text-gold underline"
            >
              Réinitialiser la recherche
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-14 text-center space-y-4 max-w-xl mx-auto p-6 rounded-2xl bg-card border border-gold">
          <p className="text-sm text-soft">
            Vous ne trouvez pas réponse à votre question ?
          </p>
          <a
            href={directWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-main font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Poser ma question sur WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
