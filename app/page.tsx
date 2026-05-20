'use client'
// ── PulseSphere LLC Company Website ──
import Image from 'next/image'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

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
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-dim hover:text-white transition-colors text-sm font-medium"
            >
              {item}
            </button>
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
          <button
            onClick={() => scrollTo('product')}
            className="bg-accent text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-500 transition-colors"
          >
            Explore the Product
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="border border-line text-white px-8 py-4 rounded-xl font-bold text-base hover:border-accent/50 transition-colors"
          >
            Get in Touch
          </button>
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
  const cards = [
    {
      stat: 'Live ranking',
      title: 'Trending Feed',
      desc: 'An algorithmic feed surfaces polls gaining momentum — giving users a front-row seat to emerging consensus and viral debates.',
    },
    {
      stat: '9 categories',
      title: 'Category Discovery',
      desc: 'Browse by topic — Politics, Sports, Tech, Entertainment, Food, Health, Local, Society, and more. Every interest has a home.',
    },
    {
      stat: 'City-level',
      title: 'Location Polls',
      desc: 'Geo-tagged questions surface hyperlocal opinions — what people in your city or region are thinking right now.',
    },
    {
      stat: 'Follow · DM · Debate',
      title: 'Social Graph',
      desc: 'Follow opinion leaders, build your network, and engage in direct conversations with people who share your interests.',
    },
    {
      stat: 'Weekly recaps',
      title: 'Leaderboards',
      desc: 'Weekly rankings celebrate the most engaged voices, keeping the community active and coming back.',
    },
  ]

  return (
    <section
      id="product"
      className="py-28 relative"
      style={{ backgroundColor: '#050816' }}
    >
      {/* Dot-grid texture */}
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

        {/* ── Hero feature: Real-Time Polls ── */}
        <div
          className="grid md:grid-cols-2 gap-10 items-center rounded-3xl border border-line p-8 md:p-12 mb-5 overflow-hidden relative"
          style={{ backgroundColor: '#081022' }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(74,158,255,0.07) 0%, transparent 100%)',
            }}
          />

          {/* Left: copy */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-3 py-1 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Core feature</span>
            </div>
            <div className="text-5xl md:text-6xl font-black text-accent mb-3 leading-none">&lt; 500ms</div>
            <h3 className="text-white font-black text-2xl mb-4">Real-Time Polls</h3>
            <p className="text-dim text-base leading-relaxed mb-6">
              Results update the instant a vote is cast — no refresh, no delay. Every participant
              watches the numbers move live as opinions pour in.
            </p>
            <ul className="space-y-2">
              {[
                'Vote counts update via live WebSocket connection',
                'Results visible to all participants simultaneously',
                'Percentages recalculate on every single vote',
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-dim">
                  <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: phone mockup */}
          <div className="relative flex justify-center md:justify-end">
            <div
              className="relative w-[200px] md:w-[230px] rounded-[2.2rem] overflow-hidden border border-white/15"
              style={{ boxShadow: '0 0 60px rgba(74,158,255,0.18), 0 30px 60px rgba(0,0,0,0.5)' }}
            >
              {/* Dynamic island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-10" />
              {/* Fade at bottom so it bleeds nicely into the card */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(transparent, #081022)' }}
              />
              <Image
                src="/screenshot-feed.png"
                alt="Pulse live feed showing a real-time poll"
                width={390}
                height={844}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        {/* ── Stat-led feature cards ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((f) => (
            <div
              key={f.title}
              className="border border-line rounded-2xl p-6 hover:border-accent/30 transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: '#081022' }}
            >
              <div className="text-xl font-black text-accent mb-1 tracking-tight">{f.stat}</div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-dim text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AppShowcase() {
  const screens = [
    {
      src: '/screenshot-discover.png',
      alt: 'Pulse Discover screen showing category browsing',
      label: 'Browse by Topic',
    },
    {
      src: '/screenshot-feed.png',
      alt: 'Pulse home feed showing live polls',
      label: 'Live Feed',
      featured: true,
    },
    {
      src: '/screenshot-vote.png',
      alt: 'Pulse quick-vote swipe screen',
      label: 'Quick Vote',
    },
  ]

  return (
    <section
      className="py-24 overflow-hidden"
      style={{ backgroundColor: '#050816' }}
    >
      {/* Ambient glow behind phones */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(74,158,255,0.08) 0%, transparent 100%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">The App</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">See Pulse in Action</h2>
          <p className="text-dim text-lg max-w-xl mx-auto">
            Real questions. Real votes. Real time.
          </p>
        </div>

        <div className="flex items-end justify-center gap-4 md:gap-6">
          {screens.map((screen) => (
            <div
              key={screen.src}
              className={`relative flex-shrink-0 transition-all ${
                screen.featured
                  ? 'w-[220px] md:w-[260px] z-10'
                  : 'w-[175px] md:w-[210px] opacity-80 mb-0 md:-mb-4'
              }`}
            >
              {/* Phone frame */}
              <div
                className="relative rounded-[2.2rem] overflow-hidden border border-white/15 shadow-2xl"
                style={{ backgroundColor: '#050816', boxShadow: screen.featured ? '0 0 60px rgba(74,158,255,0.15)' : undefined }}
              >
                {/* Dynamic island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={390}
                  height={844}
                  className="w-full h-auto block"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-center text-dim text-xs font-medium mt-3">{screen.label}</p>
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
            <div className="mt-6 pt-6 border-t border-line flex flex-col items-center gap-3">
              <p className="text-dim text-xs">Everett, Washington, USA</p>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/silasjomo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-dim hover:text-white hover:border-accent/40 transition-all">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://x.com/rabs863" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter"
                  className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-dim hover:text-white hover:border-accent/40 transition-all">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.868L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://www.instagram.com/rabs863/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-dim hover:text-white hover:border-accent/40 transition-all">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Company() {
  return (
    <section
      id="company"
      className="py-28"
      style={{ backgroundColor: '#081022' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">The Company</div>
          <h2 className="text-4xl font-black text-white mb-4">Built to Give Public Opinion a Home</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-dim text-lg leading-relaxed mb-16">
          <p>
            Public opinion has always existed — but it has never had the right infrastructure.
            It gets scattered across comment threads, buried in feeds, and hijacked by whoever
            shouts loudest. PulseSphere LLC was founded in 2026 to change that.
          </p>
          <p>
            We built Pulse because we believe that when you give people a structured way to
            express an opinion — a real question, a real vote, a transparent result — something
            important happens. The noise clears. Genuine sentiment surfaces. You stop guessing
            what people think and start knowing.
          </p>
          <p>
            We're an independent company headquartered in Everett, Washington. No venture
            pressure, no advertising business model — just a product that earns its place on
            your phone by being genuinely useful. Pulse is free, mobile-first, and built to
            scale to every community and conversation on the planet.
          </p>
        </div>

        {/* Compact fact strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { label: 'Founded', value: '2026' },
            { label: 'Headquarters', value: 'Everett, WA' },
            { label: 'Platforms', value: 'iOS · Android · Web' },
            { label: 'Business model', value: 'Free to use' },
          ].map((f) => (
            <div key={f.label} className="border border-line rounded-xl px-5 py-4 text-center" style={{ backgroundColor: '#0a1428' }}>
              <div className="text-white font-bold text-sm mb-1">{f.value}</div>
              <div className="text-dim text-xs">{f.label}</div>
            </div>
          ))}
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
    <footer className="border-t border-line" style={{ backgroundColor: '#081022' }}>
      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand column */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <Image
            src="/pulsesphere-logo.png"
            alt="PulseSphere LLC"
            width={130}
            height={52}
            style={{ objectFit: 'contain', objectPosition: 'left center' }}
          />
          <p className="text-dim text-sm leading-relaxed">
            Building the platform where ideas become data and voices become trends. Real-time social polling for everyone.
          </p>
          {/* Social icons */}
          <div className="flex gap-3 mt-1">
            <a href="https://x.com/pulsesphereapp" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter"
              className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-dim hover:text-white hover:border-accent/40 transition-all">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.868L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://instagram.com/pulsesphereapp" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-dim hover:text-white hover:border-accent/40 transition-all">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://linkedin.com/company/pulsesphere" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-dim hover:text-white hover:border-accent/40 transition-all">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

        {/* Product links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
          <ul className="space-y-3">
            {[
              { label: 'Features', href: '#product' },
              { label: 'Mission', href: '#mission' },
              { label: 'Download', href: '#' },
              { label: 'Try Pulse Web', href: 'https://pulsesphere.app' },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-dim text-sm hover:text-white transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-3">
            {[
              { label: 'About', href: '#company' },
              { label: 'Team', href: '#team' },
              { label: 'Contact', href: '#contact' },
              { label: 'support@pulsesphere.app', href: 'mailto:support@pulsesphere.app' },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-dim text-sm hover:text-white transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Download column */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Download</h4>
          <div className="flex flex-col gap-3">
            <a href="#" aria-label="Download on the App Store (coming soon)"
              className="flex items-center gap-3 border border-line rounded-xl px-4 py-2.5 hover:border-accent/40 transition-all cursor-not-allowed opacity-70">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white flex-shrink-0"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div>
                <div className="text-white/40 text-[10px] leading-none mb-0.5 uppercase tracking-wide">Coming Soon</div>
                <div className="text-white font-semibold text-sm leading-none">App Store</div>
              </div>
            </a>
            <a href="#" aria-label="Get it on Google Play (coming soon)"
              className="flex items-center gap-3 border border-line rounded-xl px-4 py-2.5 hover:border-accent/40 transition-all cursor-not-allowed opacity-70">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white flex-shrink-0"><path d="M3.18 23.76c.3.17.64.24.99.2l12.3-7.1-2.68-2.68-10.61 9.58zM.5 1.26C.19 1.6 0 2.12 0 2.79v18.42c0 .67.19 1.19.51 1.52l.08.08 10.32-10.32v-.24L.58 1.18.5 1.26zM20.49 10.37l-2.9-1.67-3.01 3.01 3.01 3.01 2.92-1.68c.83-.48.83-1.26-.02-1.67zM3.18.24l12.41 7.16-2.68 2.68L2.19.17c.32-.23.69-.1.99.07z"/></svg>
              <div>
                <div className="text-white/40 text-[10px] leading-none mb-0.5 uppercase tracking-wide">Coming Soon</div>
                <div className="text-white font-semibold text-sm leading-none">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 py-6">
        <div className="flex items-center gap-3">
          <span className="text-dim text-sm">© 2026 PulseSphere LLC. All rights reserved. · Everett, Washington, USA</span>
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
      <AppShowcase />
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
