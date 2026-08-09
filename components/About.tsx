'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import logo from '../ysm-logo.png'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  const highlights = [
    t('about.h1'),
    t('about.h2'),
    t('about.h3'),
    t('about.h4')
  ]

  return (
    <section id="about" className="py-24 relative bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[250px] md:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary-neon rounded-2xl blur-lg opacity-30"></div>
              <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden glass-panel flex items-center justify-center p-6 md:p-0">
                 <Image src={logo} alt="YSM Technologies Badge" width={300} height={300} className="object-contain w-full h-auto mix-blend-multiply" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-6 text-foreground">
              {t('about.title1')} <span className="text-primary">{t('about.title2')}</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed font-medium">
              {t('about.p1')}
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed font-medium">
              {t('about.p2')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="text-foreground font-bold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
