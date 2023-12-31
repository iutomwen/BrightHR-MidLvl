import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <main className=' max-w-6xl m-10 items-start flex border rounded-md shadow-lg h-screen p-5'>
        {children}  
        </main>
        </body>
    </html>
  )
}
