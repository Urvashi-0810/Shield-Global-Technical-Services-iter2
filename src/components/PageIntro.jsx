import Reveal from './Reveal.jsx'

export default function PageIntro({ index, title, children }) {
  return (
    <header className="page-intro wrap">
      <Reveal className="page-intro__meta" variant="fade">
        <span className="mono">{index}</span>
        <span className="mono">Shield Global Technical Services LLC</span>
      </Reveal>
      <Reveal as="h1" className="page-intro__title display" delay={80}>
        {title}
      </Reveal>
      {children && (
        <Reveal className="page-intro__lede" delay={160}>
          <p>{children}</p>
        </Reveal>
      )}
    </header>
  )
}
