import Hero from '@/components/Hero'
import Services from '@/components/Services'
import HabeshaNiche from '@/components/HabeshaNiche'
import Portfolio from '@/components/Portfolio'
import TrustAndProcess from '@/components/TrustAndProcess'
import Contact from '@/components/Contact'
import SplashScreen from '@/components/SplashScreen'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30">
      <SplashScreen />
      <Hero />
      <Services />
      <HabeshaNiche />
      <Portfolio />
      <TrustAndProcess />
      <Contact />
    </main>
  )
}
