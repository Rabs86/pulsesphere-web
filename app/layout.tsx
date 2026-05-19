import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PulseSphere LLC — Building the Infrastructure for Public Opinion',
  description:
    'PulseSphere LLC is an independent technology company headquartered in Everett, Washington, building Pulse — a real-time social polling platform for iOS and Android.',
  keywords: ['PulseSphere', 'Pulse app', 'social polling', 'public opinion', 'mobile app', 'Washington'],
  openGraph: {
    title: 'PulseSphere LLC',
    description: 'Building the infrastructure for real-time public opinion.',
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
