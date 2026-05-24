import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PulseSphere LLC — Apps That Change How People Connect',
  description:
    'PulseSphere LLC is an independent technology company headquartered in Everett, Washington, building Pulse (real-time social polling) and Ancestre (AI-guided family memory preservation).',
  keywords: ['PulseSphere', 'Pulse app', 'Ancestre', 'social polling', 'family memory', 'mobile app', 'Washington'],
  metadataBase: new URL('https://company.pulsesphere.app'),
  openGraph: {
    title: 'PulseSphere LLC — Apps That Change How People Connect',
    description: 'Building Pulse and Ancestre — mobile-first platforms that solve meaningful human problems at scale.',
    url: 'https://company.pulsesphere.app',
    siteName: 'PulseSphere LLC',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
