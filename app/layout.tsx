import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

/*
 * Playfair Display — usada em headings (h1, h2, títulos de cards)
 * Carregamos os pesos e itálico necessários para o design
 */
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

/*
 * DM Sans — fonte do corpo, labels, navegação
 * Leve e legível em qualquer tamanho
 */
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LCNV | Contabilidade',
  description:
    'Escritório de contabilidade especializado em abertura de empresas, consultoria fiscal e planejamento tributário. Atendimento personalizado e tecnologia integrada.',
  keywords: [
    'contabilidade',
    'abertura de empresa',
    'consultoria fiscal',
    'planejamento tributário',
    'contador',
    'MEI',
    'São Paulo',
  ],
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${dmSans.variable} bg-background scroll-smooth`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}