import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, Menu, X, Facebook } from 'lucide-react';
import { ModalType } from '../types';
import { FOOTER_CONTENT } from '../data/content';
import { ThemeSwitcher } from './ThemeSwitcher';

interface HeaderProps {
  whatsappNumber: string;
  onOpenModal: (type: ModalType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  whatsappNumber,
  onOpenModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Pourquoi Nous", href: "#pourquoi" },
    { label: "Accompagnements", href: "#accompagnements" },
    { label: "Processus", href: "#processus" },
    { label: "Tradition", href: "#heritage" },
    { label: "À Propos", href: "#apropos" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "FAQ", href: "#faq" }
  ];

  const whatsappClean = whatsappNumber.replace(/[^0-9]/g, '');
  const directWhatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent("Bonjour Medium Manu, je viens depuis votre site web et souhaite échanger avec vous.")}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 animate-slideDown ${
          isScrolled
            ? 'bg-alt/90 backdrop-blur-md border-b border-gold py-3 shadow-2xl'
            : 'py-5'
        }`}
        style={!isScrolled ? { background: 'linear-gradient(to bottom, var(--c-bg-header-top), transparent)' } : undefined}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src="/src/assets/images/logo.jpeg"
              alt="Medium Manu"
              className="w-11 h-11 rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-serif-luxury text-2xl font-bold tracking-wide text-main group-hover:text-gold transition-colors">
                Medium Manu
              </span>
              <span className="text-xs uppercase tracking-widest text-gold font-medium -mt-1">
                Bénin • Guidance Ancestrale
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-soft hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions CTA & Settings */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Switcher */}
            <ThemeSwitcher />

            {/* Main WhatsApp CTA */}
            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#25D366] to-[#128C7E] text-main font-bold text-xs tracking-wide uppercase flex items-center gap-2 shadow-lg shadow-[#25D366]/20 hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#25D366] text-main shadow-md"
              title="Discuter sur WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-soft hover:text-main focus:outline-none rounded-lg hover:bg-card/50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-card-2 border-b border-gold px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-soft hover:bg-card-2 hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-soft flex flex-col gap-2.5">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-[#25D366] text-main font-bold text-center text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Discuter sur WhatsApp</span>
              </a>

              <div className="flex items-center justify-between gap-2 pt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal('booking');
                  }}
                  className="flex-1 py-3 rounded-xl bg-card text-main font-semibold text-xs border border-soft text-center flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-4 h-4 text-gold" />
                  <span>Réserver</span>
                </button>

                <a
                  href={FOOTER_CONTENT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-4 rounded-xl border border-gold text-gold text-xs font-semibold flex items-center gap-1.5"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>

                <ThemeSwitcher />
              </div>
            </div>
          </div>
        )}
      </header>

    </>
  );
};
