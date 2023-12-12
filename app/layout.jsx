import NextProvider from '../provider/nextui-provider'
import ReduxProvider from '../provider/redux-provider'

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
        <ReduxProvider>
          <NextProvider>{children}</NextProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
