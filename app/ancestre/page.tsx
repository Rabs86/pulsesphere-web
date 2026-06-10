'use client'
// ── Ancestre App Landing Page ──

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef, FormEvent } from 'react'

function useFadeIn() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('fade-visible'); observer.disconnect() }
      },
      { threshold: 0.08 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

const ACCENT = '#C8782A'
const ACCENT_DIM = 'rgba(200,120,42,0.12)'
const ACCENT_BORDER = 'rgba(200,120,42,0.25)'
const BG = '#0D0A08'
const BG2 = '#130E0A'

// ── Nav ────────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-colors duration-300"
      style={{ backgroundColor: 'rgba(13,10,8,0.92)', borderColor: scrolled ? 'rgba(200,120,42,0.2)' : 'transparent' }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/ancestre-logo.png" alt="Ancestre" width={32} height={32} className="rounded-xl" />
          <span className="font-bold text-white text-lg">Ancestre</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#features" className="hidden sm:block text-sm text-white/50 hover:text-white transition-colors">Features</a>
          <a href="#download" className="text-sm font-bold text-white px-4 py-2 rounded-xl" style={{ backgroundColor: ACCENT }}>
            Download
          </a>
        </div>
      </div>
    </nav>
  )
}

// ── Early Access Form ──────────────────────────────────────────────────────────
function EarlyAccessForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, product: 'ancestre' }),
      })
      const json = await res.json()
      if (!res.ok) { setErrorMsg(json.error || 'Something went wrong.'); setStatus('error') }
      else setStatus('success')
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-sm">
        <span className="text-green-400 font-bold text-lg">✓</span>
        <span className="text-white/60">You&rsquo;re on the list — we&rsquo;ll email you when Ancestre launches.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <div className="flex gap-2">
        <input
          type="email" value={email} onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com" required
          className="flex-1 min-w-0 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none"
          style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: `1px solid ${ACCENT_BORDER}` }}
        />
        <button type="submit" disabled={status === 'loading'}
          className="text-white px-5 py-3 rounded-xl font-bold text-sm transition-opacity disabled:opacity-60 whitespace-nowrap"
          style={{ backgroundColor: ACCENT }}>
          {status === 'loading' ? '…' : 'Notify Me'}
        </button>
      </div>
      {status === 'error' && <p className="text-red-400 text-xs mt-2">{errorMsg}</p>}
    </form>
  )
}

