import React, { useState, useEffect, useRef } from 'react';
import { Palette, Check, Moon, Sun, Sunset } from 'lucide-react';

export type ThemeName = 'nuit' | 'aube' | 'savane';

const themes: { id: ThemeName; label: string; desc: string; icon: React.ReactNode }[] = [
  { id: 'nuit', label: 'Nuit Sacrée', desc: 'Sombre & mystique', icon: <Moon className="w-4 h-4" /> },
  { id: 'aube', label: 'Aube Dorée', desc: 'Clair & lumineux', icon: <Sun className="w-4 h-4" /> },
  { id: 'savane', label: 'Savane Royale', desc: 'Chaud & terreux', icon: <Sunset className="w-4 h-4" /> },
];

export const ThemeSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('nuit');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('medium-manu-theme') as ThemeName | null;
    if (saved && ['nuit', 'aube', 'savane'].includes(saved)) {
      setCurrentTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const defaultTheme: ThemeName = prefersDark ? 'nuit' : 'aube';
      setCurrentTheme(defaultTheme);
      document.documentElement.setAttribute('data-theme', defaultTheme);
    }
  }, []);

  const applyTheme = (theme: ThemeName) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('medium-manu-theme', theme);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeTheme = themes.find(t => t.id === currentTheme)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        title={`Thème : ${activeTheme.label}`}
        className="p-2 rounded-lg border border-gold text-gold hover:bg-gold/10 transition-all flex items-center gap-1.5"
      >
        {activeTheme.icon}
        <span className="hidden xl:inline text-xs font-medium">{activeTheme.label}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-60 rounded-2xl border border-gold p-3 shadow-2xl animate-fadeIn z-50"
          style={{ background: 'var(--c-bg-card)' }}
        >
          <p className="text-xs font-bold uppercase tracking-wider text-gold mb-2 px-1">
            Choisir un Thème
          </p>
          <div className="space-y-1.5">
            {themes.map(t => (
              <button
                key={t.id}
                onClick={() => applyTheme(t.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all border ${
                  currentTheme === t.id
                    ? 'bg-gold/15 border-gold'
                    : 'border-transparent hover:bg-gold/8'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${currentTheme === t.id ? 'text-gold' : 'text-gold'}`}>
                  {t.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold" style={{ color: 'var(--c-text-main)' }}>
                    {t.label}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--c-text-muted)' }}>
                    {t.desc}
                  </p>
                </div>
                {currentTheme === t.id && (
                  <Check className="w-4 h-4 text-gold shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
