import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Wordmark from './Wordmark.jsx'
import { QuoteButton, useQuote } from './QuoteDialog.jsx'
import { company, divisions } from '../data/content.js'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services', menu: true },
  { to: '/hse-quality', label: 'HSE & Quality' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const location = useLocation()
  const openQuote = useQuote()

  useEffect(() => {
    setMenuOpen(false)
    setDropOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('no-scroll', menuOpen)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen && !dropOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setDropOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen, dropOpen])

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar__inner">
          <a href={`mailto:${company.email}`} className="mono">{company.email}</a>
          <span className="mono">{company.taglines[0]}</span>
          <span className="mono">{company.taglines[1]}</span>
        </div>
      </div>
      <header className={`header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-menu' : ''}`}>
        <div className="wrap header__inner">
          <Wordmark />
          <nav className="nav" aria-label="Main">
            {NAV.map((item) =>
              item.menu ? (
                <div
                  key={item.to}
                  className={`nav__drop ${dropOpen ? 'is-open' : ''}`}
                  onMouseEnter={() => setDropOpen(true)}
                  onMouseLeave={() => setDropOpen(false)}
                >
                  <NavLink to={item.to} className="nav__link">
                    {item.label}
                  </NavLink>
                  <button
                    type="button"
                    className="nav__caret"
                    aria-expanded={dropOpen}
                    aria-label="Show service divisions"
                    onClick={() => setDropOpen((v) => !v)}
                  >
                    <svg viewBox="0 0 10 6" aria-hidden="true">
                      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  </button>
                  <div className="drop">
                    <div className="drop__inner">
                      <div className="drop__head">
                        <span className="mono eyebrow">Service Divisions</span>
                        <Link to="/services" className="link-arrow">All Services</Link>
                      </div>
                      <ul className="drop__list">
                        {divisions.map((d, i) => (
                          <li key={d.id}>
                            <Link to={`/services#${d.id}`} className="drop__item">
                              <span className="mono drop__num">{String(i + 1).padStart(2, '0')}</span>
                              <span>
                                <strong>{d.title}</strong>
                                <span>{d.short}</span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="drop__foot">
                        <span>Need specific technical specs or project BOQ?</span>
                        <Link to="/contact" className="link-arrow">Request Quotation</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} end={item.end} className="nav__link">
                  {item.label}
                </NavLink>
              )
            )}
          </nav>
          <QuoteButton className="btn btn--solid btn--sm header__cta" />
          <button
            type="button"
            className="burger"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="burger__lines" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`mmenu ${menuOpen ? 'is-open' : ''}`} inert={!menuOpen}>
        <nav className="mmenu__nav" aria-label="Mobile">
          {NAV.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className="mmenu__link"
              style={{ '--i': i }}
            >
              <span className="mono">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="mmenu__foot">
          <button
            type="button"
            className="btn btn--solid btn--block"
            onClick={() => {
              setMenuOpen(false)
              openQuote()
            }}
          >
            Request a Quotation
          </button>
          <div className="mmenu__std">
            <p className="mono">Safety & Quality Standard</p>
            <p>Zero-Incident HSE & Strict QA/QC Compliance</p>
          </div>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>
    </>
  )
}
