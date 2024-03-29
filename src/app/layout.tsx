import type {Metadata} from 'next'
import {Inter, Noto_Sans_JP, Oswald} from 'next/font/google'
import './globals.css'
import {Conference} from "@/app/variables";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const notojp = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-noto-sans-jp',
});

const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-oswald',
});

export const metadata: Metadata = {
  title: Conference.name,
  description: 'PyCon JPは、Pythonユーザが集まり、PythonやPythonを使ったソフトウェアについて情報交換、交流をするためのカンファレンスです。',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${notojp.variable} ${oswald.variable}`}>
    <body className='font-body bg-rectangle text-white'>
    {children}
    </body>
    </html>
  )
}
