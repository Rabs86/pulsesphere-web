import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Ancestre',
  description: 'Privacy Policy for the Ancestre app by PulseSphere LLC.',
}

const LAST_UPDATED = 'June 8, 2026'

// Ancestre warm amber/sepia palette
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

export default function AncestrePrivacyPage() {
  return (
    <div style={{ backgroundColor: A.bg, minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-6 py-16 pb-24">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
          style={{ color: A.dim }}
          onMouseOver={e => (e.currentTarget.style.color = A.textSub)}
          onMouseOut={e => (e.currentTarget.style.color = A.dim)}
        >
          ← PulseSphere LLC
        </Link>

        {/* Header */}
        <div className="flex items-center gap-3 mb-1">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: A.surface, border: `1px solid ${A.borderLight}` }}
          >
            <span style={{ fontSize: 18 }}>🌿</span>
          </div>
          <h1 className="text-3xl font-extrabold" style={{ color: A.text }}>
            Ancestre Privacy Policy
          </h1>
        </div>
        <p className="text-sm mb-8" style={{ color: A.dim }}>Last updated: {LAST_UPDATED}</p>

        <p className="text-base leading-relaxed mb-2" style={{ color: A.textSub }}>
          PulseSphere LLC (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the Ancestre mobile application
          (the &ldquo;Service&rdquo;). Ancestre helps families record, preserve, and share the life stories of their loved ones.
          This policy explains what data we collect, how we use it, and your rights as a user.
        </p>

        <Section title="1. Information We Collect">
          <Item label="Account data">Your email address, display name, and optional profile photo when you create an account.</Item>
          <Item label="Family member data">Names, birth and death years, relationships, biographical notes, and profile photos of family members you add to your archive. This data is entered by you and stored on your behalf.</Item>
          <Item label="Audio recordings">Voice recordings you make within the app (stories and interview sessions). These are uploaded to secure cloud storage and may be processed for transcription.</Item>
          <Item label="Photos">Images you upload to associate with stories or family member profiles.</Item>
          <Item label="Story content">Transcripts, summaries, themes, decades, and locations you attach to stories. Transcripts are generated automatically from your recordings using AI processing.</Item>
          <Item label="Time capsules">Messages and story collections you schedule for future delivery, including recipient information you provide.</Item>
          <Item label="Professional account data">If you use Ancestre in a professional capacity (e.g. as a funeral home or care provider), we store client names, service dates, case notes, and contact information you enter. This data is subject to the same protections as personal data.</Item>
          <Item label="Payment data">Billing information for paid subscriptions is processed directly by Stripe. We do not store your full card number. We retain your Stripe customer ID, subscription status, and billing interval.</Item>
          <Item label="Push notification tokens">A device token issued by Apple or Google when you enable notifications. Used only to deliver notifications you have opted into.</Item>
          <Item label="OAuth sign-in data">If you sign in with Apple or Google, we receive your name and email from that provider. We do not receive your password.</Item>
          <Item label="Device and log data">IP address, device type, operating system, app version, and crash reports collected automatically for stability and security purposes.</Item>
        </Section>

        <Section title="2. How We Use Your Information">
          <Item label="Provide the Service">Store and display your family archive, process audio recordings, generate transcriptions, and power all in-app features.</Item>
          <Item label="AI transcription and summarisation">Audio recordings are sent to an AI processing service to generate text transcripts and story summaries. Processed audio is used solely for this purpose and is not used to train AI models.</Item>
          <Item label="Notifications">Send you reminders, story delivery notifications, invitation alerts, and time capsule deliveries you have opted into.</Item>
          <Item label="Billing">Process subscription payments and manage your plan status via Stripe.</Item>
          <Item label="Safety and integrity">Detect abuse, spam, and violations of our Terms of Service.</Item>
          <Item label="Service improvement">Understand aggregate, anonymised usage patterns to improve app performance and features. We do not sell or share individual usage data for advertising purposes.</Item>
        </Section>

        <Section title="3. How We Share Your Information">
          <p className="text-sm leading-relaxed mb-3" style={{ color: A.textSub }}>
            We do not sell your personal data. We share data only in these limited circumstances:
          </p>
          <Item label="Family members you invite">When you invite someone to join your family archive, they gain access to stories and family member data according to the role you assign (viewer, member, or admin).</Item>
          <Item label="Professional connections">If you are a family using Ancestre and you accept a connection from a professional account (e.g. a funeral home), that professional may be able to view stories or records you explicitly share with them.</Item>
          <Item label="Service providers">We use Supabase (database, authentication, and file storage), Stripe (payments), Resend (transactional email), Expo (app delivery and over-the-air updates), and an AI transcription service. Each provider is bound by a data processing agreement.</Item>
          <Item label="Legal requirements">When required by applicable law, court order, or to protect the safety of our users or the public.</Item>
          <Item label="Business transfers">In the event of a merger, acquisition, or asset sale, your data may transfer to the successor entity under the same privacy protections.</Item>
        </Section>

        <Section title="4. Audio Recordings and Encryption">
          <p className="text-sm leading-relaxed mb-3" style={{ color: A.textSub }}>
            Audio recordings are a core part of Ancestre. We take their privacy seriously:
          </p>
          <Item label="Transmission security">All audio is transmitted over TLS-encrypted connections. Audio files are stored in access-controlled cloud storage and are not publicly accessible.</Item>
          <Item label="Transcription">Recordings flagged for transcription are sent to an AI service solely to generate a text transcript. The transcript is stored in your archive. Raw audio used for transcription is processed transiently and is not retained by the AI provider beyond the processing request.</Item>
          <Item label="Privacy setting">Stories can be set to &ldquo;Owner Only&rdquo; or &ldquo;Family&rdquo; visibility. Owner Only stories are not accessible to other family members.</Item>
        </Section>

        <Section title="5. Permissions We Request">
          <Item label="Microphone">Required to record audio stories and interview sessions. We access the microphone only while you are actively recording.</Item>
          <Item label="Camera / Photo Library">Required to upload photos to stories or family member profiles. We access the camera or photo library only when you explicitly initiate a photo upload.</Item>
          <Item label="Push Notifications">Optional. Used to notify you of new stories, invitations, time capsule deliveries, and reminders. You can revoke this permission at any time in your device settings.</Item>
        </Section>

        <Section title="6. Data Retention">
          <p className="text-sm leading-relaxed" style={{ color: A.textSub }}>
            We retain your account data, family archive, and recordings for as long as your account is active.
            If you delete your account, your personal data — including all audio recordings, photos, family
            member profiles, and stories — is permanently deleted within 30 days. Aggregate, anonymised
            analytics data may be retained beyond this period. Subscription billing records are retained as
            required by applicable financial regulations.
          </p>
        </Section>

        <Section title="7. Security">
          <p className="text-sm leading-relaxed" style={{ color: A.textSub }}>
            All data is encrypted in transit using TLS. Authentication is handled by Supabase Auth using
            industry-standard practices — passwords are hashed and never stored in plain text. We apply
            row-level security policies in our database so users can only access data they are authorised
            to see. Audio files and photos are stored in access-controlled buckets that are not publicly
            accessible by default.
          </p>
        </Section>

        <Section title="8. Children&rsquo;s Privacy">
          <p className="text-sm leading-relaxed" style={{ color: A.textSub }}>
            Ancestre is not directed to children under 13. Users must be at least 13 years old to create
            an account. Family member profiles for minors may be created by a parent or guardian within
            a family archive. We do not knowingly collect personal information directly from children
            under 13. If you believe a child under 13 has created an account independently, contact us
            at{' '}
            <a href="mailto:privacy@pulsesphere.app" style={{ color: A.accent }}>privacy@pulsesphere.app</a>
            {' '}and we will delete it promptly.
          </p>
        </Section>

        <Section title="9. Your Rights">
          <Item label="Access">Request a copy of the personal data we hold about you.</Item>
          <Item label="Correction">Ask us to correct inaccurate or incomplete data.</Item>
          <Item label="Deletion">Delete your account and all associated data at any time via Settings → Account → Delete Account.</Item>
          <Item label="Data portability">Request an export of your archive data in a machine-readable format.</Item>
          <Item label="Withdraw consent">Revoke microphone, camera, or notification permissions at any time in your device Settings.</Item>
          <Item label="Opt out of notifications">Adjust notification preferences at any time in Settings → Notifications.</Item>
          <p className="text-sm leading-relaxed mt-3" style={{ color: A.textSub }}>
            To exercise any of these rights, email us at{' '}
            <a href="mailto:privacy@pulsesphere.app" style={{ color: A.accent }}>privacy@pulsesphere.app</a>.
            We will respond within 30 days.
          </p>
        </Section>

        <Section title="10. California Residents (CCPA)">
          <p className="text-sm leading-relaxed" style={{ color: A.textSub }}>
            California residents have the right to know what personal information we collect, to request
            deletion, and to opt out of the sale of personal information. We do not sell personal
            information. To submit a request, email{' '}
            <a href="mailto:privacy@pulsesphere.app" style={{ color: A.accent }}>privacy@pulsesphere.app</a>
            {' '}with &ldquo;CCPA Request&rdquo; in the subject line.
          </p>
        </Section>

        <Section title="11. International Data Transfers">
          <p className="text-sm leading-relaxed" style={{ color: A.textSub }}>
            Ancestre is operated from the United States. If you access the Service from outside the United
            States, your data will be transferred to and processed in the United States. By using the
            Service, you consent to this transfer. We take reasonable steps to ensure your data is
            protected in accordance with this policy regardless of where it is processed.
          </p>
        </Section>

        <Section title="12. Changes to This Policy">
          <p className="text-sm leading-relaxed" style={{ color: A.textSub }}>
            We may update this policy from time to time. We will notify you of material changes by
            posting a notice in the app or sending an email to your registered address. The &ldquo;Last
            updated&rdquo; date at the top of this page reflects the most recent revision. Continued use of the
            Service after changes constitutes your acceptance of the updated policy.
          </p>
        </Section>

        <Section title="13. Contact Us">
          <p className="text-sm leading-relaxed mb-3" style={{ color: A.textSub }}>
            For any privacy-related questions, data requests, or concerns, contact us at:
          </p>
          <a href="mailto:privacy@pulsesphere.app" className="block text-base font-semibold mb-1" style={{ color: A.accent }}>
            privacy@pulsesphere.app
          </a>
          <p className="text-sm" style={{ color: A.dim }}>PulseSphere LLC · Everett, Washington, USA</p>
        </Section>

        <p className="text-xs mt-12 text-center" style={{ color: A.dim }}>© 2026 PulseSphere LLC. All rights reserved.</p>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h2 className="text-base font-bold mb-3" style={{ color: A.accentLight }}>{title}</h2>
      {children}
    </div>
  )
}

function Item({ label, children }: { label: string; children: string }) {
  return (
    <div className="mb-3 pl-3" style={{ borderLeft: `2px solid ${A.accent}44` }}>
      <span className="text-sm font-bold" style={{ color: A.text }}>{label}: </span>
      <span className="text-sm leading-relaxed" style={{ color: A.textSub }}>{children}</span>
    </div>
  )
}
