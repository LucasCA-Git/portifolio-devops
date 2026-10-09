import { Tooltip } from '@mantine/core';
import { useLang } from '../i18n';
import { links } from '../links';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons';
import { Terminal } from './Terminal';

const SOCIAL = [
  { label: 'LinkedIn', href: links.linkedin, Icon: LinkedInIcon, external: true },
  { label: 'GitHub', href: links.github, Icon: GitHubIcon, external: true },
  { label: 'E-mail', href: `mailto:${links.email}`, Icon: MailIcon, external: false },
];

export function Hero() {
  const { t } = useLang();
  return (
    <section className="hero wrap">
      <div className="hero-text">
        <p className="eyebrow mono">
          <span className="dot" /> <span>{t('hero.status')}</span>
        </p>
        <h1>
          Lucas Cardoso <span className="accent">Alecrim</span>
        </h1>
        <p className="role mono">DevOps Engineer · CI/CD · IaC · Docker · Observabilidade</p>
        <p className="lead">{t('hero.lead')}</p>
        <div className="cta">
          <a className="btn primary" href="#contato">{t('hero.cta1')}</a>
          <a className="btn ghost" href={links.cv} download>{t('hero.cta2')}</a>
        </div>
        <ul className="social">
          {SOCIAL.map(({ label, href, Icon, external }) => (
            <li key={label}>
              <Tooltip label={label} withArrow position="bottom">
                <a href={href} aria-label={label} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
                  <Icon />
                </a>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-side">
        <div className="photo">
          <img src="/lucas.jpg" width={560} height={560} alt={t('hero.photoAlt')} />
        </div>
        <Terminal />
      </div>
    </section>
  );
}
