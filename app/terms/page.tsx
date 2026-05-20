import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — PulseSphere LLC',
  description: 'Terms of Service for the Pulse app by PulseSphere LLC.',
}

const LAST_UPDATED = 'May 5, 2026'

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: '#050816', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-6 py-16 pb-24">

        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 text-white/40 hover:text-white/80 transition-colors">
          ← PulseSphere LLC
        </Link>

        <h1 className="text-3xl font-extrabold text-white mb-1">Pulse Terms of Service</h1>
        <p className="text-sm mb-8" style={{ color: '#888' }}>Last updated: {LAST_UPDATED}</p>

        <p className="text-base leading-relaxed mb-2" style={{ color: '#aaa' }}>
          PulseSphere LLC (&ldquo;Pulse,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), a company registered in Everett, Washington, USA,
          operates a social polling and opinion platform. These Terms of Service (&ldquo;Terms&rdquo;) govern your use
          of the Pulse mobile app, website, and any related services (&ldquo;Services&rdquo;).
        </p>
        <p className="text-base leading-relaxed mb-2" style={{ color: '#aaa' }}>
          By creating an account or using Pulse, you agree to these Terms. Please read them carefully.
          If you do not agree, do not use the Services.
        </p>

        <Section title="1. Who Can Use Pulse">
          <Item label="A. Age Requirement">You must be at least 13 years old to use Pulse. If you are under 18, you confirm that a parent or legal guardian has reviewed and agreed to these Terms on your behalf.</Item>
          <Item label="B. Account Accuracy">You agree to provide accurate, complete information when creating your account. You may not impersonate another person, use a false identity, or create an account on behalf of someone else without their permission.</Item>
          <Item label="C. One Account Per Person">You may only hold one active account. Creating multiple accounts to evade a suspension or manipulate vote counts will result in permanent removal.</Item>
        </Section>

        <Section title="2. Your Content &amp; Conduct">
          <Item label="A. What You Own">You retain ownership of the poll questions, comments, and other content you create on Pulse (&ldquo;Your Content&rdquo;). By posting, you grant PulseSphere LLC a non-exclusive, royalty-free, worldwide licence to display, distribute, and promote Your Content within the app and in marketing materials. This licence ends when you delete the content or your account, except where the content has been shared with others who have not deleted it.</Item>
          <Item label="B. Content Standards">You agree not to post content that is illegal, harmful, threatening, abusive, harassing, defamatory, obscene, or that violates the rights of others.</Item>
          <Item label="C. Vote Integrity">Each user is entitled to one vote per question. Using bots, scripts, or coordinated networks to manipulate vote counts is strictly prohibited and will result in immediate account termination.</Item>
          <Item label="D. Reporting">You can report content or users that violate these Terms using the in-app report feature. We review all reports and take action where warranted, including content removal, warnings, suspensions, and permanent bans.</Item>
        </Section>

        <Section title="3. Permissions You Give Us">
          <Item label="A. Aggregate Data">We may use anonymised, aggregated data derived from user activity to improve the service, generate statistics, and for research purposes.</Item>
          <Item label="B. Feedback">If you submit feedback, ideas, or suggestions, you agree that we may use them without compensation or obligation to you.</Item>
        </Section>

        <Section title="4. Our Services">
          <Item label="A. What We Provide">Pulse provides a platform for creating and participating in polls, following other users, direct messaging, and discovering trending opinions. We strive for high availability but do not guarantee the service will be uninterrupted or error-free.</Item>
          <Item label="B. Service Changes">We may modify, suspend, or discontinue any part of the service at any time. We will provide reasonable notice of material changes where possible.</Item>
        </Section>

        <Section title="5. Privacy">
          <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
            Your use of Pulse is also governed by our{' '}
            <Link href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>,
            which is incorporated into these Terms by reference. By using Pulse, you agree to the collection
            and use of your data as described in the Privacy Policy.
          </p>
        </Section>

        <Section title="6. Intellectual Property">
          <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
            All rights, title, and interest in and to the Pulse app — including its design, logos, features,
            and underlying software — are owned by PulseSphere LLC or its licensors. You may not copy, modify,
            distribute, sell, or reverse-engineer any part of the service without our prior written consent.
          </p>
        </Section>

        <Section title="7. Account Suspension &amp; Termination">
          <Item label="A. By Us">We may suspend or permanently terminate your account at any time if you violate these Terms, engage in harmful behaviour, or if we are required to do so by law. We will notify you unless doing so would compromise an investigation or is prohibited by law.</Item>
          <Item label="B. By You">You may delete your account at any time via Settings → Account → Delete Account. Upon deletion, your personal data is permanently removed from our servers within 30 days in accordance with our Privacy Policy.</Item>
        </Section>

        <Section title="8. Disclaimers &amp; Limitation of Liability">
          <Item label="A. No Warranties">Pulse is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied, including fitness for a particular purpose or non-infringement.</Item>
          <Item label="B. Limitation of Liability">To the maximum extent permitted by applicable law, PulseSphere LLC and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service, including but not limited to loss of data, loss of profits, or loss of goodwill.</Item>
          <Item label="C. User-Generated Content">PulseSphere LLC is not responsible for the accuracy or legality of content created by users. Opinions expressed in polls and comments are those of individual users and do not represent the views of PulseSphere LLC.</Item>
        </Section>

        <Section title="9. Disputes">
          <Item label="A. Governing Law">These Terms are governed by the laws of the State of Washington, USA, without regard to conflict of law principles.</Item>
          <Item label="B. Informal Resolution">Before filing any legal claim, you agree to first contact us at legal@pulsesphere.app and attempt to resolve the dispute informally for at least 30 days.</Item>
        </Section>

        <Section title="10. Changes to These Terms">
          <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
            We may update these Terms from time to time. If we make material changes, we will notify you via
            in-app notification or a prominent notice before the changes take effect. Your continued use of
            Pulse after changes take effect constitutes acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p className="text-sm leading-relaxed mb-3" style={{ color: '#aaa' }}>PulseSphere LLC · Everett, WA, USA</p>
          <a href="mailto:legal@pulsesphere.app" className="block text-base font-semibold text-blue-400 hover:underline mb-1">legal@pulsesphere.app</a>
          <a href="mailto:support@pulsesphere.app" className="block text-base font-semibold text-blue-400 hover:underline">support@pulsesphere.app</a>
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
