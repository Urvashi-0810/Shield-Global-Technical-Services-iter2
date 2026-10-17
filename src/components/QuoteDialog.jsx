import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import InquiryForm from './InquiryForm.jsx'

const QuoteContext = createContext(() => {})

export function useQuote() {
  return useContext(QuoteContext)
}

export function QuoteProvider({ children }) {
  const dialogRef = useRef(null)
  const [service, setService] = useState('')
  // Bumping the key remounts the form so a new pre-selected service applies.
  const [formKey, setFormKey] = useState(0)
  const [closing, setClosing] = useState(false)

  const open = useCallback((svc = '') => {
    setService(typeof svc === 'string' ? svc : '')
    setFormKey((k) => k + 1)
    setClosing(false)
    dialogRef.current?.showModal()
    document.documentElement.classList.add('no-scroll')
  }, [])

  const close = useCallback(() => {
    setClosing(true)
    window.setTimeout(() => {
      dialogRef.current?.close()
      setClosing(false)
    }, 260)
  }, [])

  useEffect(() => {
    const d = dialogRef.current
    const onClose = () => document.documentElement.classList.remove('no-scroll')
    const onCancel = (e) => {
      e.preventDefault()
      close()
    }
    d.addEventListener('close', onClose)
    d.addEventListener('cancel', onCancel)
    return () => {
      d.removeEventListener('close', onClose)
      d.removeEventListener('cancel', onCancel)
    }
  }, [close])

  return (
    <QuoteContext.Provider value={open}>
      {children}
      <dialog
        ref={dialogRef}
        className={`quote ${closing ? 'is-closing' : ''}`}
        aria-labelledby="quote-title"
        onClick={(e) => {
          if (e.target === dialogRef.current) close()
        }}
      >
        <div className="quote__panel">
          <div className="quote__head">
            <p className="mono eyebrow">Fast Response Engineering Quotation</p>
            <button type="button" className="quote__close" onClick={close} aria-label="Close">
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
          <h2 id="quote-title" className="display quote__title">
            Request a Quotation
          </h2>
          <p className="quote__lede">
            Share your technical requirements, specifications, or bill of quantities for
            an engineered proposal.
          </p>
          <InquiryForm key={formKey} idPrefix="q" defaultService={service} compact />
        </div>
      </dialog>
    </QuoteContext.Provider>
  )
}

export function QuoteButton({ service, className = 'btn btn--solid', children = 'Request a Quotation' }) {
  const open = useQuote()
  return (
    <button type="button" className={className} onClick={() => open(service)}>
      {children}
    </button>
  )
}
