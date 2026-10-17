import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro.jsx'
import Reveal from '../components/Reveal.jsx'
import { QuoteButton } from '../components/QuoteDialog.jsx'
import { divisions } from '../data/content.js'

const pad = (n) => String(n).padStart(2, '0')

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])
  return active
}

const ids = divisions.map((d) => d.id)

export default function Services() {
  const active = useActiveSection(ids)

  useEffect(() => {
    // Keep the active chip visible in the horizontal mobile index.
    const chip = document.querySelector(`.sindex [data-id="${active}"]`)
    const bar = chip?.closest('.sindex__list')
    if (chip && bar && bar.scrollWidth > bar.clientWidth) {
      bar.scrollTo({ left: chip.offsetLeft - 16, behavior: 'smooth' })
    }
  }, [active])

  return (
    <>
      <PageIntro index="Services" title="Comprehensive Technical & Industrial Services">
        Shield Global Technical Services LLC delivers multi-disciplinary contracting,
        engineering fabrication, maintenance, and facility solutions across critical industry
        sectors.
      </PageIntro>

      <div className="services wrap">
        <nav className="sindex" aria-label="Service divisions">
          <p className="mono eyebrow">Service Divisions</p>
          <ol className="sindex__list">
            {divisions.map((d, i) => (
              <li key={d.id}>
                <a
                  href={`#${d.id}`}
                  data-id={d.id}
                  className={active === d.id ? 'is-on' : ''}
                  aria-current={active === d.id ? 'true' : undefined}
                >
                  <span className="mono">{pad(i + 1)}</span>
                  {d.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="services__list">
          {divisions.map((d, i) => (
            <Division key={d.id} d={d} n={i + 1} />
          ))}
        </div>
      </div>

      <section className="closing closing--stone" aria-labelledby="svc-closing">
        <div className="wrap closing__inner">
          <Reveal as="p" className="mono eyebrow" variant="fade">Turnkey Engineering &amp; Contracting</Reveal>
          <Reveal as="h2" id="svc-closing" className="display closing__title" delay={60}>
            Need a customized solution for your project?
          </Reveal>
          <Reveal className="closing__side" delay={140}>
            <p>
              Our multi-disciplinary engineering teams provide detailed proposals, site
              inspections, and quotation breakdowns for projects across the region.
            </p>
            <div className="closing__actions">
              <QuoteButton />
              <Link to="/contact" className="link-arrow">Speak with an Engineer</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Division({ d, n }) {
  return (
    <article id={d.id} className={`division ${d.image ? '' : 'division--noimg'}`} aria-labelledby={`${d.id}-t`}>
      <Reveal className="division__head">
        <span className="mono division__ref">Service Division {pad(n)}</span>
        <h2 id={`${d.id}-t`} className="display h2">{d.title}</h2>
      </Reveal>

      {d.image && (
        <Reveal variant="clip" className="division__media">
          <img src={d.image} alt={d.title} loading="lazy" />
          <span className="mono division__stamp">Shield Global Ref-{pad(n)} · Quality Assured</span>
        </Reveal>
      )}

      <div className="division__body">
        <Reveal as="p" className="division__text">{d.text}</Reveal>
        <Reveal className="division__caps" delay={80}>
          <p className="mono eyebrow">Key Capabilities</p>
          <ul className="ticks ticks--rule">
            {d.caps.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="division__actions" delay={120}>
        <QuoteButton service={d.title} className="btn btn--solid">
          Request Quotation for {d.title}
        </QuoteButton>
        <Link to="/contact" className="link-arrow">Technical Inquiry</Link>
      </Reveal>
    </article>
  )
}
