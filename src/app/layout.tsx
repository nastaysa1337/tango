import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Настасья — сайты, которые выглядят дорого',
  description: 'Премиальный сайт-портфолио Настасьи: дизайн, маркетинг, упаковка, лендинги и сайты под ключ для экспертов и бизнеса.',
  openGraph: {
    title: 'Настасья — сайты, которые выглядят дорого',
    description: 'Дизайн + маркетинг + смыслы. Сайты для экспертов, брендов и бизнеса.',
    type: 'website',
    locale: 'ru_RU',
    images: ['/og.svg']
  },
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
