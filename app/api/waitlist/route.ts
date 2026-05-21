import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (supabaseUrl && supabaseKey) {
    const res = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
      method: 'POST',
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        Prefer: 'resolution=ignore-duplicates',
      },
      body: JSON.stringify({ email }),
    })

    if (!res.ok && res.status !== 409) {
      const detail = await res.text()
      console.error('Supabase waitlist insert error:', res.status, detail)
      return NextResponse.json({ debug: { status: res.status, body: detail } }, { status: 500 })
    }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({
    from: 'Pulse <no-reply@contact.pulsesphere.app>',
    to: email,
    subject: "You're on the Pulse waitlist!",
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;background:#050816;padding:40px 32px;border-radius:12px">
        <img src="https://company.pulsesphere.app/pulsesphere-logo.png" alt="PulseSphere" width="140" style="margin-bottom:28px" />
        <h1 style="color:#fff;font-size:22px;font-weight:800;margin:0 0 12px">You&rsquo;re on the list!</h1>
        <p style="color:#aaa;font-size:15px;line-height:1.6;margin:0 0 20px">
          Thanks for signing up — you&rsquo;ll be among the first to know when Pulse launches on iOS and Android.
        </p>
        <p style="color:#aaa;font-size:15px;line-height:1.6;margin:0 0 28px">
          Ask anything. Vote on everything. See exactly where you stand.
        </p>
        <p style="color:#555;font-size:12px;margin:0">
          &mdash; The Pulse team &bull; <a href="https://company.pulsesphere.app" style="color:#4a9eff">pulsesphere.app</a>
        </p>
      </div>
    `,
    text: `You're on the Pulse waitlist!\n\nThanks for signing up — you'll be among the first to know when Pulse launches on iOS and Android.\n\nAsk anything. Vote on everything. See exactly where you stand.\n\n— The Pulse team`,
  })

  await resend.emails.send({
    from: 'PulseSphere Waitlist <no-reply@contact.pulsesphere.app>',
    to: 'support@pulsesphere.app',
    subject: `[Waitlist] New signup: ${email}`,
    text: `New waitlist signup: ${email}`,
  })

  return NextResponse.json({ ok: true })
}
