import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Ancestre',
  description: 'Privacy Policy for the Ancestre app by PulseSphere LLC.',
}

const LAST_UPDATED = 'June 9, 2026'
const ACCENT = '#C8782A'

export default function AncestrePrivacyPage() {
  return (
    <div style={{ backgroundColor: '#0D0A08', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-6 py-16 pb-24">

        <Link href="/ancestre" className="inline-flex items-center gap-2 text-sm mb-10 text-white/40 hover:text-white/80 transition-colors">
          ← Ancestre
        </Link>

        <h1 className="text-3xl font-extrabold text-white mb-1">Ancestre Privacy Policy</h1>
        <p className="text-sm mb-8" style={{ color: '#888' }}>Last updated: {LAST_UPDATED}</p>

        <p className="text-base leading-relaxed mb-6" style={{ color: '#aaa' }}>
          PulseSphere LLC (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the Ancestre mobile application
          (the &ldquo;Service&rdquo;). This policy explains what data we collect, how we use it, and your rights.
          Ancestre is a family memory preservation platform — your family&rsquo;s stories are private, sensitive,
          and treated accordingly.
        </p>

        <Section title="1. Information We Collect" accent={ACCENT}>
          <Item label="Account data" accent={ACCENT}>Email address, display name, and profile photo when you register. If you sign in with Google or Apple, we receive your name and email from that provider — we never receive your password.</Item>
          <Item label="Voice recordings" accent={ACCENT}>Audio recordings you create within the app. These are stored securely and are only accessible to members of your family archive.</Item>
          <Item label="Story transcriptions" accent={ACCENT}>Text transcriptions automatically generated from your voice recordings. Transcription is powered by a third-party provider (see Section 3).</Item>
          <Item label="Family member profiles" accent={ACCENT}>Names, photos, dates, relationship labels, and other biographical details you enter for family members in your archive.</Item>
          <Item label="Usage data" accent={ACCENT}>Features you use, pages you visit, and in-app actions — collected for stability, security, and product improvement. We use anonymised, aggregated data only.</Item>
          <Item label="Device and log data" accent={ACCENT}>IP address, device type, operating system, app version, and crash reports collected automatically.</Item>
          <Item label="Push notification tokens" accent={ACCENT}>A device token issued by Apple or Google when you enable notifications. Used only to deliver notifications you have opted into.</Item>
        </Section>

        <Section title="2. How We Use Your Information" accent={ACCENT}>
          <Item label="Provide the Service" accent={ACCENT}>Store and surface your recordings, transcriptions, family profiles, and time capsules.</Item>
          <Item label="Transcription" accent={ACCENT}>Voice recordings are sent to a speech-to-text provider to generate transcripts. Recordings are not used to train external AI models.</Item>
          <Item label="Family sharing" accent={ACCENT}>Allow family members you invite to view, add to, and collaborate on your shared archive.</Item>
          <Item label="Communications" accent={ACCENT}>Send transactional emails (account confirmation, password reset, invite notifications) and push notifications you have opted into.</Item>
          <Item label="Safety and moderation" accent={ACCENT}>Detect abuse, fraud, and violations of our Terms of Service.</Item>
          <Item label="Product improvement" accent={ACCENT}>Understand aggregate usage patterns to improve the app. We never sell data or share individual activity with advertisers.</Item>
        </Section>

        <Section title="3. Service Providers We Use" accent={ACCENT}>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#aaa' }}>
            We share data with trusted third-party providers solely to operate the Service. Each provider is bound by a data processing agreement:
          </p>
          <Item label="Supabase" accent={ACCENT}>Database, authentication, file storage, and real-time features. Your recordings and family data are stored in Supabase-managed infrastructure.</Item>
          <Item label="Expo / EAS" accent={ACCENT}>App delivery, over-the-air updates, and push notification infrastructure.</Item>
          <Item label="OpenAI / speech-to-text provider" accent={ACCENT}>Audio transcription. Recordings are transmitted over TLS and are not retained by the provider beyond the transcription request.</Item>
          <Item label="Stripe" accent={ACCENT}>Payment processing for Professional plan subscriptions. We do not store your card details — Stripe handles all payment data.</Item>
          <p className="text-sm leading-relaxed mt-2" style={{ color: '#aaa' }}>
            We do not sell, rent, or trade your personal data to any third party for advertising or marketing purposes.
          </p>
        </Section>

        <Section title="4. Voice Recordings and Family Data" accent={ACCENT}>
          <p className="text-sm leading-relaxed mb-3" style={{ color: '#aaa' }}>
            Voice recordings and family member profiles are the most sensitive data in Ancestre. We handle them with extra care:
          </p>
          <Item label="Access control" accent={ACCENT}>Recordings are stored with row-level security. Only authenticated members of your family archive can access them.</Item>
          <Item label="No public sharing" accent={ACCENT}>Ancestre has no public feed. Your archive is never visible to users outside your family unless you explicitly share a link.</Item>
          <Item label="No advertising use" accent={ACCENT}>Your recordings and family stories are never used to train advertising models, sold to data brokers, or shared for any commercial purpose outside of operating the Service.</Item>
          <Item label="Professional accounts" accent={ACCENT}>If you use Ancestre Business, client recordings are only accessible to members of your professional workspace and the client&rsquo;s designated family members.</Item>
        </Section>

        <Section title="5. Data Retention" accent={ACCENT}>
          <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
            We retain your account data, recordings, and family archive for as long as your account is active.
            If you delete your account, your personal data — including all recordings, transcriptions, and family profiles —
            is permanently deleted within 30 days. Some anonymised, aggregated usage data may be retained for analytics.
            You can request deletion of your data at any time by contacting us at{' '}
            <a href="mailto:privacy@pulsesphere.app" className="hover:underline" style={{ color: '#4A9EFF' }}>privacy@pulsesphere.app</a>.
          </p>
        </Section>

        <Section title="6. Security" accent={ACCENT}>
          <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
            All data is encrypted in transit using TLS. Passwords are never stored — authentication is handled by
            Supabase Auth using industry-standard hashing. We apply row-level security policies so users can only
            access data they are authorised to see. Voice recordings are stored in access-controlled object storage
            with signed URLs.
          </p>
        </Section>

        <Section title="7. Children&rsquo;s Privacy" accent={ACCENT}>
          <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
            Ancestre is not directed to children under 13. We do not knowingly collect personal information from
            children under 13. Family member <em>profiles</em> may include details about children (e.g. a child&rsquo;s name
            in a family tree) entered by a parent or guardian — this is incidental biographical data entered by an adult
            account holder. If you believe a child has independently created an account, contact us at{' '}
            <a href="mailto:privacy@pulsesphere.app" className="hover:underline" style={{ color: '#4A9EFF' }}>privacy@pulsesphere.app</a>{' '}
            and we will delete it promptly.
          </p>
        </Section>

        <Section title="8. Your Rights" accent={ACCENT}>
          <Item label="Access" accent={ACCENT}>Request a copy of the personal data we hold about you.</Item>
          <Item label="Correction" accent={ACCENT}>Ask us to correct inaccurate or incomplete data.</Item>
          <Item label="Deletion" accent={ACCENT}>Delete your account and all associated data via Settings → Account → Delete Account, or by emailing us.</Item>
          <Item label="Portability" accent={ACCENT}>Request an export of your recordings and transcriptions.</Item>
          <Item label="Objection" accent={ACCENT}>Opt out of non-essential communications at any time in Settings → Notifications.</Item>
          <p className="text-sm leading-relaxed mt-3" style={{ color: '#aaa' }}>
            To exercise any of these rights, email us at{' '}
            <a href="mailto:privacy@pulsesphere.app" className="hover:underline" style={{ color: '#4A9EFF' }}>privacy@pulsesphere.app</a>.
          </p>
        </Section>

        <Section title="9. Cookies and Tracking" accent={ACCENT}>
          <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
            The Ancestre mobile app does not use cookies. We do not use third-party advertising or behavioural tracking.
            Any future web version of Ancestre will use only essential session cookies required for authentication.
          </p>
        </Section>

        <Section title="10. Changes to This Policy" accent={ACCENT}>
          <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
            We may update this policy from time to time. We will notify you of significant changes by posting a
            notice in the app or sending an email to your registered address. Continued use of the Service after
            changes constitutes your acceptance.
          </p>
        </Section>

        <Section title="11. Contact Us" accent={ACCENT}>
          <p className="text-sm leading-relaxed mb-2" style={{ color: '#aaa' }}>For any privacy-related questions or requests, contact us at:</p>
          <a href="mailto:privacy@pulsesphere.app" className="block text-base font-semibold hover:underline mb-1" style={{ color: '#4A9EFF' }}>
            privacy@pulsesphere.app
          </a>
          <p className="text-sm" style={{ color: '#aaa' }}>PulseSphere LLC · Everett, Washington, USA</p>
        </Section>

        <p className="text-xs mt-12 text-center" style={{ color: '#555' }}>© 2026 PulseSphere LLC. All rights reserved.</p>
      </div>
    </div>
  )
}

function Section({ title, children, accent }: { title: string; children: React.ReactNode; accent: string }) {
  return (
    <div className="mt-8">
      <h2 className="text-base font-bold text-white mb-3" style={{ borderLeft: `3px solid ${accent}`, paddingLeft: '10px' }}>{title}</h2>
      {children}
    </div>
  )
}

function Item({ label, children, accent }: { label: string; children: string; accent: string }) {
  return (
    <div className="mb-3 pl-3" style={{ borderLeft: `2px solid ${accent}40` }}>
      <span className="text-sm font-bold" style={{ color: '#ddd' }}>{label}: </span>
      <span className="text-sm leading-relaxed" style={{ color: '#aaa' }}>{children}</span>
    </div>
  )
}
