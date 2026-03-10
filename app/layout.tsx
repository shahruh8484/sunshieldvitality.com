import type { Metadata, Viewport } from 'next'
import { Inter, Libre_Baskerville } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const libreBaskerville = Libre_Baskerville({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'B12 Vitality Hub | Vitamin B-12 Oral Spray Guide',
  description: 'Discover the benefits of Vitamin B-12 Oral Spray for energy, mental clarity, and overall wellness. Your comprehensive guide to B-12 supplementation.',
  keywords: 'vitamin b12, b12 spray, vitamin b12 supplement, energy supplement, mental clarity',
  authors: [{ name: 'B12 Vitality Hub' }],
  openGraph: {
    title: 'B12 Vitality Hub | Vitamin B-12 Oral Spray Guide',
    description: 'Discover the benefits of Vitamin B-12 Oral Spray for energy, mental clarity, and overall wellness.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3d8b40',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${libreBaskerville.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
