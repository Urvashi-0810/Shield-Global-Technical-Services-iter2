import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const TITLES = {
  '/': 'Shield Global Technical Services LLC — Engineering & Project Excellence',
  '/about': 'About Us — Shield Global Technical Services LLC',
  '/services': 'Services — Shield Global Technical Services LLC',
  '/hse-quality': 'HSE & Quality — Shield Global Technical Services LLC',
  '/careers': 'Careers — Shield Global Technical Services LLC',
  '/contact': 'Contact Us — Shield Global Technical Services LLC',
}

export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    document.title = TITLES[pathname] ?? TITLES['/']
  }, [pathname])

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target page has rendered.
      const id = decodeURIComponent(hash.slice(1))
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
