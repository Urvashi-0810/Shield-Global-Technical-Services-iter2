import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro.jsx'
import Reveal from '../components/Reveal.jsx'
import { QuoteButton } from '../components/QuoteDialog.jsx'

const overview = [
  'Multi-disciplinary engineering capabilities under one roof',
  'Comprehensive QA/QC and zero-incident HSE management systems',
  'Experienced project managers, certified inspectors, and specialized workforce',
  'Uncompromising adherence to safety standards and client project timelines',
]

const principles = [
  {
    title: 'Engineering Precision',
    text: 'We bring meticulous planning, certified methodologies, and advanced tooling to every civil, mechanical, and MEP challenge.',
  },
  {
    title: 'Safety & Integrity First',
    text: 'Zero-harm commitment across all work sites, comprehensive hazard identification, and strict adherence to international safety codes.',
  },
  {
    title: 'Client Partnership',
    text: 'Transparent communication, proactive schedule tracking, and adaptable engineering teams that ensure on-time delivery.',
  },
]

export default function About() {
  return (
    <>
      <PageIntro index="About Us" title="Engineering Excellence, Integrity & High-Performance Execution">
        Shield Global Technical Services LLC is a premier technical solutions and
        multi-disciplinary contracting firm delivering specialized engineering, construction,
        facility maintenance, and industrial support.
      </PageIntro>

      <Reveal variant="clip" className="banner wrap">
        <img src="/images/hero-turbine.jpg" alt="Shield Global Technical operations" />
        <div className="banner__caption">
          <span className="mono">Shield Global Technical Services LLC</span>
          <span>Committed to Safety, Quality &amp; Engineering Precision</span>
        </div>
      </Reveal>

      <section className="overview section wrap" aria-labelledby="overview-title">
        <div className="overview__head">
          <Reveal as="p" className="mono eyebrow" variant="fade">Corporate Overview</Reveal>
          <Reveal as="h2" id="overview-title" className="display h2" delay={60}>
            Delivering robust technical solutions built to last.
          </Reveal>
        </div>
        <div className="overview__body">
          <Reveal as="p" className="lede">
            From heavy structural construction and MEP installations to oil &amp; gas
            infrastructure maintenance and certified technical staffing, Shield Global provides
            end-to-end expertise tailored to demanding industrial requirements.
          </Reveal>
          <ol className="numbered">
            {overview.map((o, i) => (
              <Reveal as="li" key={o} delay={i * 80}>
                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                {o}
              </Reveal>
            ))}
          </ol>
          <Reveal className="actions" delay={200}>
            <QuoteButton />
            <Link to="/contact" className="link-arrow">Contact Our Team</Link>
          </Reveal>
        </div>
      </section>

      <section className="principles section section--stone" aria-labelledby="principles-title">
        <div className="wrap">
          <div className="principles__head">
            <Reveal as="p" className="mono eyebrow" variant="fade">Core Pillars</Reveal>
            <Reveal as="h2" id="principles-title" className="display h2" delay={60}>
              Our Operating Principles
            </Reveal>
          </div>
          <ol className="principles__grid">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} className="principle" delay={i * 120}>
                <span className="principle__num display">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
