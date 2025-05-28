import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Document Chat - Technical Interview',
  description: 'Frontend AI Engineer Technical Interview Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 