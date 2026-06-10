import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — Ancestre',
  description: 'Terms of Service for the Ancestre app by PulseSphere LLC.',
}

const LAST_UPDATED = 'June 9, 2026'
const ACCENT = '#C8782A'

export default function AncestreTermsPage() {
  return (
    <div style={{ backgroundColor: '#0D0A08', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-6 py-16 pb-24">

        <Link href="/ancestre" className="inline-flex items-center gap-2 text-sm mb-10 text-white/40 hover:text-white/80 transition-colors">
          ← Ancestre
        </Link>

        <h1 className="text-3xl font-extrabold text-white mb-1">Ancestre Terms of Service</h1>
        <p className="text-sm mb-8" style={{ color: '#888' }}>Last updated: {LAST_UPDATED}</p>

        <p className="text-base leading-relaxed mb-3" style={{ color: '#aaa' }}>
          PulseSphere LLC (&ldquo;Ancestre,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), a company registered in Everett, Washington, USA,
          operates the Ancestre mobile application and related services (&ldquo;Services&rdquo;).
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of Ancestre.
        </p>
        <p className="text-base leading-relaxed mb-2" style={{ color: '#aaa' }}>
          By creating an account or using Ancestre, you agree to these Terms. Please read them carefully.
          If you do not agree, do not use the Services.
        </p>

        <Section title="1. Who Can Use Ancestre" accent={ACCENT}>
          <Item label="Age Requirement" accent={ACCENT}>You must be at least 13 years old to create an account and use Ancestre. If you are under 18, you confirm that a parent or legal guardian has reviewed and agreed to these Terms on your behalf.</Item>
          <Item label="Account Accuracy" accent={ACCENT}>You agree to provide accurate, complete information when creating your account. You may not impersonate another person or create an account on behalf of someone else without their permission.</Item>
          <Item label="One Account Per Person" accent={ACCENT}>You may only hold one active personal account. Creating multiple accounts to evade a suspension will result in permanent removal.</Item>
        </Section>

        <Section title="2. Your Content" accent={ACCENT}>
          <Item label="What You Own" accent={ACCENT}>You retain full ownership of all voice recordings, transcriptions, family profiles, photos, and other content you create in Ancestre (&ldquo;Your Content&rdquo;). We claim no ownership over your family&rsquo;s stories.</Item>
          <Item label="Licence to Operate" accent={ACCENT}>By storing content in Ancestre, you grant PulseSphere LLC a limited, non-exclusive licence to host, store, process, and transmit Your Content solely to provide and improve the Services. This licence is revoked when you delete the content or your account.</Item>
          <Item label="Responsibility" accent={ACCENT}>You are responsible for the content you record and store. You agree not to record content that is illegal, that violates the rights of others, or that you do not have permission to record.</Item>
          <Item label="Recording Consent" accent={ACCENT}>You are responsible for obtaining the consent of any person you record before making a recording. Laws on recording consent vary by jurisdiction. By using the recording feature, you confirm you have complied with applicable consent requirements.</Item>
        </Section>

        <Section title="3. Family Archive & Sharing" accent={ACCENT}>
          <Item label="Invitations" accent={ACCENT}>You may invite family members to join your archive. Invited members can view, contribute to, and interact with your archive according to the role you assign them.</Item>
          <Item label="Professional Accounts" accent={ACCENT}>Ancestre Business users may create client archives on behalf of individuals. You are responsible for obtaining appropriate consent from clients before creating and storing their recordings.</Item>
          <Item label="Archive Ownership" accent={ACCENT}>The account holder who creates a family archive is considered its owner. In the event of account deletion, archive data is retained for 14 days to allow transfer to another family member — contact us at support@pulsesphere.app to request a transfer before deletion.</Item>
        </Section>

        <Section title="4. Subscriptions and Payments" accent={ACCENT}>
          <Item label="Free Plan" accent={ACCENT}>Ancestre offers a free personal plan with a limited number of recordings and family member profiles. Free plan limits are displayed within the app.</Item>
          <Item label="Paid Plans" accent={ACCENT}>Professional and expanded personal plans are available by subscription. Subscription fees are charged in advance on a monthly or annual basis via Stripe.</Item>
          <Item label="Cancellation" accent={ACCENT}>You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. We do not offer partial-period refunds unless required by law.</Item>
          <Item label="Refunds" accent={ACCENT}>If you believe you have been charged in error, contact support@pulsesphere.app within 14 days of the charge.</Item>
        </Section>

        <Section title="5. Prohibited Conduct" accent={ACCENT}>
          <p className="text-sm leading-relaxed mb-3" style={{ color: '#aaa' }}>You agree not to:</p>
          <Item label="Illegal recordings" accent={ACCENT}>Record individuals without their knowledge or consent in jurisdictions where two-party consent is required.</Item>
          <Item label="Abuse" accent={ACCENT}>Use the platform to harass, threaten, or harm others.</Item>
          <Item label="Impersonation" accent={ACCENT}>Create family member profiles or recordings intended to deceive or impersonate real individuals for fraudulent purposes.</Item>
          <Item label="Reverse engineering" accent={ACCENT}>Attempt to extract, copy, or reverse-engineer any part of the Ancestre platform, including its AI models, audio infrastructure, or backend APIs.</Item>
          <Item label="Automated access" accent={ACCENT}>Use bots, scripts, or automated tools to access or interact with the Services without our written consent.</Item>
        </Section>

        <Section title="6. Privacy" accent={ACCENT}>
          <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
            Your use of Ancestre is also governed by our{' '}
            <Link href="/ancestre/privacy" className="hover:underline" style={{ color: '#4A9EFF' }}>Privacy Policy</Link>,
            which is incorporated into these Terms by reference. By using Ancestre, you agree to the collection
            and use of your data as described in the Privacy Policy.
          </p>
        </Section>

        <Section title="7. Intellectual Property" accent={ACCENT}>
          <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
            All rights, title, and interest in the Ancestre application — including its design, features, AI interview
            system, and underlying software — are owned by PulseSphere LLC or its licensors. Your family&rsquo;s content
            is yours; the platform is ours. You may not copy, modify, distribute, or reverse-engineer any part of
            the Service without our prior written consent.
          </p>
        </Section>

        <Section title="8. Account Suspension & Termination" accent={ACCENT}>
          <Item label="By Us" accent={ACCENT}>We may suspend or terminate your account if you violate these Terms, engage in harmful behaviour, or if we are required to do so by law. We will notify you unless doing so would compromise an investigation or is prohibited by law.</Item>
          <Item label="By You" accent={ACCENT}>You may delete your account at any time via Settings → Account → Delete Account. Upon deletion, your personal data and recordings are permanently removed from our servers within 30 days in accordance with our Privacy Policy.</Item>
        </Section>

        <Section title="9. Disclaimers & Limitation of Liability" accent={ACCENT}>
          <Item label="No Warranties" accent={ACCENT}>Ancestre is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied, including fitness for a particular purpose or non-infringement.</Item>
          <Item label="Data Loss" accent={ACCENT}>While we take reasonable steps to protect your data, we cannot guarantee against data loss. We strongly encourage you to keep personal backups of recordings that are irreplaceable.</Item>
          <Item label="Limitation of Liability" accent={ACCENT}>To the maximum extent permitted by applicable law, PulseSphere LLC and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service, including but not limited to loss of recordings, loss of data, or loss of goodwill.</Item>
        </Section>

        <Section title="10. Disputes" accent={ACCENT}>
          <Item label="Governing Law" accent={ACCENT}>These Terms are governed by the laws of the State of Washington, USA, without regard to conflict of law principles.</Item>
          <Item label="Informal Resolution" accent={ACCENT}>Before filing any legal claim, you agree to first contact us at legal@pulsesphere.app and attempt to resolve the dispute informally for at least 30 days.</Item>
        </Section>

        <Section title="11. Changes to These Terms" accent={ACCENT}>
          <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
            We may update these Terms from time to time. If we make material changes, we will notify you via
            in-app notification or email before the changes take effect. Your continued use of Ancestre after
            changes take effect constitutes acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="12. Contact Us" accent={ACCENT}>
          <p className="text-sm leading-relaxed mb-3" style={{ color: '#aaa' }}>PulseSphere LLC · Everett, WA, USA</p>
          <a href="mailto:legal@pulsesphere.app" className="block text-base font-semibold hover:underline mb-1" style={{ color: '#4A9EFF' }}>
            legal@pulsesphere.app
          </a>
          <a href="mailto:support@pulsesphere.app" className="block text-base font-semibold hover:underline" style={{ color: '#4A9EFF' }}>
            support@pulsesphere.app
          </a>
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
