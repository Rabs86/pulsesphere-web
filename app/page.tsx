'use client'
// ── PulseSphere LLC Company Website ──
import Image from 'next/image'
import { useState, useEffect, FormEvent } from 'react'

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
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = ['Product', 'Mission', 'Team', 'Company', 'Contact']

  function handleNav(id: string) {
    setMenuOpen(false)
    setTimeout(() => scrollTo(id), 50)
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-line backdrop-blur-md"
        style={{ backgroundColor: 'rgba(5,8,22,0.92)' }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/pulsesphere-logo.png"
              alt="PulseSphere LLC"
              width={130}
              height={52}
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
              priority
            />
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-dim hover:text-white transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://pulsesphere.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-colors"
            >
              Try Pulse →
            </a>
            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ backgroundColor: 'rgba(5,8,22,0.98)', paddingTop: '4rem' }}
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex flex-col items-center justify-center gap-8 h-full pb-20">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item.toLowerCase())}
                className="text-white text-2xl font-bold hover:text-accent transition-colors"
              >
                {item}
              </button>
            ))}
            <a
              href="https://pulsesphere.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-accent text-white px-8 py-3 rounded-xl font-bold text-base hover:bg-blue-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Try Pulse →
            </a>
          </div>
        </div>
      )}
    </>
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

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6 md:mb-8">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-accent text-sm font-medium">Available on iOS &amp; Android</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.05] mb-4 max-w-3xl">
          Vote on anything.{' '}
          <span className="text-accent">See what the world thinks.</span>
          {' '}Instantly.
        </h1>

        <p className="text-xl md:text-3xl font-light text-white/60 mb-6 md:mb-8 tracking-tight">
          Where opinions become identity.
        </p>

        <p className="text-base md:text-xl text-dim leading-relaxed mb-8 md:mb-10 max-w-2xl">
          PulseSphere LLC is building the platform where ideas become data and voices become
          trends. Pulse gives everyone a real-time window into what the world is thinking.
        </p>

        <div className="flex flex-wrap gap-3 md:gap-4">
          <button
            onClick={() => scrollTo('product')}
            className="bg-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-base hover:bg-blue-500 transition-colors"
          >
            Explore the Product
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="border border-line text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-base hover:border-accent/50 transition-colors"
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
  return (
    <section id="product" className="py-16 md:py-28" style={{ backgroundColor: '#050816' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">The Product</div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            What Pulse does
          </h2>
          <p className="text-dim text-lg max-w-2xl mx-auto leading-relaxed">
            A full-featured social polling platform built for engagement, transparency, and real-time discovery.
          </p>
        </div>

        {/* 3-col × 2-row feature grid */}
        <div className="grid md:grid-cols-3 gap-4">

          {/* ── 1: Real-time polls ── */}
          <div className="rounded-2xl border border-white/10 flex flex-col overflow-hidden" style={{ backgroundColor: '#081022' }}>
            <div className="p-5 flex-1">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-red-400 text-xs font-semibold">live</span>
                </div>
                <span className="text-white/30 text-xs">just now</span>
              </div>
              <p className="text-white font-semibold text-sm mb-4 leading-snug">
                Is cheating ever forgivable in a relationship?
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Never — dealbreaker', pct: 62, color: 'bg-accent', dot: 'bg-accent' },
                  { label: 'Context matters',     pct: 38, color: 'bg-red-400',  dot: 'bg-red-400'  },
                ].map((opt) => (
                  <div key={opt.label}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${opt.dot}`} />
                      <span className="text-white/70 text-xs flex-1">{opt.label}</span>
                      <span className="text-white/70 text-xs font-bold">{opt.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                      <div className={`h-full rounded-full ${opt.color}`} style={{ width: `${opt.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-5 pt-4 pb-5 border-t border-white/8">
              <h3 className="font-bold text-base mb-1.5 text-white">Real-time polls</h3>
              <p className="text-dim text-sm leading-relaxed mb-3">
                Create a question and watch responses roll in live. Every vote is counted instantly and results shift in real time as the world votes.
              </p>
              <span className="text-accent text-sm font-medium">Results update in under 500ms</span>
            </div>
          </div>

          {/* ── 2: Trending feed ── */}
          <div className="rounded-2xl border border-white/10 flex flex-col overflow-hidden" style={{ backgroundColor: '#081022' }}>
            <div className="p-5 flex-1 space-y-2">
              {[
                { tag: 'trending', tagCls: 'text-orange-400 bg-orange-400/10', body: 'Should VAR be removed from football permanently?', meta: '14,822 votes · 2h ago' },
                { tag: 'rising',   tagCls: 'text-teal-400 bg-teal-400/10',     body: 'Is pineapple on pizza actually a crime?',          meta: '8,341 votes · 4h ago'  },
                { tag: 'viral',    tagCls: 'text-amber-400 bg-amber-400/10',   body: 'Should billionaires exist?',                       meta: '31,007 votes · 1h ago' },
              ].map((item) => (
                <div key={item.tag} className="rounded-xl p-3 border border-white/8">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full inline-block mb-1.5 ${item.tagCls}`}>{item.tag}</span>
                  <p className="text-sm font-medium leading-snug mb-1 text-white">{item.body}</p>
                  <p className="text-xs text-white/40">{item.meta}</p>
                </div>
              ))}
            </div>
            <div className="px-5 pt-4 pb-5 border-t border-white/8">
              <h3 className="font-bold text-base mb-1.5 text-white">Trending feed</h3>
              <p className="text-dim text-sm leading-relaxed mb-3">
                An algorithmic feed surfaces polls gaining momentum — giving you a front-row seat to emerging consensus and the debates the world cannot stop voting on.
              </p>
              <span className="text-accent text-sm font-medium">Top trending polls updated every 60 seconds</span>
            </div>
          </div>

          {/* ── 3: Category discovery ── */}
          <div className="rounded-2xl border border-white/10 flex flex-col overflow-hidden" style={{ backgroundColor: '#081022' }}>
            <div className="p-5 flex-1">
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: '⚽', label: 'Sport',          count: '2.4k' },
                  { icon: '🏛️', label: 'Politics',       count: '1.8k' },
                  { icon: '❤️', label: 'Relationships',  count: '3.1k' },
                  { icon: '💻', label: 'Tech',            count: '980'  },
                  { icon: '🎬', label: 'Entertainment',  count: '1.2k' },
                  { icon: '🍕', label: 'Food',            count: '740'  },
                ].map((cat) => (
                  <div key={cat.label} className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <span className="text-sm leading-none">{cat.icon}</span>
                    <span className="text-xs font-medium flex-1 text-white/80">{cat.label}</span>
                    <span className="text-xs text-white/35">{cat.count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-5 pt-4 pb-5 border-t border-white/8">
              <h3 className="font-bold text-base mb-1.5 text-white">Category discovery</h3>
              <p className="text-dim text-sm leading-relaxed mb-3">
                Browse polls by topic across 9 categories. Every interest has a home — from breaking political debates to the eternal pineapple pizza question.
              </p>
              <span className="text-accent text-sm font-medium">9 categories · new polls added daily</span>
            </div>
          </div>

          {/* ── 4: Social graph ── */}
          <div className="rounded-2xl border border-white/10 flex flex-col overflow-hidden" style={{ backgroundColor: '#081022' }}>
            <div className="p-5 flex-1 space-y-3">
              {[
                { init: 'SJ', initCls: 'bg-accent/20 text-accent',         name: 'Silas J.',  meta: '847 followers · 92% agree with you', following: true  },
                { init: 'AM', initCls: 'bg-purple-400/20 text-purple-300', name: 'Aisha M.',  meta: '1.2k followers · 78% agree',         following: false },
                { init: 'KO', initCls: 'bg-green-400/20 text-green-300',   name: 'Kofi O.',   meta: '2.4k followers · 61% agree',         following: false },
              ].map((u) => (
                <div key={u.name} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${u.initCls}`}>{u.init}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-none mb-0.5 text-white">{u.name}</p>
                    <p className="text-xs text-white/40">{u.meta}</p>
                  </div>
                  <button className={`text-xs font-semibold px-3 py-1 rounded-full border flex-shrink-0 ${u.following ? 'border-white/20 text-white/40' : 'border-accent/50 text-accent'}`}>
                    {u.following ? 'Following' : 'Follow'}
                  </button>
                </div>
              ))}
            </div>
            <div className="px-5 pt-4 pb-5 border-t border-white/8">
              <h3 className="font-bold text-base mb-1.5 text-white">Social graph</h3>
              <p className="text-dim text-sm leading-relaxed">
                Follow opinion leaders, build your network, and engage in direct conversations with people whose views align — or clash — with yours.
              </p>
            </div>
          </div>

          {/* ── 5: Streaks and leaderboards ── */}
          <div className="rounded-2xl border border-white/10 flex flex-col overflow-hidden" style={{ backgroundColor: '#081022' }}>
            <div className="p-5 flex-1 flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-3xl">🔥</span>
                <span className="text-4xl font-black text-white">14</span>
              </div>
              <p className="text-sm mb-5 text-white/50">day streak — keep it going</p>
              <div className="flex gap-1.5 mb-3">
                {['M','T','W','T','F','S','S'].map((d, i) => (
                  <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                    i === 5 ? 'bg-orange-500 text-white' : i < 5 ? 'text-white/60' : 'text-white/20'
                  }`} style={i !== 5 ? { backgroundColor: 'rgba(255,255,255,0.07)' } : undefined}>{d}</div>
                ))}
              </div>
              <p className="text-xs text-white/35">vote daily to maintain your streak</p>
            </div>
            <div className="px-5 pt-4 pb-5 border-t border-white/8">
              <h3 className="font-bold text-base mb-1.5 text-white">Streaks and leaderboards</h3>
              <p className="text-dim text-sm leading-relaxed">
                Pulse the streak to climb the weekly leaderboard. The most engaged voices get celebrated — are you in the top 100?
              </p>
            </div>
          </div>

          {/* ── 6: Personality insights ── */}
          <div className="rounded-2xl border border-white/10 flex flex-col overflow-hidden" style={{ backgroundColor: '#081022' }}>
            <div className="p-5 flex-1">
              <p className="text-xs text-center mb-3 text-white/35">based on your 47 votes</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { label: 'Independent thinker', cls: 'bg-accent/15 text-accent'         },
                  { label: 'Progressive',          cls: 'bg-green-400/15 text-green-300'   },
                  { label: 'Realist',              cls: 'bg-yellow-400/15 text-yellow-300' },
                  { label: 'Contrarian',           cls: 'bg-orange-400/15 text-orange-300' },
                ].map((t) => (
                  <span key={t.label} className={`text-xs font-semibold px-3 py-1 rounded-full ${t.cls}`}>{t.label}</span>
                ))}
              </div>
              <div className="rounded-xl p-3 border border-white/10" style={{ backgroundColor: 'rgba(74,158,255,0.07)' }}>
                <p className="text-xs mb-0.5 text-white/40">rare opinion holder</p>
                <p className="text-sm font-semibold text-white">Only 18% voted the same as you</p>
              </div>
            </div>
            <div className="px-5 pt-4 pb-5 border-t border-white/8">
              <h3 className="font-bold text-base mb-1.5 text-white">Personality insights</h3>
              <p className="text-dim text-sm leading-relaxed">
                Your votes reveal your worldview. Pulse builds a live opinion profile — showing where you stand, how rare your views are, and what kind of thinker you are.
              </p>
            </div>
          </div>

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
      className="py-16 md:py-24 overflow-hidden"
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
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">See Pulse in Action</h2>
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
                  ? 'w-[72vw] max-w-[220px] md:w-[260px] z-10'
                  : 'hidden sm:block w-[175px] md:w-[210px] opacity-80 md:-mb-4'
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
  const stats = [
    { value: '160+', label: 'Polls created' },
    { value: '130K+', label: 'Votes cast' },
    { value: 'Free', label: 'Always' },
  ]

  return (
    <section
      id="mission"
      className="py-16 md:py-28"
      style={{ backgroundColor: '#081022' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Our Mission</div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              Public opinion deserves{' '}
              <span className="text-accent">better infrastructure</span>
            </h2>

            {/* Proof strip */}
            <div className="flex gap-6 mt-2">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-white">{s.value}</div>
                  <div className="text-dim text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
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
      className="py-16 md:py-28"
      style={{ backgroundColor: '#050816' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">The Team</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Who Builds PulseSphere</h2>
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
      className="py-16 md:py-28"
      style={{ backgroundColor: '#081022' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">The Company</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Built to Give Public Opinion a Home</h2>
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
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields((prev) => ({ ...prev, [key]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setStatus('success')
      setFields({ name: '', email: '', subject: '', message: '' })
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  const inputCls =
    'w-full rounded-xl border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-accent/60 focus:ring-1 focus:ring-accent/30'
  const inputStyle = { backgroundColor: 'rgba(255,255,255,0.04)' }

  return (
    <section id="contact" className="py-16 md:py-28" style={{ backgroundColor: '#050816' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Contact</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Get in Touch</h2>
          <p className="text-dim text-lg max-w-xl mx-auto">
            For partnerships, press inquiries, grant opportunities, or general questions — send us a message and we'll get back to you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-white/10 p-8 md:p-10" style={{ backgroundColor: '#081022' }}>

            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-white font-bold text-xl mb-2">Message sent!</h3>
                <p className="text-dim text-sm mb-6">We'll get back to you at {fields.email || 'your email'} within 1–2 business days.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-accent text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-1.5">Name</label>
                    <input
                      type="text"
                      placeholder="Silas Jomo"
                      value={fields.name}
                      onChange={set('name')}
                      required
                      className={inputCls}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-1.5">Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={fields.email}
                      onChange={set('email')}
                      required
                      className={inputCls}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/60 text-xs font-medium mb-1.5">Subject</label>
                  <select
                    value={fields.subject}
                    onChange={set('subject')}
                    required
                    className={inputCls}
                    style={{ ...inputStyle, appearance: 'none' }}
                  >
                    <option value="" disabled>Select a subject…</option>
                    <option value="General inquiry">General inquiry</option>
                    <option value="Partnership / collaboration">Partnership / collaboration</option>
                    <option value="Press / media">Press / media</option>
                    <option value="Grant opportunity">Grant opportunity</option>
                    <option value="Legal">Legal</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/60 text-xs font-medium mb-1.5">Message</label>
                  <textarea
                    placeholder="Tell us what's on your mind…"
                    rows={5}
                    value={fields.message}
                    onChange={set('message')}
                    required
                    className={inputCls + ' resize-none'}
                    style={inputStyle}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-accent text-white font-bold py-3.5 rounded-xl text-sm hover:bg-blue-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 text-dim text-sm">
            <span>Or email us directly:</span>
            <a href="mailto:support@pulsesphere.app" className="text-accent hover:underline">support@pulsesphere.app</a>
            <span className="hidden sm:inline text-white/20">·</span>
            <a href="mailto:legal@pulsesphere.app" className="text-accent hover:underline">legal@pulsesphere.app</a>
          </div>
          <p className="text-center text-dim text-xs mt-4">PulseSphere LLC · Everett, Washington, USA</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line" style={{ backgroundColor: '#081022' }}>
      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

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
          <a href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="/privacy" className="hover:text-white transition-colors">
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
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

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
