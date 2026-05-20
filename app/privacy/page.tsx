import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — PulseSphere LLC',
  description: 'Privacy Policy for the Pulse app by PulseSphere LLC.',
}

const LAST_UPDATED = 'May 8, 2026'

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: '#050816', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-6 py-16 pb-24">

        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 text-white/40 hover:text-white/80 transition-colors">
          ← PulseSphere LLC
        </Link>

        <h1 className="text-3xl font-extrabold text-white mb-1">Pulse Privacy Policy</h1>
        <p className="text-sm mb-8" style={{ color: '#888' }}>Last updated: {LAST_UPDATED}</p>

        <p className="text-base leading-relaxed mb-2" style={{ color: '#aaa' }}>
          PulseSphere LLC (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the Pulse mobile and web application
          (the &ldquo;Service&rdquo;). This policy explains what data we collect, how we use it, and your rights.
        </p>

        <Section title="1. Information We Collect">
          <Item label="Account data">Email address, username, display name, and profile photo when you register.</Item>
          <Item label="Usage data">Polls you create or vote on, comments, follows, likes, and other in-app activity.</Item>
          <Item label="Device and log data">IP address, device type, operating system, app version, and crash reports collected automatically for stability and security purposes.</Item>
          <Item label="Location data">Approximate city-level location if you grant permission — used only to surface location-relevant polls. Exact GPS coordinates are never stored.</Item>
          <Item label="Push notification tokens">A device token issued by Apple or Google when you enable notifications. Used only to deliver notifications you have opted into.</Item>
          <Item label="OAuth sign-in data">If you sign in with Google or Apple, we receive your name and email from that provider. We do not receive your password.</Item>
        </Section>

        <Section title="2. How We Use Your Information">
          <Item label="Provide the Service">Create and display polls, record votes, and power social features.</Item>
          <Item label="Personalization">Show polls relevant to your interests and location.</Item>
          <Item label="Communications">Send transactional emails (account confirmation, password reset) and notifications you have opted into.</Item>
          <Item label="Safety and moderation">Detect spam, abuse, and violations of our Terms of Service.</Item>
          <Item label="Analytics">Understand aggregate usage patterns to improve the app. We use anonymised, aggregated data only.</Item>
        </Section>

        <Section title="3. Sharing Your Information">
          <p className="text-sm leading-relaxed mb-3" style={{ color: '#aaa' }}>
            We do not sell, rent, or trade your personal data. We share data only in these limited circumstances:
          </p>
          <Item label="Service providers">Supabase (database and authentication), Expo (app delivery), and analytics tools — each bound by data processing agreements.</Item>
          <Item label="Legal requirements">When required by law, court order, or to protect the safety of our users or the public.</Item>
          <Item label="Business transfers">In the event of a merger or acquisition, your data may transfer to the new entity under the same privacy protections.</Item>
        </Section>

        <Section title="4. Vote Privacy">
          <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
            Your individual vote choices on polls are private by default and are never displayed to other users.
            Only aggregate vote counts are shown publicly. You can enable &ldquo;Hide my votes&rdquo; in Settings → Privacy
            for an additional layer of protection.
          </p>
        </Section>

        <Section title="5. Data Retention">
          <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
            We retain your account data for as long as your account is active. If you delete your account, your
            personal data (email, votes, comments, posts) is permanently deleted within 30 days. Some anonymised,
            aggregated data may be retained for analytics.
          </p>
        </Section>

        <Section title="6. Security">
          <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
            All data is encrypted in transit using TLS. Passwords are never stored — authentication is handled by
            Supabase Auth using industry-standard hashing. We apply row-level security policies so users can only
            access data they are authorised to see.
          </p>
        </Section>

        <Section title="7. Children&rsquo;s Privacy">
          <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
            Pulse is not directed to children under 13. We do not knowingly collect personal information from
            children under 13. If you believe a child has provided us with personal data, contact us at{' '}
            <a href="mailto:privacy@pulsesphere.app" className="text-blue-400 hover:underline">privacy@pulsesphere.app</a>{' '}
            and we will delete it promptly.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <Item label="Access">Request a copy of the personal data we hold about you.</Item>
          <Item label="Correction">Ask us to correct inaccurate or incomplete data.</Item>
          <Item label="Deletion">Delete your account at any time via Settings → Account → Delete Account.</Item>
          <Item label="Portability">Request an export of your data in a machine-readable format.</Item>
          <Item label="Objection">Opt out of non-essential communications at any time in Settings → Notifications.</Item>
          <p className="text-sm leading-relaxed mt-3" style={{ color: '#aaa' }}>
            To exercise any of these rights, email us at{' '}
            <a href="mailto:privacy@pulsesphere.app" className="text-blue-400 hover:underline">privacy@pulsesphere.app</a>.
          </p>
        </Section>

        <Section title="9. Cookies and Tracking">
          <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
            Our mobile apps do not use cookies. The web version of Pulse uses only essential session cookies
            required for authentication. We do not use third-party advertising or tracking cookies.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
            We may update this policy from time to time. We will notify you of significant changes by posting a
            notice in the app or sending an email to your registered address. Continued use of the Service after
            changes constitutes your acceptance.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p className="text-sm leading-relaxed mb-2" style={{ color: '#aaa' }}>For any privacy-related questions or requests, contact us at:</p>
          <a href="mailto:privacy@pulsesphere.app" className="block text-base font-semibold text-blue-400 hover:underline mb-1">privacy@pulsesphere.app</a>
          <p className="text-sm" style={{ color: '#aaa' }}>PulseSphere LLC · Everett, Washington, USA</p>
        </Section>

        <p className="text-xs mt-12 text-center" style={{ color: '#555' }}>© 2026 PulseSphere LLC. All rights reserved.</p>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h2 className="text-base font-bold text-white mb-3">{title}</h2>
      {children}
    </div>
  )
}

function Item({ label, children }: { label: string; children: string }) {
  return (
    <div className="mb-3 pl-3" style={{ borderLeft: '2px solid rgba(200,131,42,0.25)' }}>
      <span className="text-sm font-bold" style={{ color: '#ddd' }}>{label}: </span>
      <span className="text-sm leading-relaxed" style={{ color: '#aaa' }}>{children}</span>
    </div>
  )
}
