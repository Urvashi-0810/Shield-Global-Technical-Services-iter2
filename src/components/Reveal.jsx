import { useEffect, useRef, useState } from 'react'

/**
 * Reveals its children once they scroll into view.
 * variant: "up" (fade + rise), "fade", or "clip" (image wipe).
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${shown ? 'is-in' : ''} ${className}`}
      style={{ ...style, '--delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
