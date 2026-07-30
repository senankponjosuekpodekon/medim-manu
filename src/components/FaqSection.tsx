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

  return (
    <section id="faq" className="py-20 bg-[#08120F] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold px-3 py-1 rounded-full bg-[#132A22] border border-[#C5A059]/30">
            Transparence & Réponses Sans Tabou
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Foire Aux Questions <br />
            <span className="text-gold-gradient">& Levée des Objections</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Toutes les réponses à vos interrogations légitimes concernant la confidentialité, les délais, les paiements, le travail à distance et la déontologie.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher une question (ex: confidentialité, paiement, délai, voyance)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#0F261F] border border-slate-700 focus:border-[#C5A059] rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white focus:outline-none shadow-lg placeholder:text-slate-500"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                  selectedCategory === cat
                    ? 'bg-[#C5A059] text-[#08120F] border-[#C5A059] shadow-md'
                    : 'bg-[#0F261F] text-slate-300 border-slate-800 hover:border-[#C5A059]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Questions List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="glass-panel rounded-2xl overflow-hidden border-gold-glow transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#132A22]/50 transition-colors focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#DFB86A] shrink-0" />
                      <span className="font-serif-luxury text-lg sm:text-xl font-bold text-white">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`p-1.5 rounded-full bg-slate-800 text-slate-300 transition-transform ${isOpen ? 'rotate-180 bg-[#C5A059] text-[#08120F]' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 animate-fadeIn">
                      <p className="bg-[#08120F]/60 p-4 rounded-xl border border-slate-800/80">
                        {faq.answer}
                      </p>
                      
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span className="text-[#C5A059]">Catégorie : {faq.category}</span>
                        <a
                          href={`https://wa.me/${whatsappClean}?text=${encodeURIComponent(`Bonjour Medium Manu, j'ai une précision concernant la question : "${faq.question}"`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#25D366] hover:underline flex items-center gap-1 font-semibold"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-current" />
                          <span>Poser cette question sur WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <p className="text-base font-semibold">Aucune question ne correspond à votre recherche.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('Toutes'); }}
                className="text-xs text-[#DFB86A] underline"
              >
                Réinitialiser la recherche
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
