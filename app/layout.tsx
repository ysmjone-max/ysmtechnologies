import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import { LanguageProvider } from '@/context/LanguageContext'


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'YSM Technologies | Custom Web & Mobile App Development',
  description: 'Senior full-stack web developer and UI/UX designer specializing in custom website development for restaurants, local businesses, and native Android applications.',
  openGraph: {
    title: 'YSM Technologies | Web & Mobile Solutions',
    description: 'We build professional websites, digital menus, booking systems and custom digital solutions for businesses across Europe.',
    url: 'https://ysm-technologies.com',
    siteName: 'YSM Technologies',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'YSM Technologies Restaurant Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
            <WhatsAppCTA />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
