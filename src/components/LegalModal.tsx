import React from 'react';
import { X, ShieldCheck, Scale, Lock, FileText } from 'lucide-react';
import { ModalType } from '../types';

interface LegalModalProps {
  type: ModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type || type === 'booking' || type === 'elementorGuide') return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#0F261F] border border-[#C5A059]/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative space-y-6 max-h-[85vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full bg-slate-800/60"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'legalNotice' && (
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
            <div className="flex items-center gap-3">
              <Scale className="w-6 h-6 text-[#DFB86A]" />
              <h3 className="font-serif-luxury text-2xl font-bold text-white">
                Mentions Légales
              </h3>
            </div>

            <div className="space-y-3 bg-[#08120F] p-5 rounded-2xl border border-slate-800">
              <p><strong>Éditeur du site :</strong> Medium Manu - Cabinet de Guidance Traditionnelle et Spirituelle.</p>
              <p><strong>Siège du Sanctuaire :</strong> Cotonou - Ouidah, République du Bénin.</p>
              <p><strong>Contact Officiel :</strong> contact@mediummanu-benin.com / WhatsApp Officiel indiqué sur le site.</p>
              <p><strong>Hébergement :</strong> Serveurs sécurisés internationaux Cloud Run avec chiffrement SSL 256-bit.</p>
              <p><strong>Propriété Intellectuelle :</strong> L'ensemble des textes, visuels, récits et structures de ce site est protégé au titre du droit d'auteur. Toute reproduction non autorisée est formellement interdite.</p>
            </div>
          </div>
        )}

        {type === 'privacyPolicy' && (
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-[#DFB86A]" />
              <h3 className="font-serif-luxury text-2xl font-bold text-white">
                Politique de Confidentialité & Traitement des Données
              </h3>
            </div>

            <div className="space-y-3 bg-[#08120F] p-5 rounded-2xl border border-slate-800">
              <p><strong>Engagement de Discrétion :</strong> La discrétion est le pilier fondateur de l'accompagnement par Medium Manu. Aucune information personnelle (nom, prénom, date de naissance, photos, récits de vie) ne sera transmise, vendue ou diffusée à des tiers.</p>
              <p><strong>Échanges WhatsApp :</strong> Vos échanges WhatsApp se font directement et de manière chiffrée de bout en bout entre vous et Medium Manu.</p>
              <p><strong>Conservation des Données :</strong> Vos données et photos fournies lors d'une consultation ou d'un rituel sont définitivement supprimées à la fin de la période d'accompagnement.</p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#DFB86A]" />
              <h3 className="font-serif-luxury text-2xl font-bold text-white">
                CGU & Charte Éthique du Praticien
              </h3>
            </div>

            <div className="space-y-3 bg-[#08120F] p-5 rounded-2xl border border-slate-800">
              <p><strong>1. Engagement de Sincérité :</strong> Medium Manu s'engage à traiter chaque demande avec respect, humilité et vérité. Aucune fausse promesse miraculeuse ou irréaliste n'est tenue.</p>
              <p><strong>2. Libre Arbitre :</strong> Tous les accompagnements respectent scrupuleusement la dignité humaine, la santé et le libre arbitre des consultants.</p>
              <p><strong>3. Non-Substitution Médicale :</strong> Les prestations de guidance spirituelle et rituels traditionnels constituent un complément de bien-être personnel et ne remplacent en aucun cas un diagnostic médical ou un traitement professionnel.</p>
              <p><strong>4. Annulation & Dialogue :</strong> Tout consultant conserve la liberté d'interrompre ses échanges à tout moment par simple message.</p>
            </div>
          </div>
        )}

        <div className="pt-2 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#C5A059] text-[#08120F] font-bold text-xs"
          >
            J'ai Compris
          </button>
        </div>

      </div>
    </div>
  );
};
