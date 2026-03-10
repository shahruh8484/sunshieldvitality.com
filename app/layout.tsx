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
  title: 'Realgood Essentials | Vitamin D3 K2 Supplement Guide',
  description: 'Discover the benefits of Vitamin D3 K2 10,000 IU for immune support, bone health, and overall wellness. Your comprehensive guide to D3 K2 supplementation.',
  keywords: 'vitamin d3 k2, vitamin d3 10000 iu, vitamin d3 supplement, bone health, immune support, vitamin k2 mk7',
  authors: [{ name: 'Realgood Essentials' }],
  openGraph: {
    title: 'Realgood Essentials | Vitamin D3 K2 Supplement Guide',
    description: 'Discover the benefits of Vitamin D3 K2 10,000 IU for immune support, bone health, and overall wellness.',
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
  themeColor: '#c97d24',
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
