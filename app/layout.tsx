import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'FADEMEX | Paneles Solares Industriales y Consultoría Energética',
    template: '%s | FADEMEX',
  },
  description: 'FADEMEX: empresa líder en instalación de paneles solares industriales, sistemas fotovoltaicos para empresas, almacenamiento de energía con baterías industriales, consultoría energética y eficiencia energética industrial en México.',
  keywords: [
    'FADEMEX',
    'paneles solares industriales',
    'instalación de paneles solares industriales',
    'sistemas solares industriales',
    'energía solar industrial',
    'empresa de energía solar industrial',
    'proyectos solares industriales',
    'consultoría energética industrial',
    'consultoría energética empresas',
    'análisis energético industrial',
    'eficiencia energética industrial',
    'gestión energética industrial',
    'instalación de sistemas fotovoltaicos industriales',
    'sistemas fotovoltaicos para empresas',
    'instalación solar comercial e industrial',
    'energía solar para naves industriales',
    'ahorro energético industrial',
    'reducción de consumo eléctrico industrial',
    'reducción de picos de demanda',
    'peak shaving industrial',
    'time shifting energía',
    'baterías industriales de energía',
    'sistemas de almacenamiento de energía industrial',
    'baterías para respaldo industrial',
    'baterías solares industriales',
    'continuidad operativa energía',
    'paneles solares para fábricas',
    'monitoreo energético industrial',
    'sistemas inteligentes de energía',
    'monitoreo solar industrial',
    'gestión de energía industrial',
  ],
  openGraph: {
    title: 'FADEMEX | Paneles Solares Industriales y Consultoría Energética',
    description: 'Instalación de paneles solares industriales, sistemas fotovoltaicos, baterías de almacenamiento y consultoría energética para empresas en México.',
    url: 'https://www.fademex.com',
    siteName: 'FADEMEX',
    locale: 'es_MX',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.fademex.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'FADEMEX',
              url: 'https://www.fademex.com',
              logo: 'https://www.fademex.com/logos/FADEMEX LOGOTIPOS -01.svg',
              description: 'Empresa líder en instalación de paneles solares industriales, sistemas fotovoltaicos para empresas, consultoría energética industrial y sistemas de almacenamiento de energía en México.',
              telephone: '+524791369896',
              email: 'info@fademex.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Querétaro',
                addressCountry: 'MX',
              },
              sameAs: [],
              areaServed: {
                '@type': 'Country',
                name: 'México',
              },
              serviceType: [
                'Instalación de paneles solares industriales',
                'Sistemas fotovoltaicos para empresas',
                'Consultoría energética industrial',
                'Sistemas de almacenamiento de energía industrial',
                'Monitoreo energético industrial',
                'Peak shaving industrial',
                'Eficiencia energética industrial',
              ],
            }),
          }}
        />
      </head>
      <body className={`${plusJakarta.className} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
