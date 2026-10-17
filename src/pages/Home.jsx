import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import RotatingWord from '../components/RotatingWord.jsx'
import { QuoteButton } from '../components/QuoteDialog.jsx'
import { divisions, pillars, sectors, specialized, trustStrip } from '../data/content.js'

const pad = (n) => String(n).padStart(2, '0')

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Pillars />
      <Specialized />
      <Sectors />
      <Hseq />
      <ClosingCta />
    </>
  )
}

function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero__top">
        <Reveal as="p" variant="fade" className="mono eyebrow">
          Shield Global Technical Services LLC
        </Reveal>
        <h1 id="hero-title" className="hero__title display">
          <Reveal as="span" className="hero__line" delay={60}>Engineering.</Reveal>
          <Reveal as="span" className="hero__line" delay={140}>Technical Services.</Reveal>
          <Reveal as="span" className="hero__line" delay={220}>
            Project <em><RotatingWord /></em>
          </Reveal>
        </h1>
        <Reveal as="p" className="hero__lede" delay={300}>
          Delivering integrated technical, construction, maintenance and project support
          solutions across Building Construction, Facility Management, Oil &amp; Gas, Energy
          &amp; Utilities and MEP sectors in the UAE and beyond.
        </Reveal>
      </div>

      <div className="hero__grid">
        <Reveal variant="clip" className="hero__media" delay={200}>
          <img
            src="/images/hero-turbine.jpg"
            alt="Shield Global Technical Services LLC industrial operations"
            width="1536"
            height="1280"
            fetchPriority="high"
          />
        </Reveal>

        <div className="hero__side">
          <Reveal className="hero__actions" delay={360}>
            <QuoteButton />
            <Link to="/services" className="link-arrow">Our Services</Link>
          </Reveal>

          <Reveal as="nav" className="index" delay={420} aria-label="Service divisions">
            <p className="mono eyebrow">Service Divisions</p>
            <ol>
              {divisions.map((d, i) => (
                <li key={d.id}>
                  <Link to={`/services#${d.id}`}>
                    <span className="mono">{pad(i + 1)}</span>
                    {d.title}
                  </Link>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function TrustStrip() {
  return (
    <section className="trust" aria-label="Capabilities">
      <ul className="wrap trust__list">
        {trustStrip.map((t, i) => (
          <Reveal as="li" key={t} delay={i * 70} variant="fade">
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2 6.2l2.6 2.6L10 3.4" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            {t}
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

function Pillars() {
  const [active, setActive] = useState(0)
  const current = pillars[active]

  return (
    <section className="pillars section wrap" aria-labelledby="pillars-title">
      <div className="pillars__head">
        <Reveal as="h2" id="pillars-title" className="display h2">
          The 5 Core Pillars
        </Reveal>
        <Reveal as="p" className="lede" delay={80}>
          Engineered turnkey solutions tailored for major industrial, commercial, civil, and
          energy infrastructure projects across the GCC.
        </Reveal>
      </div>

      <div className="pillars__body">
        <ol className="pillars__list">
          {pillars.map((p, i) => {
            const on = i === active
            return (
              <Reveal as="li" key={p.id} delay={i * 60} className={`prow ${on ? 'is-on' : ''}`}>
                <button
                  type="button"
                  className="prow__btn"
                  aria-expanded={on}
                  aria-controls={`pillar-${p.id}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => window.matchMedia('(hover: hover) and (min-width: 960px)').matches && setActive(i)}
                >
                  <span className="mono prow__num">{pad(i + 1)}</span>
                  <span className="prow__titles">
                    <span className="mono prow__tag">{p.pillarTag}</span>
                    <span className="prow__title">{p.title}</span>
                  </span>
                  <span className="prow__icon" aria-hidden="true" />
                </button>
                {/* Inline panel used on small screens */}
                <div className="prow__panel" id={`pillar-${p.id}`}>
                  <div>
                    <PillarDetail p={p} />
                  </div>
                </div>
              </Reveal>
            )
          })}
        </ol>

        <div className="pillars__aside" aria-live="polite">
          <div className="pillars__frame">
            {pillars.map((p, i) => (
              <img
                key={p.id}
                src={p.pillarImage}
                alt={i === active ? p.title : ''}
                className={i === active ? 'is-on' : ''}
                loading="lazy"
              />
            ))}
            <span className="mono pillars__ref">Ref-{pad(active + 1)}</span>
          </div>
          <div key={current.id} className="pillars__detail">
            <PillarDetail p={current} />
          </div>
        </div>
      </div>
    </section>
  )
}

function PillarDetail({ p }) {
  return (
    <div className="pdetail">
      <img className="pdetail__img" src={p.pillarImage} alt="" loading="lazy" />
      <p className="pdetail__text">{p.pillarText}</p>
      <p className="mono eyebrow">Key Capabilities</p>
      <ul className="ticks">
        {p.pillarCaps.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <div className="pdetail__actions">
        <Link to={`/services#${p.id}`} className="link-arrow">Explore Service</Link>
        <QuoteButton service={p.title} className="btn btn--ghost btn--sm">
          Quote
        </QuoteButton>
      </div>
    </div>
  )
}

function Specialized() {
  return (
    <section className="spec section--dark" aria-labelledby="spec-title">
      <div className="wrap spec__inner">
        <div className="spec__head">
          <Reveal as="p" className="mono eyebrow" variant="fade">Specialized Technical Services</Reveal>
          <Reveal as="h2" id="spec-title" className="display h2" delay={60}>
            Fabrication, Manpower &amp; Turnarounds
          </Reveal>
          <Reveal as="p" className="lede" delay={120}>
            Complementary technical disciplines providing comprehensive support from workshop
            pre-fabrication to on-site project commissioning.
          </Reveal>
        </div>
        <ul className="spec__grid">
          {specialized.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90} className="scard">
              <Link to={s.to} className="scard__link">
                <span className="scard__top">
                  <span className="mono">{pad(i + 1)}</span>
                  <span className="mono scard__badge">{s.badge}</span>
                </span>
                <h3 className="scard__title">{s.title}</h3>
                <p>{s.text}</p>
                <span className="link-arrow scard__more">Learn More</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Sectors() {
  return (
    <section className="sectors section" aria-labelledby="sectors-title">
      <div className="wrap sectors__head">
        <Reveal as="p" className="mono eyebrow" variant="fade">Industries</Reveal>
        <Reveal as="h2" id="sectors-title" className="display h2" delay={60}>
          Engineered for Demanding Industrial Environments
        </Reveal>
        <Reveal as="p" className="lede" delay={120}>
          Shield Global Technical Services LLC operates across critical sectors including
          Building Construction, Oil &amp; Gas, Energy &amp; Utilities, MEP Contracting, and
          Manufacturing Infrastructure, providing comprehensive technical contracting,
          specialized fabrication, and certified maintenance execution.
        </Reveal>
      </div>
      <ul className="sectors__track wrap">
        {sectors.map((s, i) => (
          <Reveal as="li" key={s.title} className="sector" delay={i * 110}>
            <figure>
              <div className="sector__img">
                <img src={s.image} alt={s.title} loading="lazy" />
              </div>
              <figcaption>
                <span className="mono">{pad(i + 1)} / Industry Sector</span>
                <span className="sector__title">{s.title}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

function Hseq() {
  const badges = [
    ['QA / QC', 'Quality Management'],
    ['HSE Plan', 'Health & Safety'],
    ['Eco Guard', 'Environmental'],
  ]
  return (
    <section className="hseq section wrap" aria-labelledby="hseq-title">
      <Reveal variant="clip" className="hseq__media">
        <img
          src="/images/quality-detail.jpg"
          alt="Quality assurance inspection and dimensional verification"
          loading="lazy"
        />
        <div className="hseq__tag">
          <span className="mono">Shield Global QA/QC</span>
          <strong>100% Traceability</strong>
        </div>
      </Reveal>
      <div className="hseq__copy">
        <Reveal as="p" className="mono eyebrow" variant="fade">HSEQ &amp; Quality Standards</Reveal>
        <Reveal as="h2" id="hseq-title" className="display h2" delay={60}>
          Rigorous Safety Culture.
          <br />
          Zero-Compromise Quality.
        </Reveal>
        <Reveal as="p" delay={120}>
          Every project executed by Shield Global Technical Services LLC adheres strictly to
          international engineering standards and regional regulatory requirements. We provide
          complete transparency through Inspection Test Plans (ITP), Material Test
          Certificates (MTC), and certified QA/QC oversight.
        </Reveal>
        <dl className="badges">
          {badges.map(([k, v], i) => (
            <Reveal key={k} className="badges__row" delay={180 + i * 80}>
              <dt className="mono">{k}</dt>
              <dd>{v}</dd>
            </Reveal>
          ))}
        </dl>
        <Reveal delay={420}>
          <Link to="/hse-quality" className="btn btn--solid">Explore HSE &amp; Quality Manual</Link>
        </Reveal>
      </div>
    </section>
  )
}

function ClosingCta() {
  return (
    <section className="closing" aria-labelledby="closing-title">
      <div className="wrap closing__inner">
        <Reveal as="p" className="mono eyebrow" variant="fade">Start Your Technical Tender</Reveal>
        <Reveal as="h2" id="closing-title" className="display closing__title" delay={60}>
          Ready to mobilize your next industrial or construction project?
        </Reveal>
        <Reveal className="closing__side" delay={140}>
          <p>
            Contact Shield Global Technical Services LLC for competitive bids, project
            proposals, and technical consultations across the UAE and Gulf region.
          </p>
          <div className="closing__actions">
            <QuoteButton className="btn btn--light" />
            <Link to="/contact" className="link-arrow link-arrow--light">Contact Technical Desk</Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
