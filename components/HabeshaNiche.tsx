'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Globe2, Store, Users, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import Link from 'next/link'

export default function HabeshaNiche() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-primary text-white">
      {/* Abstract Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-neon rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left Column: Context */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-6 leading-tight">
              {t('habesha.title1')} <br />
              <span className="text-primary-neon">{t('habesha.title2')}</span>
            </h2>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed font-medium">
              {t('habesha.subtitle')}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Store className="text-primary-neon" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Local Restaurants & Retail</h4>
                  <p className="text-blue-200 text-sm leading-relaxed">Helping brick-and-mortar businesses establish a commanding digital presence.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Globe2 className="text-primary-neon" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Service & Tech Startups</h4>
                  <p className="text-blue-200 text-sm leading-relaxed">Custom platforms built for scale, performance, and aggressive growth.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Habesha Focus */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-primary-neon/50 transition-colors duration-500"
          >
            {/* Subtle glow inside the card */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-neon/20 border border-primary-neon/30 text-primary-neon text-xs font-bold uppercase tracking-wider mb-8">
                <Users size={14} /> Community Focus
              </div>
              
              <h3 className="text-2xl md:text-3xl font-extrabold mb-6">
                {t('habesha.highlightTitle')}
              </h3>
              
              <p className="text-blue-100 mb-8 leading-relaxed font-medium">
                {t('habesha.highlightDesc')}
              </p>
              
              {/* Highlight specific countries/locations visually */}
              <div className="flex flex-wrap gap-3 mb-10">
                <div className="px-3 py-1.5 bg-white/10 rounded-md text-sm font-medium flex items-center gap-2">
                  <MapPin size={14} className="text-primary-neon" /> UK
                </div>
                <div className="px-3 py-1.5 bg-white/10 rounded-md text-sm font-medium flex items-center gap-2">
                  <MapPin size={14} className="text-primary-neon" /> Germany
                </div>
                <div className="px-3 py-1.5 bg-white/10 rounded-md text-sm font-medium flex items-center gap-2">
                  <MapPin size={14} className="text-primary-neon" /> Italy
                </div>
                <div className="px-3 py-1.5 bg-white/10 rounded-md text-sm font-medium flex items-center gap-2">
                  <MapPin size={14} className="text-primary-neon" /> Europe
                </div>
              </div>

              <Link 
                href="/restaurants" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-primary-neon hover:text-white transition-all shadow-lg hover:shadow-primary-neon/50"
              >
                {t('habesha.cta')} <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
