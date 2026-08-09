'use client'

import { motion } from 'framer-motion'
import { Send, Phone, Mail } from 'lucide-react'
import CulturalBackground from './CulturalBackground'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <>
      <section id="contact" className="py-24 relative overflow-hidden bg-background border-t border-surfaceBorder">
        <CulturalBackground />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-foreground">
                  {t('contact.title1')} <span className="text-primary">{t('contact.title2')}</span>
                </h2>
                <p className="text-gray-600 text-lg mb-10 max-w-lg leading-relaxed font-medium">
                  {t('contact.subtitle')}
                </p>
                
                <div className="space-y-6">
                  <a href="https://wa.me/393516616111" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white border border-surfaceBorder rounded-xl hover:border-primary/50 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-foreground font-extrabold text-lg">{t('contact.whatsappTitle')}</h4>
                      <p className="text-gray-500 text-sm font-medium">{t('contact.whatsappDesc')}</p>
                    </div>
                  </a>

                  <a href="mailto:info@ysm-technologies.com" className="flex items-center gap-4 p-4 bg-white border border-surfaceBorder rounded-xl hover:border-green-500/50 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-foreground font-extrabold text-lg">{t('contact.emailTitle')}</h4>
                      <p className="text-gray-500 text-sm font-medium">info@ysm-technologies.com</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-surfaceBorder shadow-lg p-8 md:p-10 rounded-2xl relative"
              >
                <h3 className="text-2xl font-extrabold text-foreground mb-6">{t('contact.reqQuote')}</h3>
                <form className="space-y-6" action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">{t('contact.name')}</label>
                      <input type="text" className="w-full bg-background border border-surfaceBorder rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder={t('contact.namePlaceholder')} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">{t('contact.emailLabel')}</label>
                      <input type="email" className="w-full bg-background border border-surfaceBorder rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder={t('contact.emailPlaceholder')} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">{t('contact.projectType')}</label>
                    <select className="w-full bg-background border border-surfaceBorder rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none">
                      <option>{t('contact.ptOption1')}</option>
                      <option>{t('contact.ptOption2')}</option>
                      <option>{t('contact.ptOption3')}</option>
                      <option>{t('contact.ptOption4')}</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">{t('contact.message')}</label>
                    <textarea rows={4} className="w-full bg-background border border-surfaceBorder rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder={t('contact.messagePlaceholder')}></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-primary text-white font-extrabold rounded-lg hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(0,116,199,0.39)] hover:shadow-[0_6px_20px_rgba(0,116,199,0.23)] hover:-translate-y-0.5">
                    {t('contact.sendMsg')} <Send size={18} />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
