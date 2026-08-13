'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Smartphone, Store, Search } from 'lucide-react'
import CulturalBackground from './CulturalBackground'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <>
      <section className="relative min-h-[100svh] md:min-h-[90vh] flex items-center justify-center pt-28 md:pt-24 overflow-hidden bg-gradient-to-b from-blue-50/50 to-background">
        <CulturalBackground />
        {/* Background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-neon/10 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-50/80 border border-blue-100 shadow-sm text-sm font-bold text-primary mb-8 uppercase tracking-widest">
              {t('hero.eyebrow')}
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight mb-6 leading-tight text-foreground">
              {t('hero.title1')} {t('hero.title2')} <span className="text-primary">{t('hero.title3')}</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-glow-blue hover:-translate-y-1">
                {t('hero.letsTalk')} <ArrowRight size={18} />
              </a>
              <a href="#portfolio" className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 glass-panel text-foreground font-bold rounded-full hover:border-primary/50 hover:bg-white/60 transition-all hover:-translate-y-1">
                {t('hero.viewWork')}
              </a>
            </div>
            
            {/* Restaurant Solutions Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-12 md:mt-16 bg-white/70 backdrop-blur-md border border-blue-100 p-6 md:p-8 rounded-3xl text-left shadow-xl hover:shadow-2xl transition-all group flex flex-col md:flex-row items-center gap-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] -z-10 group-hover:bg-primary-neon/10 transition-colors"></div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-foreground mb-2 flex items-center gap-2">
                  <Store className="text-primary-neon" size={24} /> {t('hero.restaurantBannerTitle')}
                </h3>
                <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed max-w-xl">
                  {t('hero.restaurantBannerDesc')}
                </p>
              </div>
              
              <div className="w-full md:w-auto">
                <a href="/restaurants" className="block w-full md:w-auto text-center px-6 py-4 bg-primary-neon text-primary-dark font-black rounded-xl hover:bg-[#00d5ed] transition-all whitespace-nowrap shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] hover:-translate-y-1">
                  {t('hero.restaurantBannerBtn')}
                </a>
              </div>
            </motion.div>
            
            {/* Free Audit Magnet */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 bg-blue-50/50 backdrop-blur-sm border border-blue-100 p-6 rounded-3xl text-left flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex-1">
                <h3 className="text-lg font-bold text-primary mb-1 flex items-center gap-2">
                  <Search size={18} /> {t('hero.auditTitle')}
                </h3>
                <p className="text-gray-600 text-sm font-medium">
                  {t('hero.auditDesc')}
                </p>
              </div>
              <a href="#contact" className="text-primary font-bold hover:underline whitespace-nowrap flex items-center gap-1 text-sm">
                {t('hero.auditBtn')}
              </a>
            </motion.div>
          </motion.div>
          
          {/* Floating tech badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 md:mt-16 pb-12 flex justify-center gap-8 md:gap-12 text-gray-400"
          >
            <div className="flex flex-col items-center gap-2 hover:text-primary transition-colors cursor-default">
              <Code size={28} />
              <span className="text-sm font-bold tracking-wide">{t('hero.webDev')}</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:text-primary transition-colors cursor-default">
              <Smartphone size={28} />
              <span className="text-sm font-bold tracking-wide">{t('hero.androidApps')}</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
