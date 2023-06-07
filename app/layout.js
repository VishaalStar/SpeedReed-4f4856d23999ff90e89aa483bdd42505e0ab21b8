'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './navbar'
import Topbar from './topbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`{inter.className} border-gray-200 bg-gray-50 dark:bg-gray-900 dark:border-gray-700 `}><Topbar/><Navbar />{children}<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script></body>
    </html>
  )
}