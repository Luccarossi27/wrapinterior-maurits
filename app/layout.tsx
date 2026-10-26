import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Oswald } from 'next/font/google'
import { LanguageProvider } from '@/lib/i18n/provider'
import { dictionaries, defaultLocale } from '@/lib/i18n/dictionaries'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const meta = dictionaries[defaultLocale].meta

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  generator: 'v0.app',
  
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },

}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2f4438',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang={defaultLocale}
      className={`bg-background ${spaceGrotesk.variable} ${oswald.variable}`}
    >
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