// ── Hero ───────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" style={{ backgroundColor: BG }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 70% 60% at 50% 40%, rgba(200,120,42,0.07) 0%, transparent 100%)` }} />

      <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-36 text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-semibold"
          style={{ backgroundColor: ACCENT_DIM, border: `1px solid ${ACCENT_BORDER}`, color: ACCENT }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: ACCENT }} />
          Now available on iOS &amp; Android
        </div>

        <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.05] mb-6">
          Every life deserves{' '}
          <span style={{ color: ACCENT }}>to be remembered.</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/55 leading-relaxed mb-10 max-w-2xl mx-auto">
          Ancestre captures voice stories from the people you love — with AI-guided interviews, transcription, and a family archive built to last generations.
        </p>

        {/* Store badges */}
        <div id="download" className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="https://apps.apple.com/app/ancestre/id6772851389"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 border rounded-2xl px-5 py-3 hover:opacity-80 transition-opacity"
            style={{ borderColor: ACCENT_BORDER, backgroundColor: ACCENT_DIM }}
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white flex-shrink-0">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-white/40 text-[10px] uppercase tracking-wide leading-none">Download on the</div>
              <div className="text-white font-bold text-sm leading-tight mt-0.5">App Store</div>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.pulsesphere.ancestre"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 border rounded-2xl px-5 py-3 hover:opacity-80 transition-opacity"
            style={{ borderColor: ACCENT_BORDER, backgroundColor: ACCENT_DIM }}
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white flex-shrink-0">
              <path d="M3.18 23.76c.3.17.64.24.99.2l12.3-7.1-2.68-2.68-10.61 9.58zM.5 1.26C.19 1.6 0 2.12 0 2.79v18.42c0 .67.19 1.19.51 1.52l.08.08 10.32-10.32v-.24L.58 1.18.5 1.26zM20.49 10.37l-2.9-1.67-3.01 3.01 3.01 3.01 2.92-1.68c.83-.48.83-1.26-.02-1.67zM3.18.24l12.41 7.16-2.68 2.68L2.19.17c.32-.23.69-.1.99.07z"/>
            </svg>
            <div className="text-left">
              <div className="text-white/40 text-[10px] uppercase tracking-wide leading-none">Get it on</div>
              <div className="text-white font-bold text-sm leading-tight mt-0.5">Google Play</div>
            </div>
          </a>
        </div>

        {/* App icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-[22px] overflow-hidden border-2" style={{ borderColor: ACCENT_BORDER }}>
            <Image src="/ancestre-logo.png" alt="Ancestre" width={80} height={80} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Features ───────────────────────────────────────────────────────────────────
function Features() {
  const ref = useFadeIn()
  const features = [
    {
      icon: '🎙️',
      title: 'AI-Guided Interviews',
      body: 'Ancestre asks the questions your family never thought to answer. Smart prompts draw out childhood memories, life lessons, and stories that would otherwise disappear.',
    },
    {
      icon: '📝',
      title: 'Automatic Transcription',
      body: 'Every recorded story is transcribed and searchable. Never lose a word — every story is indexed, readable, and shareable with family.',
    },
    {
      icon: '🌳',
      title: 'Family Tree Builder',
      body: 'Map generations across time. Link stories to people, dates to places, and connect your family\'s history into a single living archive.',
    },
    {
      icon: '💌',
      title: 'Time Capsules',
      body: 'Seal a voice message, letter, or memory today. Set a delivery date and let your grandchildren open it decades from now.',
    },
    {
      icon: '🔒',
      title: 'Private & Encrypted',
      body: 'Your family\'s stories belong to your family. Ancestre is private by default — no public feeds, no social algorithms, no data sold.',
    },
    {
      icon: '👥',
      title: 'Collaborative Archive',
      body: 'Invite family members to contribute. Everyone records, everyone contributes — the archive grows richer with every voice added.',
    },
  ]

  return (
    <section id="features" ref={ref as React.RefObject<HTMLElement>} className="fade-section py-16 md:py-28" style={{ backgroundColor: BG2 }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>What Ancestre Does</div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">A platform built to preserve what matters.</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Most family memories exist only in someone&rsquo;s head. Ancestre gives you the tools to capture them before they&rsquo;re gone.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border p-6 flex flex-col gap-3"
              style={{ borderColor: ACCENT_BORDER, backgroundColor: 'rgba(200,120,42,0.04)' }}>
              <span className="text-3xl leading-none">{f.icon}</span>
              <h3 className="text-white font-bold text-base">{f.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── How It Works ───────────────────────────────────────────────────────────────
function HowItWorks() {
  const ref = useFadeIn()
  const steps = [
    { n: '1', title: 'Add a family member', body: 'Create a profile for a grandparent, parent, or anyone whose story deserves to be kept.' },
    { n: '2', title: 'Start a guided interview', body: 'Ancestre suggests questions — or you write your own. Hit record and let them speak.' },
    { n: '3', title: 'Save, transcribe & share', body: 'The recording is saved, transcribed, and added to your family archive — accessible to the whole family.' },
  ]

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="fade-section py-16 md:py-28" style={{ backgroundColor: BG }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>How It Works</div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Three steps to a family legacy.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-lg" style={{ backgroundColor: ACCENT }}>
                {s.n}
              </div>
              <h3 className="text-white font-bold text-lg">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Professional Plan ──────────────────────────────────────────────────────────
function ForProfessionals() {
  const ref = useFadeIn()
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="fade-section py-16 md:py-24" style={{ backgroundColor: BG2 }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-2xl border p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start"
          style={{ borderColor: 'rgba(74,158,255,0.2)', backgroundColor: 'rgba(74,158,255,0.04)' }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(74,158,255,0.15)' }}>
            <span className="text-2xl">💼</span>
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold uppercase tracking-widest mb-2 text-blue-400">For Professionals</div>
            <h3 className="text-white text-2xl font-black mb-3">Are you a life story professional?</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Ancestre Business is built for reminiscence therapists, elder care providers, genealogists, and senior living communities. Manage multiple client archives, collaborate with staff, and deliver lasting legacies at scale.
            </p>
            <a
              href="mailto:support@pulsesphere.app?subject=Ancestre Business inquiry"
              className="inline-flex items-center gap-2 text-sm font-bold text-white px-5 py-2.5 rounded-xl transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#4A9EFF' }}>
              Contact us about Business →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer ─────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t" style={{ backgroundColor: BG2, borderColor: 'rgba(200,120,42,0.15)' }}>
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <Image src="/ancestre-logo.png" alt="Ancestre" width={28} height={28} className="rounded-lg" />
          <span className="text-white/60 text-sm">
            Ancestre · by{' '}
            <a href="https://company.pulsesphere.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              PulseSphere LLC
            </a>
          </span>
        </div>
        <div className="flex gap-6 text-sm text-white/40">
          <Link href="/ancestre/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/ancestre/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <a href="mailto:support@pulsesphere.app" className="hover:text-white transition-colors">Support</a>
        </div>
      </div>
      <div className="border-t text-center py-4" style={{ borderColor: 'rgba(200,120,42,0.1)' }}>
        <span className="text-white/20 text-xs">© 2026 PulseSphere LLC · Everett, Washington, USA</span>
      </div>
    </footer>
  )
}

// ── Root ───────────────────────────────────────────────────────────────────────
export default function AncestrePage() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <ForProfessionals />
      <Footer />
    </main>
  )
}
