import PageIntro from '../components/PageIntro.jsx'
import Reveal from '../components/Reveal.jsx'
import InquiryForm from '../components/InquiryForm.jsx'
import { company } from '../data/content.js'

export default function Contact() {
  return (
    <>
      <PageIntro index="Contact Us" title="Contact Shield Global Technical Services LLC">
        Connect with our technical estimation, tendering, and engineering divisions. Request a
        quotation or discuss your technical project scope.
      </PageIntro>

      <section className="contact section--tight wrap">
        <div className="contact__info">
          <Reveal as="p" className="mono eyebrow" variant="fade">Direct Communication</Reveal>
          <Reveal as="h2" className="display h3" delay={60}>Head Office &amp; Operations</Reveal>
          <dl className="contact__dl">
            <Reveal delay={100}>
              <dt className="mono">Company</dt>
              <dd>{company.name}</dd>
            </Reveal>
            <Reveal delay={160}>
              <dt className="mono">Location</dt>
              <dd>{company.hub}</dd>
            </Reveal>
            <Reveal delay={220}>
              <dt className="mono">Email</dt>
              <dd><a href={`mailto:${company.email}`}>{company.email}</a></dd>
            </Reveal>
            <Reveal delay={280}>
              <dt className="mono">Hours</dt>
              <dd>{company.hours}</dd>
            </Reveal>
          </dl>
          <Reveal className="contact__std" delay={340}>
            <span className="mono">Quality Assurance &amp; Safety</span>
            Zero-Incident HSE • Traceable QA/QC Inspection Controls
          </Reveal>
        </div>

        <Reveal className="contact__form" delay={120}>
          <p className="mono eyebrow">Tender &amp; Quotation Form</p>
          <h2 className="display h3">Send an Inquiry or RFP</h2>
          <p className="contact__lede">
            Fill in your project details and our engineering estimators will respond promptly.
          </p>
          <InquiryForm
            idPrefix="c"
            subjectPrefix="Inquiry / RFP"
            submitLabel="Submit Inquiry / Request Quotation"
            scopeLabel="Project Scope & Bill of Quantities Outline"
            scopeHint="Project requirements, location, target delivery schedule, and any technical standards."
          />
        </Reveal>
      </section>
    </>
  )
}
