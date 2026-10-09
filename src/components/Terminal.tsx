import { useReducedMotion } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { TERM } from '../dict';
import { useLang } from '../i18n';

type Line = [string, 'p' | 'o' | 'ok'];

/** Terminal que "digita" os comandos (linhas "p") e mostra as saídas de uma vez. */
export function Terminal() {
  const { lang } = useLang();
  const reduce = useReducedMotion();
  const lines = TERM[lang] as Line[];
  const [done, setDone] = useState(0);
  const [partial, setPartial] = useState('');

  useEffect(() => {
    if (reduce) {
      setDone(lines.length);
      setPartial('');
      return;
    }
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    let i = 0;
    let j = 0;
    setDone(0);
    setPartial('');

    const step = () => {
      if (cancelled || i >= lines.length) return;
      const [text, cls] = lines[i];
      if (cls !== 'p') {
        i += 1;
        setDone(i);
        timer = setTimeout(step, 380);
        return;
      }
      j += 1;
      setPartial(text.slice(0, j));
      if (j >= text.length) {
        i += 1;
        j = 0;
        setDone(i);
        setPartial('');
        timer = setTimeout(step, 260);
      } else {
        timer = setTimeout(step, 28 + Math.random() * 40);
      }
    };
    step();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [lines, reduce]);

  const current = done < lines.length ? lines[done] : null;

  return (
    <div className="terminal" aria-hidden="true">
      <div className="term-bar">
        <i />
        <i />
        <i />
        <span className="mono">lucas@lca: ~</span>
      </div>
      <pre className="mono term-body">
        {lines.slice(0, done).map(([text, cls], idx) => (
          <span key={idx} className={cls}>
            {text + '\n'}
          </span>
        ))}
        {current && partial && <span className={current[1]}>{partial}</span>}
        <span className="cursor" />
      </pre>
    </div>
  );
}
