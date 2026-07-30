import React, { useState } from 'react';
import { X, Copy, Check, FileCode, Search, Palette, Code2, Globe } from 'lucide-react';
import { ELEMENTOR_SEO_MAP } from '../data/content';

interface ElementorGuideModalProps {
  onClose: () => void;
}

export const ElementorGuideModal: React.FC<ElementorGuideModalProps> = ({ onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'elementor' | 'seo' | 'palette' | 'jsonld'>('elementor');

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const jsonLdSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Medium Manu - Guidance Spirituelle Traditionnelle",
    "image": ELEMENTOR_SEO_MAP.seo.ogImage,
    "description": ELEMENTOR_SEO_MAP.seo.metaDescription,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cotonou / Ouidah",
      "addressCountry": "BJ"
    },
    "telephone": "+22997000000",
    "url": ELEMENTOR_SEO_MAP.seo.canonicalUrl,
    "priceRange": "$$"
  }, null, 2);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#0F261F] border border-[#C5A059]/40 rounded-3xl p-6 sm:p-8 max-w-3xl w-full shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full bg-slate-800/60"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-[#16382E] border border-[#C5A059]/40 text-[#DFB86A]">
            <FileCode className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif-luxury text-2xl font-bold text-white">
              Kit d'Intégration Elementor / WordPress & SEO
            </h3>
            <p className="text-xs text-slate-400">
              Guide complet prêt pour réplication directe sous WordPress & Elementor
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('elementor')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'elementor' ? 'bg-[#C5A059] text-[#08120F]' : 'bg-[#08120F] text-slate-300'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Structure Elementor</span>
          </button>

          <button
            onClick={() => setActiveTab('seo')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'seo' ? 'bg-[#C5A059] text-[#08120F]' : 'bg-[#08120F] text-slate-300'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Balises SEO & Meta</span>
          </button>

          <button
            onClick={() => setActiveTab('palette')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'palette' ? 'bg-[#C5A059] text-[#08120F]' : 'bg-[#08120F] text-slate-300'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Couleurs & Typographie</span>
          </button>

          <button
            onClick={() => setActiveTab('jsonld')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'jsonld' ? 'bg-[#C5A059] text-[#08120F]' : 'bg-[#08120F] text-slate-300'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Schema JSON-LD</span>
          </button>
        </div>

        {/* Tab 1: Elementor Mapping */}
        {activeTab === 'elementor' && (
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
            <p className="bg-[#08120F] p-4 rounded-xl border border-slate-800">
              💡 <strong>Rendu Elementor :</strong> Cette landing page est structurée en 12 sections modulaires. Vous pouvez utiliser les widgets natifs Elementor Pro (Hero Container, Icon Box, Accordion, Testimonials Carousel, Popover Modal, CTA Box) pour reproduire à l'identique la mise en page.
            </p>

            <div className="space-y-3">
              <h4 className="font-serif-luxury text-lg font-bold text-white">
                Mapping des 12 Sections Elementor :
              </h4>
              <ol className="space-y-2 list-decimal list-inside text-slate-300">
                <li><strong>Section Hero :</strong> Container Flex Row • Headline H1 Serif • Button Widget (WhatsApp) • Glassmorphic Box.</li>
                <li><strong>Pourquoi Choisir :</strong> Icon Grid 3-Columns • Cards avec fond `#0F261F` et bordure dorée.</li>
                <li><strong>Problèmes / Solutions :</strong> Tabs Widget ou Dual Column Comparison • Pain points vs Remedies.</li>
                <li><strong>Nos Accompagnements :</strong> Cards Grid 3-Cols avec badge & 3 listes à puces checkmark.</li>
                <li><strong>Comment ça marche :</strong> Numbered Process Steps (1 à 5) avec icônes.</li>
                <li><strong>Le Vodun du Bénin :</strong> Box Pédagogique + Citation Blockquote en italique Garamond.</li>
                <li><strong>À Propos :</strong> Image Column + Text Column (Histoire & Valeurs).</li>
                <li><strong>Témoignages :</strong> Testimonial Grid avec filtre par domaine (Retour affectif, Déblocage).</li>
                <li><strong>Galerie :</strong> Image Gallery Grid avec Lightbox activée.</li>
                <li><strong>FAQ :</strong> Accordion Widget (16 Questions dépliables).</li>
                <li><strong>Appel à l'Action Final :</strong> Call-To-Action Box hautement émotionnel.</li>
                <li><strong>Footer :</strong> 4-Columns Footer avec liens, mentions légales & disclaimer.</li>
              </ol>
            </div>
          </div>
        )}

        {/* Tab 2: SEO Meta */}
        {activeTab === 'seo' && (
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
            <div className="p-4 bg-[#08120F] rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#DFB86A]">Meta Title :</span>
                <button
                  onClick={() => copyToClipboard(ELEMENTOR_SEO_MAP.seo.metaTitle, 'title')}
                  className="px-2.5 py-1 rounded bg-slate-800 text-[#DFB86A] flex items-center gap-1"
                >
                  {copiedKey === 'title' ? <Check className="w-3 h-3 text-[#25D366]" /> : <Copy className="w-3 h-3" />}
                  <span>Copier</span>
                </button>
              </div>
              <p className="text-white font-mono bg-[#050B09] p-2 rounded">{ELEMENTOR_SEO_MAP.seo.metaTitle}</p>

              <div className="flex items-center justify-between pt-2">
                <span className="font-bold text-[#DFB86A]">Meta Description :</span>
                <button
                  onClick={() => copyToClipboard(ELEMENTOR_SEO_MAP.seo.metaDescription, 'desc')}
                  className="px-2.5 py-1 rounded bg-slate-800 text-[#DFB86A] flex items-center gap-1"
                >
                  {copiedKey === 'desc' ? <Check className="w-3 h-3 text-[#25D366]" /> : <Copy className="w-3 h-3" />}
                  <span>Copier</span>
                </button>
              </div>
              <p className="text-white font-mono bg-[#050B09] p-2 rounded">{ELEMENTOR_SEO_MAP.seo.metaDescription}</p>

              <div className="flex items-center justify-between pt-2">
                <span className="font-bold text-[#DFB86A]">Balise H1 Optimisée :</span>
                <button
                  onClick={() => copyToClipboard(ELEMENTOR_SEO_MAP.seo.h1Text, 'h1')}
                  className="px-2.5 py-1 rounded bg-slate-800 text-[#DFB86A] flex items-center gap-1"
                >
                  {copiedKey === 'h1' ? <Check className="w-3 h-3 text-[#25D366]" /> : <Copy className="w-3 h-3" />}
                  <span>Copier</span>
                </button>
              </div>
              <p className="text-white font-mono bg-[#050B09] p-2 rounded">{ELEMENTOR_SEO_MAP.seo.h1Text}</p>
            </div>
          </div>
        )}

        {/* Tab 3: Colors & Fonts */}
        {activeTab === 'palette' && (
          <div className="space-y-4 text-xs text-slate-300">
            <h4 className="font-serif-luxury text-lg font-bold text-white">
              Palette de Couleurs Hexadécimales :
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {ELEMENTOR_SEO_MAP.colorPaletteHex.map((c) => (
                <div key={c.hex} className="p-3 rounded-xl bg-[#08120F] border border-slate-800 space-y-2">
                  <div className="w-full h-8 rounded-lg" style={{ backgroundColor: c.hex }} />
                  <div>
                    <p className="font-bold text-white text-[11px]">{c.name}</p>
                    <p className="text-mono text-[10px] text-amber-300">{c.hex}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <h4 className="font-serif-luxury text-lg font-bold text-white">
                Typographies Appairées :
              </h4>
              <p><strong>Titres (H1, H2, H3) :</strong> {ELEMENTOR_SEO_MAP.typography.headings}</p>
              <p><strong>Corps de Texte :</strong> {ELEMENTOR_SEO_MAP.typography.body}</p>
            </div>
          </div>
        )}

        {/* Tab 4: JSON-LD Schema */}
        {activeTab === 'jsonld' && (
          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#DFB86A]">Code Schema.org JSON-LD :</span>
              <button
                onClick={() => copyToClipboard(jsonLdSchema, 'jsonld')}
                className="px-3 py-1.5 rounded-lg bg-[#C5A059] text-[#08120F] font-bold flex items-center gap-1"
              >
                {copiedKey === 'jsonld' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Copier le Code Schema</span>
              </button>
            </div>
            <pre className="p-4 bg-[#050B09] rounded-xl border border-slate-800 font-mono text-[11px] text-amber-200 overflow-x-auto max-h-64">
              {jsonLdSchema}
            </pre>
          </div>
        )}

      </div>
    </div>
  );
};
