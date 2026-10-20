import { Carousel } from '@mantine/carousel';
import { Modal } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef, useState } from 'react';
import { CERTS, certDate, certName, type Cert } from '../certs';
import { useLang } from '../i18n';

const WITH_IMG = CERTS.filter((c) => c.img);

export function Education() {
  const { t, lang } = useLang();
  const autoplay = useRef(Autoplay({ delay: 4500, stopOnMouseEnter: true, stopOnInteraction: false }));
  const [open, setOpen] = useState<Cert | null>(null);

  return (
    <section id="formacao" className="section wrap">
      <h2 className="section-title">
        <span className="mono num">05.</span> <span>{t('edu.title')}</span>
      </h2>

      <article className="card edu">
        <p className="mono kicker">{t('edu.degreeTag')}</p>
        <h3>{t('edu.degree')}</h3>
        <p>FICR — Faculdade Católica Imaculada Conceição do Recife</p>
        <p className="mono when">{t('edu.when')}</p>
      </article>

      <div className="certs-head">
        <h3 className="sub-title">{t('edu.gallery')}</h3>
        <span className="mono hint">{t('edu.galleryHint')}</span>
      </div>

      <Carousel
        className="cert-carousel"
        slideSize={{ base: '100%', sm: '50%', md: '33.333%' }}
        slideGap="md"
        align="start"
        loop
        withIndicators
        plugins={[autoplay.current]}
        aria-label={t('edu.gallery')}
      >
        {WITH_IMG.map((c) => (
          <Carousel.Slide key={c.img}>
            <button type="button" className="cert-slide" onClick={() => setOpen(c)}>
              <span className="cert-img">
                <img src={`/certs/${c.img}`} alt={certName(c, lang)} loading="lazy" />
              </span>
              <span className="cert-cap">
                <strong>{certName(c, lang)}</strong>
                <span className="mono">
                  {c.issuer} · {certDate(c, lang)}
                  {c.hours ? ` · ${c.hours}h` : ''}
                </span>
              </span>
            </button>
          </Carousel.Slide>
        ))}
      </Carousel>

      <div className="certs-head">
        <h3 className="sub-title">{t('edu.all')}</h3>
        <span className="mono hint">{CERTS.length}</span>
      </div>
      <ul className="certs">
        {CERTS.map((c) => (
          <li key={certName(c, 'pt') + c.issuer}>
            <span className="mono yr">{certDate(c, lang)}</span>
            <div>
              <strong>
                {certName(c, lang)}
                {c.official && <span className="badge mono">{t('edu.official')}</span>}
              </strong>
              <span>
                {c.issuer}
                {c.hours ? ` · ${c.hours}h` : ''}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <Modal
        opened={open !== null}
        onClose={() => setOpen(null)}
        size="xl"
        centered
        title={open ? certName(open, lang) : ''}
        classNames={{ content: 'cert-modal', header: 'cert-modal', title: 'cert-modal-title' }}
      >
        {open && (
          <>
            <img src={`/certs/${open.img}`} alt={certName(open, lang)} style={{ width: '100%', borderRadius: 8, display: 'block' }} />
            <p className="mono cert-modal-meta">
              {open.issuer} · {certDate(open, lang)}
              {open.hours ? ` · ${open.hours}h` : ''}
            </p>
          </>
        )}
      </Modal>
    </section>
  );
}
