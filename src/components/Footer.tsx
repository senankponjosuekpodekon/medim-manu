import React from 'react';
import { MessageCircle, Mail, MapPin, Shield, HeartHandshake, FileText, ChevronUp } from 'lucide-react';
import { FOOTER_CONTENT } from '../data/content';
import { ModalType } from '../types';

interface FooterProps {
  whatsappNumber: string;
  onOpenModal: (type: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ whatsappNumber, onOpenModal }) => {
  const whatsappClean = whatsappNumber.replace(/[^0-9]/g, '');
  const directWhatsappUrl = `https://wa.me/${whatsappClean}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050B09] text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 5: Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#DFB86A] via-[#C5A059] to-[#8C6B28] flex items-center justify-center text-[#08120F] font-serif-luxury font-bold text-xl shadow-md">
                M
              </div>
              <div>
                <span className="font-serif-luxury text-2xl font-bold text-white block">
                  {FOOTER_CONTENT.brandName}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#C5A059]">
                  {FOOTER_CONTENT.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Accompagnement spirituel traditionnel authentique, personnalisé et discret. Praticien au sanctuaire de Ouidah et Cotonou au Bénin, au service des consultants de la diaspora et du monde entier.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 text-xs font-bold flex items-center gap-2 hover:bg-[#25D366] hover:text-white transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Officiel ({whatsappNumber})</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-luxury text-lg font-bold text-white">
              Navigation Rapide
            </h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_CONTENT.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-[#DFB86A] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#C5A059]">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Legal Policies */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif-luxury text-lg font-bold text-white">
              Contact & Législation
            </h4>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{FOOTER_CONTENT.address}</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{FOOTER_CONTENT.email}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <button
                onClick={() => onOpenModal('legalNotice')}
                className="px-3 py-1.5 rounded-md bg-[#08120F] border border-slate-800 hover:border-[#C5A059]/40 text-slate-300 hover:text-white"
              >
                Mentions Légales
              </button>
              <button
                onClick={() => onOpenModal('privacyPolicy')}
                className="px-3 py-1.5 rounded-md bg-[#08120F] border border-slate-800 hover:border-[#C5A059]/40 text-slate-300 hover:text-white"
              >
                Politique de Confidentialité
              </button>
              <button
                onClick={() => onOpenModal('terms')}
                className="px-3 py-1.5 rounded-md bg-[#08120F] border border-slate-800 hover:border-[#C5A059]/40 text-slate-300 hover:text-white"
              >
                CGU & Éthique
              </button>
            </div>
          </div>

        </div>

        {/* Ethical Disclaimer Box */}
        <div className="p-4 rounded-xl bg-[#08120F] border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
          <p>{FOOTER_CONTENT.disclaimer}</p>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>{FOOTER_CONTENT.copyright}</p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-[#08120F] border border-slate-800 text-slate-300 hover:text-[#DFB86A] hover:border-[#C5A059]/40 transition-all flex items-center gap-1.5"
          >
            <span>Haut de page</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
