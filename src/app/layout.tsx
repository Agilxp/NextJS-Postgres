import './globals.css'
import {ReactNode} from 'react'
import {Metadata} from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || ''),
  viewport: 'width=device-width, initial-scale=1',
  title: 'Dugnad Lotteri',
  description: 'App som la deg selge lotteri billett med Vipps betaling. Du bestemmer når trekningen skjer og premiene selv.',
  icons: {
    icon: '/main-ico.png',
    apple: '/main-ico.png'
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="nb">
      <body className=''>{children}</body>
    </html>
  )
}
