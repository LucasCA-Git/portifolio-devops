import type { ReactNode } from 'react';
import { useLang } from '../i18n';
import { links } from '../links';
import type { Key } from '../dict';

function SectionTitle({ num, children }: { num: string; children: ReactNode }) {
  return (
    <h2 className="section-title">
      <span className="mono num">{num}.</span> <span>{children}</span>
    </h2>
  );
}

const Tags = ({ items }: { items: string[] }) => (
  <ul className="tags">
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);

export function About() {
  const { t } = useLang();
  const stats: [string, Key][] = [
    ['2+', 'about.s1'],
    ['3', 'about.s2'],
    ['20+', 'about.s3'],
    ['PT/EN', 'about.s4'],
  ];
  return (
    <section id="sobre" className="section wrap">
      <SectionTitle num="01">{t('about.title')}</SectionTitle>
      <div className="about-grid">
        <div>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
        </div>
        <ul className="stats">
          {stats.map(([n, k]) => (
            <li key={k}>
              <strong className="mono">{n}</strong>
              <span>{t(k)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const STAGES: { k: string; tools: string[] }[] = [
  { k: 'plan', tools: ['Scrum', 'Git'] },
  { k: 'code', tools: ['Git', 'GitHub'] },
  { k: 'build', tools: ['Docker'] },
  { k: 'test', tools: ['CI/CD', 'Bash', 'Python'] },
  { k: 'provision', tools: ['Terraform', 'Ansible'] },
  { k: 'deploy', tools: ['CI/CD', 'Docker Compose', 'Ansible'] },
  { k: 'operate', tools: ['Linux', 'Nginx', 'SSL/TLS'] },
  { k: 'monitor', tools: ['Grafana Loki', 'Datadog', 'Webhooks'] },
];

export function DevOps() {
  const { t } = useLang();
  return (
    <section id="devops" className="section wrap">
      <SectionTitle num="02">{t('devops.title')}</SectionTitle>
      <p className="lead devops-lead">{t('devops.lead')}</p>
      <ol className="pipeline">
        {STAGES.map((s, i) => (
          <li className="stage" key={s.k}>
            <span className="stage-k mono">
              {String(i + 1).padStart(2, '0')} · {s.k}
            </span>
            <h3>{t(`devops.${s.k}.n` as Key)}</h3>
            <p>{t(`devops.${s.k}.d` as Key)}</p>
            <Tags items={s.tools} />
          </li>
        ))}
      </ol>
      <p className="loop mono">{t('devops.loop')}</p>
      <ul className="principles">
        {[1, 2, 3, 4].map((n) => (
          <li key={n}>
            <h3>{t(`devops.p${n}.t` as Key)}</h3>
            <p>{t(`devops.p${n}.d` as Key)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Stack() {
  const { t } = useLang();
  const cards: { title: string; items: string[] }[] = [
    { title: 'CI/CD & IaC', items: ['Pipelines CI/CD', 'Terraform', 'Ansible', 'Git', 'GitHub'] },
    { title: t('stack.infra'), items: ['Linux', 'Docker', 'Docker Compose', 'Microsoft Azure', 'AWS', 'Oracle Cloud (OCI)', 'Nginx', 'SSL/TLS', 'DNS', 'Networking'] },
    { title: t('stack.obs'), items: ['Grafana Loki', 'Datadog', t('stack.alerts'), 'Troubleshooting'] },
    { title: t('stack.auto'), items: ['Python', 'Node.js', 'TypeScript', 'Bash'] },
    { title: t('stack.db'), items: ['PostgreSQL', 'MongoDB', 'SQL Server'] },
    { title: t('stack.method'), items: ['Scrum', t('stack.agile')] },
  ];
  return (
    <section id="stack" className="section wrap">
      <SectionTitle num="03">{t('stack.title')}</SectionTitle>
      <div className="cards">
        {cards.map((c) => (
          <article className="card" key={c.title}>
            <h3>{c.title}</h3>
            <Tags items={c.items} />
          </article>
        ))}
      </div>
    </section>
  );
}

const JOBS: { id: string; company: string; bullets: string[] }[] = [
  { id: 'j1', company: 'BSATech', bullets: ['b4', 'b1', 'b2', 'b3', 'b5'] },
  { id: 'j2', company: 'Xerlock Smart Gov', bullets: ['b1', 'b2', 'b3', 'b4', 'b5'] },
  { id: 'j3', company: 'Petrosystem', bullets: ['b1', 'b2'] },
];

export function Experience() {
  const { t } = useLang();
  return (
    <section id="experiencia" className="section wrap">
      <SectionTitle num="04">{t('exp.title')}</SectionTitle>
      <ol className="timeline">
        {JOBS.map((j) => (
          <li className="job" key={j.id}>
            <div className="job-head">
              <h3>
                <span>{t(`exp.${j.id}.role` as Key)}</span> <span className="at">@ {j.company}</span>
              </h3>
              <span className="when mono">{t(`exp.${j.id}.when` as Key)}</span>
            </div>
            <p className="where">{t(`exp.${j.id}.where` as Key)}</p>
            <ul>
              {j.bullets.map((b) => (
                <li key={b}>{t(`exp.${j.id}.${b}` as Key)}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

type Rec = { id: string; ini: string; name: string; role: string };

// Recomendações em destaque: supervisores diretos no cargo atual
const FEATURED: Rec[] = [
  { id: 'r7', ini: 'AO', name: 'Alex Odilon', role: 'DevOps & SRE Team Leader · Cloud Architect (Azure/AWS) · FinOps · Kubernetes' },
  { id: 'r6', ini: 'MR', name: 'Marcello Raposo', role: 'DevOps Engineer · SRE · Kubernetes · Azure · Terraform · CI/CD' },
];

const RECS: Rec[] = [
  { id: 'r5', ini: 'ES', name: 'Elias Santana Jr', role: 'Desenvolvedor Full Stack · TypeScript · NestJS · React · Next.js · Python · Docker' },
  { id: 'r1', ini: 'GA', name: 'Guilherme Ailton', role: 'Desenvolvedor Full Stack · Node.js · TypeScript · React · Docker' },
  { id: 'r2', ini: 'MB', name: 'Marcos Barros', role: 'Engenheiro de Plataforma · DevOps · Kubernetes · Terraform' },
  { id: 'r4', ini: 'SA', name: 'Samuel Arcanjo', role: 'DevOps · SRE · Linux · Docker · Nginx · Prometheus · Grafana' },
];

function RecCard({ r, featured = false }: { r: Rec; featured?: boolean }) {
  const { t } = useLang();
  return (
    <figure className={`rec${featured ? ' featured' : ''}`}>
      {featured && <span className="rec-badge mono">{t('recs.featured')}</span>}
      <blockquote>
        <p>{t(`recs.${r.id}.q` as Key)}</p>
      </blockquote>
      <figcaption>
        <span className="avatar mono" aria-hidden="true">{r.ini}</span>
        <span>
          <strong>{r.name}</strong>
          <span className="rec-role">{r.role}</span>
          <span className="rec-rel mono">{t(`recs.${r.id}.rel` as Key)}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Recommendations() {
  const { t } = useLang();
  return (
    <section id="recomendacoes" className="section wrap">
      <SectionTitle num="06">{t('recs.title')}</SectionTitle>
      <p className="lead recs-lead">{t('recs.lead')}</p>
      {FEATURED.map((r) => (
        <RecCard key={r.id} r={r} featured />
      ))}
      <div className="recs">
        {RECS.map((r) => (
          <RecCard key={r.id} r={r} />
        ))}
      </div>
      <p className="recs-foot mono">
        {t('recs.note') && <span className="recs-note">{t('recs.note')} </span>}
        <a href={links.linkedinRecs} target="_blank" rel="noopener">{t('recs.more')}</a>
      </p>
    </section>
  );
}

export function Contact() {
  const { t } = useLang();
  const items: { k: string; v: string; href: string; external?: boolean }[] = [
    { k: 'email', v: links.email, href: `mailto:${links.email}` },
    { k: 'whatsapp', v: links.whatsappLabel, href: links.whatsapp, external: true },
    { k: 'linkedin', v: '/in/lucas-cardoso-alecrim', href: links.linkedin, external: true },
    { k: 'github', v: '/LucasCA-Git', href: links.github, external: true },
  ];
  return (
    <section id="contato" className="section wrap contact">
      <SectionTitle num="07">{t('contact.title')}</SectionTitle>
      <p className="lead">{t('contact.lead')}</p>
      <ul className="contact-list">
        {items.map((i) => (
          <li key={i.k}>
            <a href={i.href} {...(i.external ? { target: '_blank', rel: 'noopener' } : {})}>
              <span className="mono k">{i.k}</span>
              <span>{i.v}</span>
            </a>
          </li>
        ))}
        <li>
          <div>
            <span className="mono k">{t('contact.loc')}</span>
            <span>Recife, PE · Brasil</span>
          </div>
        </li>
      </ul>
    </section>
  );
}
