import type { Metadata } from 'next'
import { Young_Serif, Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const young_serif = Young_Serif({ subsets: ['latin'], weight: '400', variable: '--font-young-serif' })

export const metadata: Metadata = {
  title: 'Recipe page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${
          (outfit.variable, young_serif.variable)
        } antialiased font-outfit`}
      >
        {children}
      </body>
    </html>
  )
}
