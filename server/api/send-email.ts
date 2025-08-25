import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // atau admin@domainkamu.com
      to: [body.to],
      subject: body.subject,
      html: `${body.message}`,
    })

    if (error) {
      console.error('Email error:', error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (err) {
    console.error('Server error:', err)
    return { success: false, error: 'Server error' }
  }
})
