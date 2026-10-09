import { Burger } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { useEffect } from 'react';
import { useLang } from '../i18n';
import { useActiveSection } from '../hooks';
import type { Key, Lang } from '../dict';

const LINKS: { id: string; key: Key }[] = [
  { id: 'sobre', key: 'nav.about' },
  { id: 'devops', key: 'nav.devops' },
  { id: 'stack', key: 'nav.stack' },
  { id: 'experiencia', key: 'nav.exp' },
  { id: 'formacao', key: 'nav.edu' },
  { id: 'recomendacoes', key: 'nav.recs' },
  { id: 'contato', key: 'nav.contact' },
];
const IDS = LINKS.map((l) => l.id);

export function Nav() {
  const { t, lang, setLang } = useLang();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scroll] = useWindowScroll();
  const active = useActiveSection(IDS);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [close]);

  return (
    <header className={`nav${scroll.y > 8 ? ' scrolled' : ''}`} id="top">
      <div className="wrap nav-inner">
        <a href="#top" className="brand" aria-label="Lucas Alecrim">
          <span className="prompt">&gt;_</span> Lucas C. Alecrim
        </a>
        <nav aria-label="Principal">
          <ul className={`nav-links${opened ? ' open' : ''}`} id="navLinks">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={active === l.id ? 'active' : undefined} onClick={close}>
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lang" role="group" aria-label="Idioma / Language">
          {(['pt', 'en'] as Lang[]).map((l) => (
            <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <Burger
          className="menu-btn"
          opened={opened}
          onClick={toggle}
          size="sm"
          color="#d7dee8"
          aria-label="Menu"
          aria-expanded={opened}
          aria-controls="navLinks"
        />
      </div>
    </header>
  );
}
