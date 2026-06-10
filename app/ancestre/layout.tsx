import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ancestre — Preserve Your Family\'s Stories',
  description: 'Ancestre captures voice stories from the people you love — with AI-guided interviews, transcription, and a family archive built to last generations.',
  keywords: ['Ancestre', 'family memory', 'voice recording', 'AI interview', 'family archive', 'time capsule', 'genealogy'],
  metadataBase: new URL('https://company.pulsesphere.app'),
  openGraph: {
    title: 'Ancestre — Preserve Your Family\'s Stories',
    description: 'AI-guided interviews. Voice recordings. A family archive built to last generations.',
    url: 'https://company.pulsesphere.app/ancestre',
    siteName: 'Ancestre',
    type: 'website',
  },
}

export default function AncestreLayout({ children }: { children: React.ReactNode }) {
  return children
}
