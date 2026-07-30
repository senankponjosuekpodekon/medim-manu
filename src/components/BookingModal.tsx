import React, { useState } from 'react';
import { X, Calendar, Clock, Send, ShieldCheck, User, Globe, Phone } from 'lucide-react';
import { BookingFormData } from '../types';

interface BookingModalProps {
  whatsappNumber: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ whatsappNumber, onClose }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    country: 'France',
    whatsappNumber: '',
    serviceType: 'Consultation Voyance (Fá)',
    preferredDate: '',
    preferredTime: '14:00 - 18:00 (Heure de Paris)',
    notes: ''
  });

  const whatsappClean = whatsappNumber.replace(/[^0-9]/g, '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formattedMsg = `*DEMANDE DE CONSULTATION PRIVÉE*
──────────────────────
👤 *Nom :* ${formData.fullName || 'Non précisé'}
🌍 *Pays :* ${formData.country}
📱 *Mon WhatsApp :* ${formData.whatsappNumber || 'Même numéro'}
🔮 *Accompagnement :* ${formData.serviceType}
📅 *Date souhaitée :* ${formData.preferredDate || 'Dès que possible'}
⏰ *Créneau horaire :* ${formData.preferredTime}
📝 *Détails / Notes :* ${formData.notes || 'Aucun détail supplémentaire'}
──────────────────────
Bonjour Medium Manu, je souhaite réserver ma consultation privée selon ces modalités.`;

    const url = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(formattedMsg)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-card border border-gold rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-muted hover:text-main p-2 rounded-full bg-card/60"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-icon border border-gold text-gold">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif-luxury text-2xl font-bold text-main">
              Réserver Une Consultation Privée
            </h3>
            <p className="text-xs text-muted">
              Prise de rendez-vous confidentielle avec Medium Manu
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-soft mb-1">
                Nom & Prénom / Pseudonyme *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="Ex: Sophie Martin"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-base border border-soft focus:border-[#C5A059] rounded-xl pl-9 pr-3 py-2.5 text-sm text-main focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-soft mb-1">
                Votre Pays de Résidence *
              </label>
              <div className="relative">
                <Globe className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full bg-base border border-soft focus:border-[#C5A059] rounded-xl pl-9 pr-3 py-2.5 text-sm text-main focus:outline-none"
                >
                  <option value="France">🇫🇷 France</option>
                  <option value="Belgique">🇧🇪 Belgique</option>
                  <option value="Suisse">🇨🇭 Suisse</option>
                  <option value="Canada">🇨🇦 Canada</option>
                  <option value="États-Unis">🇺🇸 États-Unis</option>
                  <option value="Côte d'Ivoire">🇨🇮 Côte d'Ivoire</option>
                  <option value="Antilles (Guadeloupe / Martinique)">🇲🇶 🇬🇵 Antilles</option>
                  <option value="Autre pays">🌍 Autre Pays</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-soft mb-1">
                Votre Numéro WhatsApp
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Ex: +33 6 12 34 56 78"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  className="w-full bg-base border border-soft focus:border-[#C5A059] rounded-xl pl-9 pr-3 py-2.5 text-sm text-main focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-soft mb-1">
                Type d'Accompagnement
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full bg-base border border-soft focus:border-[#C5A059] rounded-xl px-3 py-2.5 text-sm text-main focus:outline-none"
              >
                <option value="Consultation Voyance (Fá)">Consultation Voyance (Fá)</option>
                <option value="Retour Affectif">Retour Affectif / Harmonisation</option>
                <option value="Déblocage Spirituel">Déblocage Spirituel & Purification</option>
                <option value="Attirance d'Argent & Prospérité">Attirance d'Argent & Prospérité</option>
                <option value="Protection Spirituelle">Protection Spirituelle</option>
                <option value="Promotion Professionnelle">Promotion Professionnelle</option>
                <option value="Autre Demande Spécifique">Autre Demande Spécifique</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-soft mb-1">
                Date Souhaitée
              </label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full bg-base border border-soft focus:border-[#C5A059] rounded-xl px-3 py-2.5 text-sm text-main focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-soft mb-1">
                Créneau Horaire
              </label>
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full bg-base border border-soft focus:border-[#C5A059] rounded-xl px-3 py-2.5 text-sm text-main focus:outline-none"
              >
                <option value="Matin (09:00 - 12:00)">Matin (09:00 - 12:00)</option>
                <option value="Après-midi (14:00 - 18:00)">Après-midi (14:00 - 18:00)</option>
                <option value="Soirée (18:00 - 21:00)">Soirée (18:00 - 21:00)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-soft mb-1">
              Brève Description de Votre Problème (Facultatif)
            </label>
            <textarea
              rows={3}
              placeholder="Expliquez brièvement votre besoin..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-base border border-soft focus:border-[#C5A059] rounded-xl p-3 text-sm text-main focus:outline-none resize-none placeholder:text-muted"
            />
          </div>

          <div className="p-3 rounded-xl bg-base border border-amber-themed text-xs text-amber-themed/90 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0" />
            <span>Vos informations sont immédiatement transmises de manière sécurisée via WhatsApp.</span>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-main font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Envoyer la demande sur WhatsApp</span>
          </button>

        </form>

      </div>
    </div>
  );
};
