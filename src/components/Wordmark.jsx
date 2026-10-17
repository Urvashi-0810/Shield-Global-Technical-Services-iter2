import { Link } from 'react-router-dom'

export default function Wordmark({ onClick }) {
  return (
    <Link to="/" className="wordmark" onClick={onClick} aria-label="Shield Global Technical Services LLC, home">
      <svg className="wordmark__mark" viewBox="0 0 32 36" aria-hidden="true">
        <path d="M16 1.5 30 6.5v10.2c0 9.1-5.9 15.6-14 18-8.1-2.4-14-8.9-14-18V6.5z" fill="currentColor" />
        <path d="M9.5 18l4.6 4.6 8.4-9" fill="none" stroke="var(--mark-check, var(--paper))" strokeWidth="2.6" strokeLinecap="square" />
      </svg>
      <span className="wordmark__text">
        <span className="wordmark__name">Shield Global</span>
        <span className="wordmark__sub">Technical Services LLC</span>
      </span>
    </Link>
  )
}
