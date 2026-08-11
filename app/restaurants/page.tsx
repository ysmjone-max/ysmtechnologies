import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Utensils, Globe2, Smartphone, CheckCircle2, MessageSquare, QrCode } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digital Solutions for Restaurants | YSM Technologies',
  description: 'Custom websites, digital menus, and online ordering systems designed specifically for restaurants, cafes, and food businesses.',
}

export default function RestaurantsLandingPage() {
  const packages = [
    {
      name: "YSM Restaurant Starter",
      target: "For small cafés and new restaurants",
      features: [
        "Modern, Responsive Website",
        "Digital PDF Menu Integration",
        "Google Business Profile Setup",
        "WhatsApp Contact Button",
        "Basic SEO (Local Search)",
        "Mobile-First Design"
      ]
    },
    {
      name: "Restaurant Growth",
      target: "For established restaurants looking to scale",
      popular: true,
      features: [
        "Everything in Starter, plus:",
        "Interactive Digital Menu (QR Code ready)",
        "Table Reservation System (Email/WhatsApp)",
        "Multilingual Support (2 Languages)",
        "Social Media Integration",
        "Performance Analytics Setup"
      ]
    },
    {
      name: "Restaurant Pro",
      target: "For high-volume restaurants and chains",
      features: [
        "Everything in Growth, plus:",
        "Custom Online Ordering System",
        "Payment Gateway Integration",
        "Customer Account & Loyalty Features",
        "Multilingual Support (Up to 5 Languages)",
        "Advanced Local SEO Strategy"
      ]
    }
  ]

  const features = [
    { icon: <QrCode className="text-primary" size={32} />, title: "QR Digital Menus", desc: "Easily update your menu items, prices, and specials without printing costs." },
    { icon: <Smartphone className="text-primary" size={32} />, title: "Mobile Optimized", desc: "Over 80% of restaurant searches happen on mobile. We ensure your site looks perfect on all devices." },
    { icon: <Globe2 className="text-primary" size={32} />, title: "Multilingual Support", desc: "Serve a diverse customer base with native language support for English, Italian, German, Amharic, and Tigrinya." },
    { icon: <MessageSquare className="text-primary" size={32} />, title: "WhatsApp Integration", desc: "Let customers book tables or ask questions directly through WhatsApp." }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative mt-12 md:mt-16 lg:mt-20 pt-16 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-background"></div>
        
        <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-neon text-sm font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
            <Utensils size={16} /> Restaurant Solutions
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight mb-8 leading-tight drop-shadow-lg">
            Give Your Restaurant the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-neon to-blue-200">Digital Presence It Deserves</span>
          </h1>
          
          <p className="text-xl text-blue-50/90 mb-10 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Stop losing customers to outdated websites. We build modern, fast, and conversion-optimized digital experiences that turn hungry visitors into loyal diners.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#packages" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-glow-blue hover:-translate-y-1">
              View Packages <ArrowRight size={18} />
            </a>
            <Link href="/#contact" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all hover:-translate-y-1">
              Get a Free Website Review
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-6 text-foreground">
              See It In <span className="text-primary">Action</span>
            </h2>
            <p className="text-foreground/70 text-lg font-medium">
              Explore "Habesha Restaurant", our fully functional demo showcasing authentic design, dynamic digital menus, and seamless WhatsApp ordering integration.
            </p>
          </div>
          
          <div className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
            <div className="aspect-[16/9] bg-gray-100 relative">
              {/* Fake browser UI */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-gray-200 flex items-center px-4 gap-2 z-10 border-b border-gray-300">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-4 bg-white px-4 py-1 rounded text-xs text-gray-500 w-64 text-left font-mono">ysmjone-max.github.io/Habesharestorant.de/</div>
              </div>
              <div className="absolute inset-0 mt-10 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col items-center justify-end p-12 text-white text-center">
                  <h3 className="text-4xl font-heading font-black mb-3 text-primary-neon drop-shadow-md">Habesha Restaurant Demo</h3>
                  <p className="text-blue-50/90 mb-8 max-w-lg font-medium text-lg drop-shadow-sm">Experience a premium, high-converting digital storefront designed to capture the essence of your culinary brand and drive direct bookings.</p>
                 <a 
                   href="https://ysmjone-max.github.io/Habesharestorant.de/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all flex items-center gap-2 shadow-lg"
                 >
                   Open Live Demo <ExternalLinkIcon />
                 </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-blue-50/50">
        <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4 text-foreground">Everything You Need</h2>
            <p className="text-foreground/70 text-lg font-medium">Built specifically for the operational realities of modern food businesses.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-blue-50 hover:-translate-y-1 transition-transform">
                <div className="mb-6 p-4 rounded-xl bg-blue-50 inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-extrabold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-6 text-foreground">
              Simple, Transparent <span className="text-primary">Packages</span>
            </h2>
            <p className="text-foreground/70 text-lg font-medium">
              We've productized our services to give you exactly what you need without the guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
            {packages.map((pkg, i) => (
              <div 
                key={i} 
                className={`relative flex flex-col p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
                  pkg.popular 
                  ? 'bg-primary text-white shadow-2xl scale-100 lg:scale-105 z-10 border border-primary-neon/30' 
                  : 'bg-white text-foreground border border-gray-200 hover:border-primary/50 hover:shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-neon text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-extrabold mb-2">{pkg.name}</h3>
                <p className={`text-sm mb-8 font-bold tracking-wide ${pkg.popular ? 'text-primary-neon' : 'text-primary/80'}`}>
                  {pkg.target}
                </p>
                
                <div className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className={`shrink-0 ${pkg.popular ? 'text-primary-neon' : 'text-primary'}`} />
                      <span className={`text-sm font-medium ${pkg.popular ? 'text-white/90' : 'text-foreground/80'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href="/#contact"
                  className={`w-full py-4 text-center font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                    pkg.popular
                    ? 'bg-white text-primary hover:bg-gray-50'
                    : 'bg-gray-100 text-foreground hover:bg-primary hover:text-white'
                  }`}
                >
                  Request Details <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 text-foreground/60 text-sm font-bold">
            Not sure which package is right for you? <Link href="/#contact" className="text-primary hover:underline">Contact us for a free consultation.</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  )
}
