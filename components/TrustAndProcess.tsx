'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Shield, Settings, MessageSquare, HeadphonesIcon, Workflow, Users, TrendingUp, Code2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function TrustAndProcess() {
  const { t } = useLanguage()

  const trustPoints = [
    { icon: <Users size={24} />, title: t('trust.t1Title'), desc: t('trust.t1Desc') },
    { icon: <TrendingUp size={24} />, title: t('trust.t2Title'), desc: t('trust.t2Desc') },
    { icon: <Code2 size={24} />, title: t('trust.t3Title'), desc: t('trust.t3Desc') },
    { icon: <MessageSquare size={24} />, title: t('trust.t4Title'), desc: t('trust.t4Desc') },
    { icon: <Settings size={24} />, title: t('trust.t5Title'), desc: t('trust.t5Desc') },
    { icon: <HeadphonesIcon size={24} />, title: t('trust.t6Title'), desc: t('trust.t6Desc') },
  ]

  const processSteps = [
    { num: "01", title: t('process.p1Title'), desc: t('process.p1Desc') },
    { num: "02", title: t('process.p2Title'), desc: t('process.p2Desc') },
    { num: "03", title: t('process.p3Title'), desc: t('process.p3Desc') },
    { num: "04", title: t('process.p4Title'), desc: t('process.p4Desc') },
  ]

  return (
    <section className="py-16 md:py-24 bg-blue-50/30 border-y border-blue-100">
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
        
        {/* Trust Section */}
        <div className="mb-20 md:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-primary text-sm font-bold uppercase tracking-widest mb-6">
              <Shield size={16} /> Trust & Reliability
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-6 text-foreground">
              {t('trust.title1')} <span className="text-primary">{t('trust.title2')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {trustPoints.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-blue-50 flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-blue-50 text-primary rounded-xl shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-foreground">{point.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-primary text-sm font-bold uppercase tracking-widest mb-6">
              <Workflow size={16} /> How We Work
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground">
              {t('process.title1')} <span className="text-primary">{t('process.title2')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2 -z-10" />

            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-blue-50 text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-primary text-white text-2xl font-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow-blue group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h4 className="font-bold text-xl mb-3 text-foreground">{step.title.split('—')[1]?.trim() || step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
