import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'optional' })
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'optional',
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'PulseSphere LLC — Apps That Change How People Connect',
  description:
    'PulseSphere LLC is an independent technology company headquartered in Everett, Washington, building Pulsefire (real-time social polling) and Ancestre (AI-guided family memory preservation).',
  keywords: ['PulseSphere', 'Pulsefire', 'Ancestre', 'social polling', 'family memory', 'mobile app', 'Washington'],
  metadataBase: new URL('https://company.pulsesphere.app'),
  openGraph: {
    title: 'PulseSphere LLC — Apps That Change How People Connect',
    description: 'Building Pulsefire and Ancestre — mobile-first platforms that solve meaningful human problems at scale.',
    url: 'https://company.pulsesphere.app',
    siteName: 'PulseSphere LLC',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${jakarta.variable}`}>{children}</body>
    </html>
  )
}
