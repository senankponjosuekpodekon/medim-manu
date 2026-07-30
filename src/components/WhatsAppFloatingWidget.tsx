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
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Expanded Popover Panel */}
      {isOpen && (
        <div className="mb-4 bg-[#0F261F] border border-[#C5A059]/40 rounded-3xl p-5 shadow-2xl max-w-sm w-full space-y-4 animate-fadeIn relative">
          
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-[#132A22] border border-[#C5A059]/50 flex items-center justify-center text-[#25D366]">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#0F261F]" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-lg font-bold text-white">
                Medium Manu
              </h4>
              <p className="text-[11px] text-[#25D366] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Disponible sur WhatsApp (Bénin)</span>
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Choisissez un sujet d'échange ou écrivez directement votre message privé :
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
                className={`p-2 rounded-lg text-[11px] font-semibold text-left border transition-all ${
                  selectedTopic === t.label
                    ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#DFB86A]'
                    : 'bg-[#08120F] border-slate-800 text-slate-300 hover:border-slate-700'
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
              className="w-full bg-[#08120F] border border-slate-700 focus:border-[#C5A059] rounded-xl p-3 text-xs text-white focus:outline-none resize-none placeholder:text-slate-500"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Ouvrir dans WhatsApp</span>
            </button>
          </form>

        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-2 border-white/20"
        title="Discuter sur WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 animate-ping opacity-75" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-[#08120F]" />
        
        {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7 fill-current" />}
      </button>

    </div>
  );
};
