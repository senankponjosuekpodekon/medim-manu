import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ProblemsSolutionsSection } from './components/ProblemsSolutionsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { VodunHeritageSection } from './components/VodunHeritageSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingWidget } from './components/WhatsAppFloatingWidget';
import { BookingModal } from './components/BookingModal';
import { ElementorGuideModal } from './components/ElementorGuideModal';
import { LegalModal } from './components/LegalModal';
import { ModalType } from './types';

export default function App() {
  const [whatsappNumber, setWhatsappNumber] = useState<string>('+229 97 00 00 00');
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleOpenModal = (type: ModalType) => {
    setActiveModal(type);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-[#08120F] text-[#E2E8F0] font-sans-clean selection:bg-[#C5A059] selection:text-[#08120F]">
      
      {/* Navigation Header */}
      <Header
        whatsappNumber={whatsappNumber}
        onUpdateWhatsappNumber={setWhatsappNumber}
        onOpenModal={handleOpenModal}
      />

      {/* Main Page Sections (1 to 11) */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection
          whatsappNumber={whatsappNumber}
          onOpenModal={handleOpenModal}
        />

        {/* Section 2: Pourquoi choisir Medium Manu */}
        <WhyChooseSection />

        {/* Section 3: Problèmes & Solutions */}
        <ProblemsSolutionsSection
          whatsappNumber={whatsappNumber}
        />

        {/* Section 4: Nos Accompagnements */}
        <ServicesSection
          whatsappNumber={whatsappNumber}
        />

        {/* Section 5: Comment se déroule l'accompagnement */}
        <ProcessSection
          whatsappNumber={whatsappNumber}
        />

        {/* Section 6: Pourquoi le Vodun du Bénin */}
        <VodunHeritageSection />

        {/* Section 7: À propos de Medium Manu */}
        <AboutSection
          whatsappNumber={whatsappNumber}
        />

        {/* Section 8: Témoignages */}
        <TestimonialsSection
          whatsappNumber={whatsappNumber}
        />

        {/* Section 9: Galerie */}
        <GallerySection />

        {/* Section 10: FAQ */}
        <FaqSection
          whatsappNumber={whatsappNumber}
        />

        {/* Section 11: Appel à l'action final */}
        <FinalCtaSection
          whatsappNumber={whatsappNumber}
          onOpenModal={handleOpenModal}
        />
      </main>

      {/* Section 12: Footer */}
      <Footer
        whatsappNumber={whatsappNumber}
        onOpenModal={handleOpenModal}
      />

      {/* Persistent Floating WhatsApp Widget */}
      <WhatsAppFloatingWidget
        whatsappNumber={whatsappNumber}
      />

      {/* Interactive Modals */}
      {activeModal === 'booking' && (
        <BookingModal
          whatsappNumber={whatsappNumber}
          onClose={handleCloseModal}
        />
      )}

      {activeModal === 'elementorGuide' && (
        <ElementorGuideModal
          onClose={handleCloseModal}
        />
      )}

      {(activeModal === 'legalNotice' || activeModal === 'privacyPolicy' || activeModal === 'terms') && (
        <LegalModal
          type={activeModal}
          onClose={handleCloseModal}
        />
      )}

    </div>
  );
}
