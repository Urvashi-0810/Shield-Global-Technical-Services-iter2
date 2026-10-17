import { useEffect, useState } from 'react'

const WORDS = ['Excellence.', 'Precision.', 'Reliability.', 'Innovation.', 'Performance.']

export default function RotatingWord() {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = window.setInterval(() => setI((n) => (n + 1) % WORDS.length), 2800)
    return () => window.clearInterval(t)
  }, [])

  return (
    <span className="rotor">
      <span className="sr-only">{WORDS[0]}</span>
      {/* Invisible sizer keeps the line from jumping as words change width. */}
      <span className="rotor__sizer" aria-hidden="true">Performance.</span>
      {WORDS.map((w, n) => (
        <span key={w} className={`rotor__word ${n === i ? 'is-on' : ''}`} aria-hidden="true">
          {w}
        </span>
      ))}
    </span>
  )
}
