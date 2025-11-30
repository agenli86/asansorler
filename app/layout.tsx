import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export const metadata: Metadata = {
  metadataBase: new URL('https://adanaasansorkiralama.com'),
  title: {
    default: 'Adana Asansör Kiralama | Kiralık Asansör, Ev Taşıma Asansörü, Mobil Asansör',
    template: '%s | Adana Asansör Kiralama',
  },
  description: 'Adana asansör kiralama hizmeti. Ev taşıma asansörü, mobil asansör kiralama, eşya taşıma asansörü kiralama, asansörlü nakliye ve nakliye asansörü ile profesyonel taşımacılık. Kiralık asansör Adana.',
  keywords: [
    'Adana asansör kiralama',
    'asansör taşıma',
    'kiralık asansör',
    'ev taşıma asansörü',
    'asansörlü nakliye',
    'eşya taşıma asansörü kiralama',
    'mobil asansör kiralama',
    'nakliye asansörü',
    'Adana mobil asansör',
  ],
  authors: [{ name: 'Adana Asansör Kiralama' }],
  creator: 'Adana Asansör Kiralama',
  publisher: 'Adana Asansör Kiralama',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://adanaasansorkiralama.com',
    siteName: 'Adana Asansör Kiralama',
    title: 'Adana Asansör Kiralama | Kiralık Asansör, Ev Taşıma Asansörü',
    description: 'Adana asansör kiralama hizmeti. Ev taşıma asansörü, mobil asansör kiralama, eşya taşıma asansörü ve asansörlü nakliye ile profesyonel taşımacılık.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adana Asansör Kiralama',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adana Asansör Kiralama | Kiralık Asansör, Ev Taşıma Asansörü',
    description: 'Adana asansör kiralama hizmeti. Ev taşıma asansörü, mobil asansör kiralama ve asansörlü nakliye.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://adanaasansorkiralama.com',
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="geo.region" content="TR-01" />
        <meta name="geo.placename" content="Adana" />
        <meta name="geo.position" content="37.0000;35.3213" />
        <meta name="ICBM" content="37.0000, 35.3213" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Adana Asansör Kiralama',
              description: 'Adana asansör kiralama hizmeti. Ev taşıma asansörü, mobil asansör kiralama, eşya taşıma asansörü ve asansörlü nakliye.',
              image: 'https://adanaasansorkiralama.com/og-image.jpg',
              telephone: '+905374092406',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Çukurova',
                addressRegion: 'Adana',
                addressCountry: 'TR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 37.0,
                longitude: 35.3213,
              },
              url: 'https://adanaasansorkiralama.com',
              priceRange: '₺₺',
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '00:00',
                closes: '23:59',
              },
              sameAs: [],
              areaServed: {
                '@type': 'City',
                name: 'Adana',
              },
              serviceType: [
                'Asansör Kiralama',
                'Ev Taşıma Asansörü',
                'Mobil Asansör Kiralama',
                'Eşya Taşıma Asansörü',
                'Asansörlü Nakliye',
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}
