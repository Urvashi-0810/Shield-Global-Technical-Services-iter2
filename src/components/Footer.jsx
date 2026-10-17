import { Link } from 'react-router-dom'
import Wordmark from './Wordmark.jsx'
import { QuoteButton } from './QuoteDialog.jsx'
import { company, divisions } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <Wordmark />
            <p>{company.footerBlurb}</p>
            <QuoteButton className="btn btn--light" />
          </div>
          <div className="footer__col">
            <h2 className="mono eyebrow">Service Divisions</h2>
            <ul>
              {divisions.map((d) => (
                <li key={d.id}>
                  <Link to={`/services#${d.id}`}>{d.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h2 className="mono eyebrow">Navigation</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/hse-quality">HSE &amp; Quality</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h2 className="mono eyebrow">Regional Operations</h2>
            <ul className="footer__plain">
              <li>{company.regional}</li>
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li>{company.hours}</li>
            </ul>
            <p className="footer__std">
              <span className="mono">Quality &amp; Safety</span>
              Zero-Incident HSE &amp; Strict QA/QC Compliance
            </p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <ul>
            <li><Link to="/hse-quality">HSE Policy</Link></li>
            <li><Link to="/about">Quality Assurance</Link></li>
            <li><Link to="/contact">Tenders &amp; Inquiries</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
