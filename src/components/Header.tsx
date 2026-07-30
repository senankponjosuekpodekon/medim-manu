import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, Menu, X, Settings, FileCode, Shield, PhoneCall } from 'lucide-react';
import { ModalType } from '../types';

interface HeaderProps {
  whatsappNumber: string;
  onUpdateWhatsappNumber: (num: string) => void;
  onOpenModal: (type: ModalType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  whatsappNumber,
  onUpdateWhatsappNumber,
  onOpenModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [tempPhone, setTempPhone] = useState(whatsappNumber);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePhoneSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateWhatsappNumber(tempPhone);
    setShowSettings(false);
  };

  const navLinks = [
    { label: "Pourquoi Nous", href: "#pourquoi" },
    { label: "Accompagnements", href: "#accompagnements" },
    { label: "Comment Ça Marche", href: "#processus" },
    { label: "Tradition Vodun", href: "#heritage" },
    { label: "À Propos", href: "#apropos" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "FAQ", href: "#faq" }
  ];

  const whatsappClean = whatsappNumber.replace(/[^0-9]/g, '');
  const directWhatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent("Bonjour Medium Manu, je viens depuis votre site web et souhaite échanger avec vous.")}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#060E0C]/90 backdrop-blur-md border-b border-[#C5A059]/20 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#060E0C]/95 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#DFB86A] via-[#C5A059] to-[#8C6B28] flex items-center justify-center text-[#08120F] font-serif-luxury font-bold text-xl shadow-lg shadow-[#C5A059]/20 group-hover:scale-105 transition-transform">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-2xl font-bold tracking-wide text-white group-hover:text-[#DFB86A] transition-colors">
                Medium Manu
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-medium -mt-1">
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
                className="text-sm font-medium text-slate-300 hover:text-[#DFB86A] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions CTA & Settings */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Elementor Export Helper button */}
            <button
              onClick={() => onOpenModal('elementorGuide')}
              title="Guide d'intégration WordPress & Elementor"
              className="p-2.5 rounded-lg border border-[#C5A059]/30 text-[#DFB86A] hover:bg-[#C5A059]/10 transition-all flex items-center gap-1.5 text-xs font-semibold"
            >
              <FileCode className="w-4 h-4" />
              <span>Elementor / SEO</span>
            </button>

            {/* Config WhatsApp Phone Number button */}
            <button
              onClick={() => setShowSettings(!showSettings)}
              title="Configurer le numéro WhatsApp"
              className="p-2.5 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:border-[#C5A059]/50 transition-all"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Consultation Booking Button */}
            <button
              onClick={() => onOpenModal('booking')}
              className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-700 hover:border-[#C5A059]/40 transition-all flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Réserver</span>
            </button>

            {/* Main WhatsApp CTA */}
            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs tracking-wide uppercase flex items-center gap-2 shadow-lg shadow-[#25D366]/20 hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Discuter WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenModal('booking')}
              className="p-2 rounded-lg bg-[#C5A059]/20 text-[#DFB86A] border border-[#C5A059]/40 text-xs font-medium"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#25D366] text-white"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A1814] border-b border-[#C5A059]/20 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-[#132A22] hover:text-[#DFB86A]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-lg bg-[#25D366] text-white font-bold text-center text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Discuter sur WhatsApp</span>
              </a>

              <div className="flex items-center justify-between gap-2 pt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal('booking');
                  }}
                  className="flex-1 py-2.5 rounded-lg bg-slate-800 text-white font-semibold text-xs border border-slate-700 text-center flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Réserver</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal('elementorGuide');
                  }}
                  className="py-2.5 px-3 rounded-lg border border-[#C5A059]/40 text-[#DFB86A] text-xs font-semibold flex items-center gap-1"
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>Elementor</span>
                </button>

                <button
                  onClick={() => setShowSettings(true)}
                  className="py-2.5 px-3 rounded-lg border border-slate-700 text-slate-300 text-xs"
                >
                  <Settings className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* WhatsApp Number Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#0F261F] border border-[#C5A059]/40 rounded-2xl p-6 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setShowSettings(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-[#25D366]/20 text-[#25D366]">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-xl font-bold text-white">
                  Numéro WhatsApp Actif
                </h3>
                <p className="text-xs text-slate-400">
                  Personnalisez le numéro de réception des messages
                </p>
              </div>
            </div>

            <form onSubmit={handlePhoneSave} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1 font-medium">
                  Numéro WhatsApp (avec indicatif pays ex: +229 97 00 00 00)
                </label>
                <input
                  type="text"
                  value={tempPhone}
                  onChange={(e) => setTempPhone(e.target.value)}
                  placeholder="+22997000000"
                  className="w-full bg-[#08120F] border border-slate-700 focus:border-[#C5A059] rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none"
                />
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed bg-[#08120F] p-3 rounded-lg border border-slate-800">
                💡 <strong className="text-white">Avis d'utilisation :</strong> Ce numéro sera directement injecté dans tous les boutons WhatsApp de la landing page (sur mobile, ordinateur et dans la modal de réservation).
              </p>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowSettings(false)}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-slate-300 hover:bg-slate-800"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#DFB86A] to-[#C5A059] text-[#08120F] font-bold text-xs shadow-md"
                >
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
