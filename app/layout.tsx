import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Playpen_Sans } from 'next/font/google'
const playpen_Sans = Playpen_Sans({
  weight: ['800'],
  subsets: ['latin']
})

import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hanabi Card Assistant',
  description: 'ボードゲーム「花火」の手札情報を管理'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={playpen_Sans.className}>{children}</body>
    </html>
  )
}
