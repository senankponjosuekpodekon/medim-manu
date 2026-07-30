import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, CheckCircle2 } from 'lucide-react';

interface WhatsAppFloatingWidgetProps {
  whatsappNumber: string;
}

export const WhatsAppFloatingWidget: React.FC<WhatsAppFloatingWidgetProps> = ({ whatsappNumber }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('Retour Affectif');

  const topics = [
    { label: 'Retour Affectif', preset: 'Bonjour Medium Manu, je souhaite échanger au sujet d\'un retour affectif.' },
    { label: 'Déblocage Spirituel', preset: 'Bonjour Medium Manu, je sollicite un déblocage spirituel pour ma situation.' },
    { label: 'Voyance Fá', preset: 'Bonjour Medium Manu, je souhaite réserver une consultation de voyance privée Fá.' },
    { label: 'Protection & Autre', preset: 'Bonjour Medium Manu, j\'aimerais avoir une information concernant un accompagnement.' }
  ];

  const whatsappClean = whatsappNumber.replace(/[^0-9]/g, '');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const topicObj = topics.find(t => t.label === selectedTopic);
    const textToSend = customMsg.trim() ? customMsg : (topicObj?.preset || "Bonjour Medium Manu");
    const url = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      
      {/* Expanded Popover Panel */}
      {isOpen && (
        <div className="mb-3 sm:mb-4 bg-card border border-gold rounded-3xl p-4 sm:p-5 shadow-2xl max-w-[calc(100vw-2rem)] sm:max-w-sm w-full space-y-4 animate-fadeIn relative">
          
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-muted hover:text-main p-1"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 pb-3 border-b border-soft">
            <div className="relative">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-card-2 border border-gold flex items-center justify-center text-[#25D366]">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
              </div>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-card" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-base sm:text-lg font-bold text-main">
                Medium Manu
              </h4>
              <p className="text-xs text-[#25D366] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>En ligne maintenant</span>
              </p>
            </div>
          </div>

          <p className="text-sm text-soft leading-relaxed">
            Choisissez un sujet ou écrivez votre message privé :
          </p>

          {/* Quick Topic Buttons */}
          <div className="grid grid-cols-2 gap-2">
            {topics.map((t) => (
              <button
                key={t.label}
                type="button"
                onClick={() => {
                  setSelectedTopic(t.label);
                  setCustomMsg(t.preset);
                }}
                className={`p-2.5 rounded-lg text-xs font-semibold text-left border transition-all ${
                  selectedTopic === t.label
                    ? 'bg-gold/20 border-[#C5A059] text-gold'
                    : 'bg-base border-soft text-soft hover:border-soft'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Custom Message Field */}
          <form onSubmit={handleSend} className="space-y-3">
            <textarea
              rows={3}
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="Écrivez votre message ici..."
              className="w-full bg-base border border-soft focus:border-[#C5A059] rounded-xl p-3 text-sm text-main focus:outline-none resize-none placeholder:text-muted"
            />

            <button
              type="submit"
              className="btn-premium w-full py-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-main font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Envoyer sur WhatsApp</span>
            </button>
          </form>

        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-main shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-2 border-white/20"
        title="Discuter sur WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 animate-ping opacity-75" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 bg-base" />
        
        {isOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />}
      </button>

    </div>
  );
};
