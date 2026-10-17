import PageIntro from '../components/PageIntro.jsx'
import Reveal from '../components/Reveal.jsx'
import { company, jobs } from '../data/content.js'

export default function Careers() {
  return (
    <>
      <PageIntro index="Careers" title="Careers at Shield Global">
        Join a dynamic, precision-driven engineering contracting organization. We invest in
        talent, continuous technical growth, safety leadership, and impactful industrial
        projects.
      </PageIntro>

      <section className="jobs section--tight wrap" aria-labelledby="jobs-title">
        <div className="jobs__head">
          <div>
            <Reveal as="p" className="mono eyebrow" variant="fade">Opportunities</Reveal>
            <Reveal as="h2" id="jobs-title" className="display h2" delay={60}>
              Open Positions
            </Reveal>
          </div>
          <Reveal as="p" className="jobs__note" delay={120}>
            Don’t see your specific role? Send your CV and portfolio to{' '}
            <a href={`mailto:${company.email}?subject=${encodeURIComponent('CV & Portfolio')}`}>
              {company.email}
            </a>
          </Reveal>
        </div>

        <ul className="jobs__list">
          {jobs.map((j, i) => (
            <Reveal as="li" key={j.title} className="job" delay={i * 70}>
              <div className="job__main">
                <span className="mono job__div">{j.division}</span>
                <h3 className="job__title">{j.title}</h3>
                <p>{j.text}</p>
              </div>
              <dl className="job__meta">
                <div><dt className="mono">Location</dt><dd>{j.location}</dd></div>
                <div><dt className="mono">Type</dt><dd>{j.type}</dd></div>
                <div><dt className="mono">Experience</dt><dd>{j.experience}</dd></div>
              </dl>
              <a
                className="link-arrow job__apply"
                href={`mailto:${company.email}?subject=${encodeURIComponent(`Application: ${j.title}`)}`}
              >
                Apply Now
                <span className="sr-only"> for {j.title}</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  )
}
