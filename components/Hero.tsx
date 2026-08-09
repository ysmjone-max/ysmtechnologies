'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Smartphone } from 'lucide-react'
import CulturalBackground from './CulturalBackground'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-b from-blue-50/50 to-background">
        <CulturalBackground />
        {/* Background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-neon/10 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-sm font-bold text-primary mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t('hero.availability')}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-6 leading-tight text-foreground">
              {t('hero.title1')} {t('hero.title2')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-neon drop-shadow-sm">{t('hero.title3')}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-glow-blue hover:-translate-y-1">
                {t('hero.viewWork')} <ArrowRight size={18} />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 glass-panel text-foreground font-bold rounded-full hover:border-primary/50 hover:bg-white/60 transition-all hover:-translate-y-1">
                {t('hero.letsTalk')}
              </a>
            </div>
          </motion.div>
          
          {/* Floating tech badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20 flex justify-center gap-12 text-gray-400"
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
