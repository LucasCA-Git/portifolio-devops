import type { Lang } from './dict';

export type Cert = {
  name: string | Record<Lang, string>;
  issuer: string;
  /** ano e mês (1-12) de emissão */
  date: [number, number];
  hours?: number;
  /** certificação oficial do fabricante (destacada na lista) */
  official?: boolean;
  /** imagem em /public/certs (aparece no carrossel) */
  img?: string;
};

// Ordem: mais recentes primeiro. Para adicionar um novo, inclua aqui
// (e a imagem em public/certs/ se quiser que apareça no carrossel).
export const CERTS: Cert[] = [
  { name: 'Git & GitHub para DevOps', issuer: 'TFTEC Prime', date: [2026, 9], hours: 12, img: 'tftec-git-github.jpg' },
  { name: 'Docker Fundamentals', issuer: 'TFTEC Prime', date: [2026, 9], hours: 13, img: 'tftec-docker.jpg' },
  { name: { pt: 'Ciclo TakeOff 2026.2: DevOps, Docker e IA', en: 'TakeOff Cycle 2026.2: DevOps, Docker and AI' }, issuer: 'Rocketseat · FICR', date: [2026, 9], hours: 22, img: 'rocketseat-takeoff-2026-2.jpg' },
  { name: { pt: 'Curso de Extensão em DevOps', en: 'DevOps Extension Course' }, issuer: 'Rocketseat', date: [2026, 5], hours: 50, img: 'rocketseat-devops.jpg' },
  { name: { pt: 'Ciclo GrowUp 2026.1: Node.js e Flask', en: 'GrowUp Cycle 2026.1: Node.js and Flask' }, issuer: 'Rocketseat · FICR', date: [2026, 4], hours: 11, img: 'rocketseat-growup-2026-1.jpg' },
  { name: { pt: 'DevOps Days Recife 2025 (participação)', en: 'DevOps Days Recife 2025 (attendee)' }, issuer: 'DevOpsDays Recife', date: [2025, 12], hours: 8, img: 'devopsdays-recife.jpg' },
  { name: { pt: 'Ciclo RiseUp 2025.2', en: 'RiseUp Cycle 2025.2' }, issuer: 'Rocketseat · FICR', date: [2025, 10] },
  { name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate', issuer: 'Oracle', date: [2025, 8], official: true, img: 'oracle-oci-foundations.jpg' },
  { name: 'ONE Tech Foundation G8: Data Science', issuer: 'Alura · Oracle Next Education', date: [2025, 8], hours: 325, img: 'alura-one-data-science.jpg' },
  { name: { pt: 'Formação Acelerada em Programação Back-End com JavaScript', en: 'Accelerated Back-End Programming with JavaScript' }, issuer: 'Softex Pernambuco', date: [2025, 1], hours: 144, img: 'softex-backend-js.jpg' },
  { name: { pt: 'Bootcamp Microsoft Fundamentos de IA (AI-900)', en: 'Microsoft AI Fundamentals Bootcamp (AI-900)' }, issuer: 'DIO', date: [2024, 12], hours: 21, img: 'dio-ai-fundamentals.jpg' },
  { name: 'Microsoft Certification Challenge #2: AZ-204', issuer: 'DIO', date: [2024, 12] },
  { name: { pt: 'Microsoft Applied Skills: Administrar Active Directory Domain Services', en: 'Microsoft Applied Skills: Administer Active Directory Domain Services' }, issuer: 'Microsoft', date: [2024, 12], official: true },
  { name: 'Docker', issuer: 'Treina Recife', date: [2024, 5] },
  { name: 'AWS', issuer: 'Treina Recife', date: [2024, 4] },
  { name: 'AWS Educate: Getting Started with Cloud Ops', issuer: 'Amazon Web Services', date: [2024, 1] },
  { name: 'AWS Educate: Getting Started with Databases', issuer: 'Amazon Web Services', date: [2024, 1] },
  { name: 'AWS Educate: Getting Started with Serverless', issuer: 'Amazon Web Services', date: [2024, 1] },
  { name: { pt: 'Métodos Ágeis: Scrum', en: 'Agile Methods: Scrum' }, issuer: 'Treina Recife', date: [2023, 12] },
  { name: 'Java Web com Spring Boot', issuer: 'Treina Recife', date: [2023, 11] },
];

const MONTHS: Record<Lang, string[]> = {
  pt: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

export const certName = (c: Cert, lang: Lang) => (typeof c.name === 'string' ? c.name : c.name[lang]);
export const certDate = (c: Cert, lang: Lang) => `${MONTHS[lang][c.date[1] - 1]} ${c.date[0]}`;
