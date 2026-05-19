// ── PulseSphere LLC Company Website ──
import Image from 'next/image'

function GlowDivider() {
  return (
    <div className="relative w-full h-px">
      <div className="absolute inset-0 bg-line" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-72"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(74,158,255,0.45) 50%, transparent)',
        }}
      />
    </div>
  )
}

function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-line backdrop-blur-md"
      style={{ backgroundColor: 'rgba(5,8,22,0.92)' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/pulsesphere-logo.png"
            alt="PulseSphere LLC"
            width={140}
            height={56}
            style={{ objectFit: 'contain', objectPosition: 'left center' }}
            priority
          />
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Product', 'Mission', 'Team', 'Company', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-dim hover:text-white transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="https://pulsesphere.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-colors"
        >
          Try Pulse →
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ backgroundColor: '#050816' }}
    >
      {/* Atmospheric bloom — centred left of headline, not a divider, just ambient light */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 28% 52%, rgba(74,158,255,0.06) 0%, transparent 100%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-accent text-sm font-medium">Available on iOS &amp; Android</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-4 max-w-3xl">
          Vote on anything.{' '}
          <span className="text-accent">See what the world thinks.</span>
          {' '}Instantly.
        </h1>

        <p className="text-2xl md:text-3xl font-light text-white/60 mb-8 tracking-tight">
          Where opinions become identity.
        </p>

        <p className="text-xl text-dim leading-relaxed mb-10 max-w-2xl">
          PulseSphere LLC is building the platform where ideas become data and voices become
          trends. Pulse gives everyone a real-time window into what the world is thinking.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#product"
            className="bg-accent text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-500 transition-colors"
          >
            Explore the Product
          </a>
          <a
            href="#contact"
            className="border border-line text-white px-8 py-4 rounded-xl font-bold text-base hover:border-accent/50 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Store download buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          {/* Apple App Store — replace href when live */}
          <a
            href="#"
            aria-label="Download on the App Store (coming soon)"
            className="flex items-center gap-3 bg-white/5 border border-white/15 hover:border-accent/40 hover:bg-white/8 transition-all rounded-xl px-5 py-3 group cursor-not-allowed"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div>
              <div className="text-white/50 text-[10px] leading-none mb-0.5 uppercase tracking-wide">Coming Soon</div>
              <div className="text-white font-semibold text-sm leading-none">App Store</div>
            </div>
          </a>

          {/* Google Play — replace href when live */}
          <a
            href="#"
            aria-label="Get it on Google Play (coming soon)"
            className="flex items-center gap-3 bg-white/5 border border-white/15 hover:border-accent/40 hover:bg-white/8 transition-all rounded-xl px-5 py-3 group cursor-not-allowed"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.18 23.76c.3.17.64.24.99.2l12.3-7.1-2.68-2.68-10.61 9.58zM.5 1.26C.19 1.6 0 2.12 0 2.79v18.42c0 .67.19 1.19.51 1.52l.08.08 10.32-10.32v-.24L.58 1.18.5 1.26zM20.49 10.37l-2.9-1.67-3.01 3.01 3.01 3.01 2.92-1.68c.83-.48.83-1.26-.02-1.67zM3.18.24l12.41 7.16-2.68 2.68L2.19.17c.32-.23.69-.1.99.07z"/>
            </svg>
            <div>
              <div className="text-white/50 text-[10px] leading-none mb-0.5 uppercase tracking-wide">Coming Soon</div>
              <div className="text-white font-semibold text-sm leading-none">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const items = [
    { label: 'Platforms', value: 'iOS & Android' },
    { label: 'Incorporated', value: 'Washington, USA' },
    { label: 'Founded', value: '2026' },
    { label: 'Status', value: 'Live & Growing' },
  ]
  return (
    <section style={{ backgroundColor: '#081022' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl md:text-2xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-dim text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Product() {
  const features = [
    {
      icon: '🗳️',
      title: 'Real-Time Polls',
      desc: 'Create questions and watch responses roll in instantly. Every vote is counted live and results are visible to all participants.',
    },
    {
      icon: '🔥',
      title: 'Trending Feed',
      desc: 'An algorithmic feed surfaces polls gaining momentum — giving users a front-row seat to emerging consensus and viral debates.',
    },
    {
      icon: '🗂️',
      title: 'Category Discovery',
      desc: 'Browse polls by topic — Politics, Sports, Technology, Entertainment, Science, and more. Every interest has a home.',
    },
    {
      icon: '📍',
      title: 'Location Polls',
      desc: 'Geo-tagged questions let communities surface hyperlocal opinions — what people in your city or region are thinking right now.',
    },
    {
      icon: '👥',
      title: 'Social Graph',
      desc: 'Follow opinion leaders, build your network, and engage in direct conversations with people who share your interests.',
    },
    {
      icon: '🏆',
      title: 'Leaderboards & Recaps',
      desc: 'Weekly recaps and leaderboards celebrate the most engaged voices, keeping the community active and competitive.',
    },
  ]

  return (
    <section
      id="product"
      className="py-28 relative"
      style={{ backgroundColor: '#050816' }}
    >
      {/* Subtle dot-grid texture — classic premium dark-site technique */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #1e2d4a 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">The Product</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">What Pulse Does</h2>
          <p className="text-dim text-lg max-w-2xl mx-auto leading-relaxed">
            A full-featured social polling platform built for engagement, transparency, and
            real-time discovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="border border-line rounded-2xl p-6 hover:border-accent/30 transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: '#081022' }}
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-dim text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Mission() {
  return (
    <section
      id="mission"
      className="py-28"
      style={{ backgroundColor: '#081022' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Our Mission</div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Public opinion deserves{' '}
              <span className="text-accent">better infrastructure</span>
            </h2>
          </div>

          <div className="space-y-5 text-dim text-base leading-relaxed">
            <p>
              Social media was built for broadcasting. We built Pulse for listening — a platform
              where questions get asked, answers get counted, and results are transparent to
              everyone.
            </p>
            <p>
              Pulse is designed around the idea that real-time polling at scale can surface
              genuine public sentiment: what communities care about, what they disagree on, and
              where consensus is forming. This infrastructure has broad value — for civic
              engagement, media, research, and everyday decision-making.
            </p>
            <p>
              PulseSphere LLC was founded in Everett, Washington to build this infrastructure and
              make it accessible to everyone — free, mobile-first, and built to scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section
      id="team"
      className="py-28"
      style={{ backgroundColor: '#050816' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">The Team</div>
          <h2 className="text-4xl font-black text-white mb-4">Who Builds PulseSphere</h2>
          <p className="text-dim text-lg">The people behind the platform</p>
        </div>

        <div className="flex justify-center">
          <div
            className="border border-line rounded-2xl p-10 max-w-md w-full text-center"
            style={{ backgroundColor: '#081022' }}
          >
            <div className="w-40 h-48 rounded-xl overflow-hidden border-2 border-accent/30 mx-auto mb-5">
              <Image
                src="/silas-jomo.jpg"
                alt="Silas Jomo"
                width={160}
                height={192}
                style={{ objectFit: 'cover', objectPosition: 'center top', width: '100%', height: '100%' }}
              />
            </div>
            <h3 className="text-white font-bold text-2xl mb-1">Silas Jomo</h3>
            <div className="text-accent text-sm font-semibold mb-5">Founder &amp; CEO, PulseSphere LLC</div>
            <p className="text-dim text-sm leading-relaxed">
              Silas brings a rare blend of biochemistry, systems analysis, and software engineering
              to the challenge of building social infrastructure. He founded PulseSphere on the
              belief that public opinion can evolve into real-time identity, alignment, and social
              intelligence — and leads the company's product vision, platform development, and
              user experience strategy.
            </p>
            <div className="mt-6 pt-6 border-t border-line">
              <p className="text-dim text-xs">Everett, Washington, USA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Company() {
  const details = [
    { label: 'Legal Name', value: 'PulseSphere LLC' },
    { label: 'Entity Type', value: 'Limited Liability Company (LLC)' },
    { label: 'State of Incorporation', value: 'Washington, USA' },
    { label: 'Headquarters', value: 'Everett, Washington, USA' },
    { label: 'Year Founded', value: '2026' },
    { label: 'Industry', value: 'Social Media / Mobile Technology' },
    { label: 'Platforms', value: 'iOS, Android, Web' },
    { label: 'Distribution', value: 'Apple App Store & Google Play' },
  ]

  return (
    <section
      id="company"
      className="py-28"
      style={{ backgroundColor: '#081022' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Company Details</div>
          <h2 className="text-4xl font-black text-white mb-4">About PulseSphere LLC</h2>
          <p className="text-dim text-lg max-w-2xl mx-auto">
            An independent technology company building social polling infrastructure for the
            mobile era.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="border border-line rounded-2xl overflow-hidden" style={{ backgroundColor: '#0a1428' }}>
            {details.map((d, i) => (
              <div
                key={d.label}
                className={`flex justify-between items-center px-6 py-4 ${
                  i < details.length - 1 ? 'border-b border-line' : ''
                }`}
              >
                <span className="text-dim text-sm">{d.label}</span>
                <span className="text-white text-sm font-semibold text-right">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section
      id="contact"
      className="py-28"
      style={{ backgroundColor: '#050816' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Contact</div>
          <h2 className="text-4xl font-black text-white mb-4">Get in Touch</h2>
          <p className="text-dim text-lg max-w-xl mx-auto">
            For partnerships, press inquiries, grant opportunities, or general questions — we'd
            love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto mb-10">
          <a
            href="mailto:support@pulsesphere.app"
            className="border border-line rounded-2xl p-7 hover:border-accent/40 transition-all hover:-translate-y-0.5 group"
            style={{ backgroundColor: '#081022' }}
          >
            <div className="text-3xl mb-4">💬</div>
            <div className="text-white font-bold text-lg mb-1">General Inquiries</div>
            <div className="text-dim text-sm mb-3">Support, media, and general questions</div>
            <div className="text-accent text-sm font-semibold group-hover:underline">
              support@pulsesphere.app
            </div>
          </a>

          <a
            href="mailto:legal@pulsesphere.app"
            className="border border-line rounded-2xl p-7 hover:border-accent/40 transition-all hover:-translate-y-0.5 group"
            style={{ backgroundColor: '#081022' }}
          >
            <div className="text-3xl mb-4">⚖️</div>
            <div className="text-white font-bold text-lg mb-1">Legal &amp; Partnerships</div>
            <div className="text-dim text-sm mb-3">Contracts, grants, and formal inquiries</div>
            <div className="text-accent text-sm font-semibold group-hover:underline">
              legal@pulsesphere.app
            </div>
          </a>
        </div>

        <div className="text-center">
          <p className="text-dim text-sm">PulseSphere LLC · Everett, Washington, USA</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line py-10" style={{ backgroundColor: '#081022' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/pulsesphere-logo.png"
            alt="PulseSphere LLC"
            width={100}
            height={40}
            style={{ objectFit: 'contain', opacity: 0.6 }}
          />
          <span className="text-dim text-sm">© 2026 PulseSphere LLC. All rights reserved.</span>
        </div>
        <div className="flex gap-6 text-dim text-sm">
          <a href="https://pulsesphere.app/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="https://pulsesphere.app/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="mailto:legal@pulsesphere.app" className="hover:text-white transition-colors">
            Legal
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <GlowDivider />
      <Stats />
      <GlowDivider />
      <Product />
      <GlowDivider />
      <Mission />
      <GlowDivider />
      <Team />
      <GlowDivider />
      <Company />
      <GlowDivider />
      <Contact />
      <Footer />
    </main>
  )
}
