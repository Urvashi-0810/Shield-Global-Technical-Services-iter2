import { useState } from 'react'
import { company, quoteOptions } from '../data/content.js'

/**
 * The old site's forms only faked a success message. Until a backend exists,
 * this form composes an email to the company inbox so nothing is lost.
 */
export default function InquiryForm({
  idPrefix,
  defaultService = '',
  defaultScope = '',
  subjectPrefix = 'Quotation Request',
  submitLabel = 'Submit Request',
  scopeLabel = 'Project Scope & Technical Details',
  scopeHint = 'Key deliverables, location, site timeline, specifications or standards required.',
  compact = false,
}) {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const service = data.get('service') || 'General'
    const body = [
      `Service division: ${service}`,
      `Name: ${data.get('name')}`,
      `Company / Organization: ${data.get('company')}`,
      `Email: ${data.get('email')}`,
      `Phone / Mobile: ${data.get('phone')}`,
      '',
      `${scopeLabel}:`,
      data.get('scope'),
    ].join('\n')
    const href = `mailto:${company.email}?subject=${encodeURIComponent(
      `${subjectPrefix}: ${service}`
    )}&body=${encodeURIComponent(body)}`
    window.location.href = href
    setSent(true)
  }

  if (sent) {
    return (
      <div className="form-done" role="status">
        <p className="mono eyebrow">Ready to send</p>
        <h3 className="display">Your email app has the request.</h3>
        <p>
          We opened a draft addressed to{' '}
          <a href={`mailto:${company.email}`}>{company.email}</a> with the details
          you entered. Send it from there to reach the Shield Global estimation team.
        </p>
        <button type="button" className="btn btn--ghost" onClick={() => setSent(false)}>
          Edit details
        </button>
      </div>
    )
  }

  const f = (name) => `${idPrefix}-${name}`

  return (
    <form className={`form ${compact ? 'form--compact' : ''}`} onSubmit={handleSubmit}>
      <div className="field field--full">
        <label htmlFor={f('service')}>Service Division Required *</label>
        <div className="select">
          <select id={f('service')} name="service" required defaultValue={defaultService}>
            <option value="" disabled>
              Select a division
            </option>
            {quoteOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor={f('name')}>Full Name *</label>
        <input id={f('name')} name="name" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor={f('company')}>Company / Organization *</label>
        <input id={f('company')} name="company" required autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor={f('email')}>Work Email *</label>
        <input id={f('email')} name="email" type="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor={f('phone')}>Phone / Mobile *</label>
        <input id={f('phone')} name="phone" type="tel" required autoComplete="tel" />
      </div>
      <div className="field field--full">
        <label htmlFor={f('scope')}>{scopeLabel} *</label>
        <textarea
          id={f('scope')}
          name="scope"
          rows={compact ? 4 : 6}
          required
          defaultValue={defaultScope}
          aria-describedby={f('scope-hint')}
        />
        <span className="field__hint" id={f('scope-hint')}>
          {scopeHint}
        </span>
      </div>
      <div className="form__foot field--full">
        <button type="submit" className="btn btn--solid">
          {submitLabel}
        </button>
        <p className="form__note">
          Direct inquiry to: <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
      </div>
    </form>
  )
}
