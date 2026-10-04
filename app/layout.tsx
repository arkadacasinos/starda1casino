import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-serif',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0d12" />
        <title>
          Starda Casino официальный сайт — играть онлайн, зеркало рабочее и вход
          в казино
        </title>
        <meta
          name="description"
          content="Starda Casino официальный сайт: регистрация, вход, рабочее зеркало и игра онлайн. Старда Казино — слоты, бонусы и быстрые выплаты. Актуальная ссылка на зеркало Старда Казино."
        />
        <link rel="canonical" href="https://starda1casino.vercel.app/" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1"
        />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content="https://starda1casino.vercel.app/" />
        <meta property="og:site_name" content="Starda Casino" />
        <meta
          property="og:title"
          content="Starda Casino официальный сайт — играть онлайн и зеркало рабочее"
        />
        <meta
          property="og:description"
          content="Starda Casino официальный сайт: регистрация, вход, рабочее зеркало и игра онлайн. Старда Казино — слоты, бонусы и быстрые выплаты."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Starda Casino официальный сайт — играть онлайн и зеркало рабочее"
        />
        <meta
          name="twitter:description"
          content="Starda Casino официальный сайт: регистрация, вход, рабочее зеркало и игра онлайн."
        />
      </head>
      <body className="x4v7-body">{children}</body>
    </html>
  )
}
