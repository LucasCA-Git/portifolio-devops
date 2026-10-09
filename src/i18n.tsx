import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { I18N, type Key, type Lang } from './dict';

const STORAGE_KEY = 'lca-lang';

function detectLang(): Lang {
  const q = new URLSearchParams(window.location.search).get('lang');
  if (q === 'pt' || q === 'en') return q;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'pt' || saved === 'en') return saved;
  } catch {
    /* storage indisponível */
  }
  return (navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  const t = useCallback((k: Key) => I18N[lang][k] as string, [lang]);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = I18N[lang]['meta.title'];
    document.querySelector('meta[name="description"]')?.setAttribute('content', I18N[lang]['meta.desc']);
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* storage indisponível */
    }
  };

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang deve ser usado dentro de LangProvider');
  return ctx;
}
