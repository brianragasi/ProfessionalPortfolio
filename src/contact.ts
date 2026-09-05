export type ContactForm = { name: string; email: string; message: string; website: string }

export function validateContact(form: ContactForm) {
  if (form.website) return 'Submission blocked.'
  if (form.name.trim().length < 2) return 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return 'Please enter a valid email address.'
  if (form.message.trim().length < 10) return 'Please enter a message of at least 10 characters.'
  return null
}

export async function sendContact(form: ContactForm, recipient: string, signal: AbortSignal) {
  const error = validateContact(form)
  if (error) throw new Error(error)
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    signal,
    body: JSON.stringify({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
      _replyto: form.email.trim(),
      _subject: 'New professional portfolio inquiry',
      _template: 'table',
      _honey: form.website,
    }),
  })
  if (!response.ok) throw new Error('The message service is unavailable. Please email me directly instead.')
  const result = await response.json() as { success?: boolean | string; message?: string }
  if (/activat|confirm your email|verify your email/i.test(result.message ?? '')) return 'activation' as const
  if (result.success !== true && result.success !== 'true') throw new Error('The message was not accepted. Please email me directly instead.')
  return 'accepted' as const
}
