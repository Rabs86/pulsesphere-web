import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = "PulseSphere — The world's opinion, in real time"
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  const feedImg = readFileSync(join(process.cwd(), 'public/screenshot-feed.png'))
  const feedSrc = `data:image/png;base64,${feedImg.toString('base64')}`

  const logoImg = readFileSync(join(process.cwd(), 'public/pulsesphere-logo.png'))
  const logoSrc = `data:image/png;base64,${logoImg.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#050816',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: '115px',
            left: '80px',
            width: '640px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(74,158,255,0.13) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* ── Left: phone mockup ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '440px',
            marginLeft: '70px',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: '228px',
              height: '494px',
              borderRadius: '38px',
              border: '2px solid rgba(255,255,255,0.14)',
              overflow: 'hidden',
              backgroundColor: '#050816',
              boxShadow: '0 0 80px rgba(74,158,255,0.22), 0 40px 80px rgba(0,0,0,0.6)',
              display: 'flex',
              position: 'relative',
            }}
          >
            {/* Dynamic island */}
            <div
              style={{
                position: 'absolute',
                top: '12px',
                left: '76px',
                width: '76px',
                height: '20px',
                borderRadius: '10px',
                backgroundColor: '#000',
                display: 'flex',
              }}
            />
            <img
              src={feedSrc}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
              }}
            />
          </div>
        </div>

        {/* ── Right: branding ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            paddingLeft: '52px',
            paddingRight: '72px',
          }}
        >
          {/* Logo */}
          <img
            src={logoSrc}
            style={{
              width: '210px',
              height: '76px',
              objectFit: 'contain',
              objectPosition: 'left center',
              marginBottom: '36px',
            }}
          />

          {/* Headline — all text in spans to satisfy satori */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              fontSize: '50px',
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: '22px',
            }}
          >
            <span style={{ color: '#ffffff' }}>The world&#39;s opinion&#160;</span>
            <span style={{ color: '#4a9eff' }}>— in real time.</span>
          </div>

          {/* Subheading */}
          <div
            style={{
              display: 'flex',
              fontSize: '21px',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '44px',
            }}
          >
            <span>Real questions. Real votes. Transparent results.</span>
          </div>

          {/* Live pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(74,158,255,0.1)',
              border: '1px solid rgba(74,158,255,0.25)',
              borderRadius: '999px',
              padding: '10px 20px',
              alignSelf: 'flex-start',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#4a9eff',
                display: 'flex',
              }}
            />
            <span style={{ color: '#4a9eff', fontSize: '17px', fontWeight: 600 }}>
              Available on iOS &amp; Android
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
