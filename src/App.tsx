import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About, Contact, DevOps, Education, Experience, Recommendations, Stack } from './components/Sections';
import { useLang } from './i18n';
import { useReveal } from './hooks';

export default function App() {
  const { t } = useLang();
  useReveal('.section, .card, .job, .rec, .stage');

  return (
    <>
      <a className="skip" href="#main">{t('skip')}</a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <DevOps />
        <Stack />
        <Experience />
        <Education />
        <Recommendations />
        <Contact />
      </main>
      <footer className="wrap footer mono">
        <span>© {new Date().getFullYear()} Lucas Cardoso Alecrim</span>
      </footer>
    </>
  );
}
