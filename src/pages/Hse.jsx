import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro.jsx'
import Reveal from '../components/Reveal.jsx'
import { QuoteButton } from '../components/QuoteDialog.jsx'

const commitments = [
  {
    title: 'Target Zero Incidents',
    text: 'Continuous toolbox talks, risk assessments (HIRA/JSA), and mandatory PPE compliance on all construction & site projects.',
  },
  {
    title: 'Strict QA/QC Controls',
    text: 'Comprehensive Material Test Certificates (MTC), NDT inspection logs, and traceable Quality Control Plans (ITP).',
  },
]

const framework = [
  {
    title: 'Occupational Health & Safety',
    lead: 'Zero-harm safety framework.',
    text: 'Comprehensive site induction, emergency evacuation drills, hazardous material management, and continuous hazard mitigation.',
  },
  {
    title: 'Environmental Stewardship',
    lead: 'Ecological responsibility.',
    text: 'Sustainable waste segregation, emissions reduction, energy-efficient plant operations, and environmental protection guidelines.',
  },
  {
    title: 'Rigorous Quality Assurance',
    lead: 'Total engineering precision.',
    text: 'Rigorous WPS/PQR welding qualification, dimensional inspection, calibration verification, and transparent reporting.',
  },
]

export default function Hse() {
  return (
    <>
      <PageIntro index="HSE & Quality" title="Health, Safety, Environment & Quality (HSEQ)">
        At Shield Global Technical Services LLC, HSE is an uncompromising cornerstone. We
        maintain a zero-incident culture alongside rigorous quality assurance across all
        engineering, fabrication, and field operations.
      </PageIntro>

      <section className="commit section--tight wrap" aria-labelledby="commit-title">
        <div className="commit__grid">
          <div className="commit__copy">
            <div>
              <Reveal as="p" className="mono eyebrow" variant="fade">HSEQ Commitment</Reveal>
              <Reveal as="h2" id="commit-title" className="display commit__statement" delay={60}>
                Zero harm to people, zero impact to the environment, 100% adherence to quality.
              </Reveal>
            </div>
            <Reveal as="p" className="lede commit__lede">
              Shield Global Technical Services LLC enforces stringent HSE management systems
              modeled on international engineering best practices and regional regulatory
              benchmarks. Our proactive safety culture empowers every team member with
              Stop-Work Authority.
            </Reveal>
            <div className="commit__items">
              {commitments.map((c, i) => (
                <Reveal key={c.title} className="commit__item" delay={100 + i * 100}>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal variant="clip" className="commit__media" delay={120}>
            <img
              src="/images/quality-detail.jpg"
              alt="Quality assurance inspection and precision measurement"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="framework section section--dark" aria-labelledby="framework-title">
        <div className="wrap">
          <div className="framework__head">
            <Reveal as="p" className="mono eyebrow" variant="fade">Core Pillars</Reveal>
            <Reveal as="h2" id="framework-title" className="display h2" delay={60}>
              Our HSE &amp; Quality Framework
            </Reveal>
          </div>
          <ol className="framework__list">
            {framework.map((f, i) => (
              <Reveal as="li" key={f.title} className="frow" delay={i * 110}>
                <span className="mono frow__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="frow__title">{f.title}</h3>
                <p className="frow__text">
                  <strong>{f.lead}</strong> {f.text}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section wrap">
        <Reveal className="dossier">
          <div>
            <h2 className="display dossier__title">Require our HSEQ compliance dossier?</h2>
            <p>Request our quality manual, safety records, or company HSE policy document.</p>
          </div>
          <div className="dossier__actions">
            <Link to="/contact" className="btn btn--solid">Contact HSE Department</Link>
            <QuoteButton className="btn btn--ghost" />
          </div>
        </Reveal>
      </section>
    </>
  )
}
