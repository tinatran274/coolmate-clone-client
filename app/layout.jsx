import NextProvider from '../provider/nextui-provider'
import './globals.css'
import { Inter, Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Coolmate',
  description: 'Coolmate'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextProvider>{children}</NextProvider>
      </body>
    </html>
  )
}
