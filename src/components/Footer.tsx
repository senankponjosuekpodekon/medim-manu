import React from 'react';
import { MessageCircle, Mail, MapPin, Phone, Shield, HeartHandshake, FileText, ChevronUp, Facebook } from 'lucide-react';
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
    <footer className="bg-alt text-muted border-t border-section pt-12 sm:pt-16 pb-10 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 5: Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/images/logo.jpeg"
                alt="Medium Manu"
                className="w-11 h-11 rounded-full object-cover shadow-md"
              />
              <div>
                <span className="font-serif-luxury text-xl sm:text-2xl font-bold text-main block">
                  {FOOTER_CONTENT.brandName}
                </span>
                <span className="text-xs uppercase tracking-wider text-gold">
                  {FOOTER_CONTENT.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-muted leading-relaxed max-w-md">
              Accompagnement spirituel traditionnel authentique, personnalisé et discret. Praticien au sanctuaire de Ouidah et Cotonou au Bénin, au service des consultants du monde entier.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 text-xs font-bold flex items-center gap-2 hover:bg-[#25D366]/25 hover:border-[#25D366]/50 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp ({whatsappNumber})</span>
              </a>

              <a
                href={FOOTER_CONTENT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#1877F2]/15 text-[#1877F2] border border-[#1877F2]/30 text-xs font-bold flex items-center gap-2 hover:bg-[#1877F2]/25 hover:border-[#1877F2]/50 transition-all"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-luxury text-lg font-bold text-main">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_CONTENT.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-gold transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-gold">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Legal Policies */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif-luxury text-lg font-bold text-main">
              Contact & Légal
            </h4>

            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5 text-soft">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{FOOTER_CONTENT.address}</span>
              </div>

              <div className="flex items-center gap-2.5 text-soft">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>{FOOTER_CONTENT.email}</span>
              </div>

              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-soft hover:text-gold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp : {FOOTER_CONTENT.phoneDisplay}</span>
              </a>

              <a
                href={`tel:${FOOTER_CONTENT.callNumber.replace(/\s/g, '')}`}
                className="flex items-center gap-2.5 text-soft hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>Appel : {FOOTER_CONTENT.callNumber}</span>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => onOpenModal('legalNotice')}
                className="px-3 py-1.5 rounded-md bg-base border border-soft hover:border-gold text-soft hover:text-main"
              >
                Mentions Légales
              </button>
              <button
                onClick={() => onOpenModal('privacyPolicy')}
                className="px-3 py-1.5 rounded-md bg-base border border-soft hover:border-gold text-soft hover:text-main"
              >
                Confidentialité
              </button>
              <button
                onClick={() => onOpenModal('terms')}
                className="px-3 py-1.5 rounded-md bg-base border border-soft hover:border-gold text-soft hover:text-main"
              >
                CGU & Éthique
              </button>
            </div>
          </div>

        </div>

        {/* Ethical Disclaimer Box */}
        <div className="p-4 rounded-xl bg-base border border-soft text-xs sm:text-sm text-muted leading-relaxed">
          <p>{FOOTER_CONTENT.disclaimer}</p>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-6 border-t border-section flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <p>{FOOTER_CONTENT.copyright}</p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-base border border-soft text-soft hover:text-gold hover:border-gold transition-all flex items-center gap-1.5"
          >
            <span>Haut de page</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
