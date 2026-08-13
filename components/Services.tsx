'use client'

import { motion } from 'framer-motion'
import { Globe, Layout, Smartphone, ArrowRight, Utensils, Rocket, Briefcase } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Briefcase className="text-primary" size={32} />,
      category: t('services.s1Category'),
      title: t('services.s1Title'),
      description: t('services.s1Desc'),
      link: "/#contact"
    },
    {
      icon: <Utensils className="text-primary" size={32} />,
      category: t('services.s2Category'),
      title: t('services.s2Title'),
      description: t('services.s2Desc'),
      link: "/restaurants"
    },
    {
      icon: <Rocket className="text-primary" size={32} />,
      category: t('services.s3Category'),
      title: t('services.s3Title'),
      description: t('services.s3Desc'),
      link: "/#contact"
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-background relative border-y border-surfaceBorder">
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-6 text-foreground">
            {t('services.title1')} <span className="text-primary">{t('services.title2')}</span>
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.a
              href={service.link}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 group hover:shadow-2xl hover:border-primary/50 relative overflow-hidden flex flex-col h-full bg-white border border-gray-100"
            >
              {/* Subtle Axumite corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-[4rem]" />

              <div className="mb-6 p-4 rounded-2xl bg-blue-50/50 inline-flex group-hover:bg-primary group-hover:text-white transition-colors duration-300 border border-blue-100/50">
                <div className="group-hover:brightness-200 transition-all">
                  {service.icon}
                </div>
              </div>
              
              <span className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">{service.category}</span>
              <h3 className="text-2xl font-extrabold mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium mb-8 text-base">
                {service.description}
              </p>
              
              <div className="mt-auto flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform duration-300 bg-blue-50/30 self-start px-4 py-2 rounded-lg">
                <span className="mr-2">Learn More</span> <ArrowRight size={16} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
