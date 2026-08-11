'use client'

import { motion } from 'framer-motion'
import { Globe, Layout, Smartphone, PenTool, Code, TrendingUp, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Globe className="text-primary" size={32} />,
      title: t('services.s1Title'),
      description: t('services.s1Desc')
    },
    {
      icon: <Layout className="text-primary" size={32} />,
      title: t('services.s2Title'),
      description: t('services.s2Desc')
    },
    {
      icon: <Smartphone className="text-primary" size={32} />,
      title: t('services.s3Title'),
      description: t('services.s3Desc')
    },
    {
      icon: <PenTool className="text-primary" size={32} />,
      title: t('services.s4Title'),
      description: t('services.s4Desc')
    },
    {
      icon: <Code className="text-primary" size={32} />,
      title: t('services.s5Title'),
      description: t('services.s5Desc')
    },
    {
      icon: <TrendingUp className="text-primary" size={32} />,
      title: t('services.s6Title'),
      description: t('services.s6Desc')
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-background relative border-y border-surfaceBorder">
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-6 text-foreground">
            {t('services.title1')} <span className="text-primary">{t('services.title2')}</span>
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 md:p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 group hover:shadow-glow-blue hover:border-primary/50 relative overflow-hidden flex flex-col h-full"
            >
              {/* Subtle Axumite corner glow */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-3xl" />

              <div className="mb-6 p-4 rounded-xl bg-blue-50 inline-block group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <div className="group-hover:brightness-200 transition-all">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-extrabold mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium mb-6">
                {service.description}
              </p>
              
              <div className="mt-auto flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform duration-300">
                <span className="mr-2">Learn More</span> <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
