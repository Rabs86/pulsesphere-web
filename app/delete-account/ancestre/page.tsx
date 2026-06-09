import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Delete Account — Ancestre',
  description: 'How to delete your Ancestre account and all associated data.',
}

const A = {
  bg: '#0F0B06',
  surface: '#251C12',
  border: '#2A1E12',
  borderLight: '#3A2A18',
  accent: '#C8832A',
  accentLight: '#E8A84A',
  text: '#F0E4CC',
  textSub: '#9A7040',
  dim: '#8A6030',
}

export default function AncestreDeleteAccountPage() {
  return (
    <div style={{ backgroundColor: A.bg, minHeight: '100vh' }}>
      <div className="max-w-2xl mx-auto px-6 py-16 pb-24">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
          style={{ color: A.dim }}
        >
          ← PulseSphere LLC
        </Link>

        <div className="flex items-center gap-3 mb-1">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: A.surface, border: `1px solid ${A.borderLight}` }}
          >
            <span style={{ fontSize: 18 }}>🌿</span>
          </div>
          <h1 className="text-3xl font-extrabold" style={{ color: A.text }}>
            Delete Your Ancestre Account
          </h1>
        </div>
        <p className="text-sm mb-10" style={{ color: A.dim }}>Ancestre · PulseSphere LLC</p>

        <p className="text-base leading-relaxed mb-8" style={{ color: A.textSub }}>
          You can delete your Ancestre account at any time. Deleting your account permanently
          removes all of your personal data — including your family archive, audio recordings,
          photos, stories, and profile — within 30 days.
        </p>

        {/* Option 1 — In-app */}
        <div
          className="rounded-xl p-6 mb-6"
          style={{ backgroundColor: A.surface, border: `1px solid ${A.borderLight}` }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span style={{ fontSize: 20 }}>📱</span>
            <h2 className="text-base font-bold" style={{ color: A.accentLight }}>
              Option 1 — Delete in the app (recommended)
            </h2>
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: A.textSub }}>
            The fastest way to delete your account is directly inside the Ancestre app:
          </p>
          <ol className="flex flex-col gap-2">
            {[
              'Open Ancestre on your device',
              'Tap Profile → Settings',
              'Tap Account',
              'Tap Delete Account',
              'Confirm deletion when prompted',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5"
                  style={{ backgroundColor: A.accent + '33', color: A.accent }}
                >
                  {i + 1}
                </span>
                <span className="text-sm" style={{ color: A.text }}>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Option 2 — Email */}
        <div
          className="rounded-xl p-6 mb-10"
          style={{ backgroundColor: A.surface, border: `1px solid ${A.borderLight}` }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span style={{ fontSize: 20 }}>✉️</span>
            <h2 className="text-base font-bold" style={{ color: A.accentLight }}>
              Option 2 — Request by email
            </h2>
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: A.textSub }}>
            If you no longer have access to the app, email us from the address associated
            with your account and we will delete it within 30 days.
          </p>
          <a
            href="mailto:privacy@pulsesphere.app?subject=Account%20Deletion%20Request%20%E2%80%94%20Ancestre"
            className="inline-flex items-center gap-2 text-base font-semibold"
            style={{ color: A.accent }}
          >
            privacy@pulsesphere.app
          </a>
          <p className="text-xs mt-2" style={{ color: A.dim }}>
            Use subject line: <span style={{ color: A.textSub }}>Account Deletion Request — Ancestre</span>
          </p>
        </div>

        {/* What gets deleted */}
        <h2 className="text-base font-bold mb-4" style={{ color: A.accentLight }}>
          What gets deleted
        </h2>
        <div className="flex flex-col gap-2 mb-10">
          {[
            'Your profile and account credentials',
            'All audio recordings and transcripts',
            'All photos and story content',
            'Family member profiles you created',
            'Time capsules (unsent capsules are cancelled)',
            'Subscription and notification preferences',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: A.accent }} />
              <span className="text-sm" style={{ color: A.textSub }}>{item}</span>
            </div>
          ))}
        </div>

        <p className="text-xs" style={{ color: A.dim }}>
          Subscription billing records may be retained as required by applicable financial
          regulations. Aggregate anonymised analytics data may also be retained. For questions,
          contact{' '}
          <a href="mailto:privacy@pulsesphere.app" style={{ color: A.accent }}>
            privacy@pulsesphere.app
          </a>.
        </p>

        <p className="text-xs mt-12 text-center" style={{ color: A.dim }}>
          © 2026 PulseSphere LLC. All rights reserved.
        </p>
      </div>
    </div>
  )
}
