'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    hasWebsite: '',
    businessType: '',
    projectType: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        hasWebsite: '',
        businessType: '',
        projectType: '',
        message: ''
      })
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 md:py-24 relative bg-background">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-neon/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column - Copy & Direct Contact */}
          <div className="lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-6 text-foreground">
                {t('contact.title1')} <span className="text-primary">{t('contact.title2')}</span>
              </h2>
              <p className="text-gray-600 text-lg mb-12 font-medium leading-relaxed">
                {t('contact.subtitle')}
              </p>

              <div className="space-y-6">
                {/* WhatsApp Direct Option */}
                <a 
                  href={`https://wa.me/393516616111?text=${encodeURIComponent("Hi YSM Technologies, I'd like to discuss a project.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-green-50 border border-green-100 hover:shadow-md hover:-translate-y-1 transition-all group"
                >
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{t('contact.whatsappTitle')}</h4>
                    <p className="text-sm text-green-700 font-medium">{t('contact.whatsappDesc')}</p>
                  </div>
                </a>

                {/* Email Direct Option */}
                <a 
                  href="mailto:info@ysm-technologies.com"
                  className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:shadow-md hover:-translate-y-1 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{t('contact.emailTitle')}</h4>
                    <p className="text-sm text-gray-500 font-medium">info@ysm-technologies.com</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - High Conversion Form */}
          <div className="lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden"
            >
              {isSuccess && (
                <div className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center backdrop-blur-sm rounded-2xl p-8 text-center">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                  <p className="text-gray-600 font-medium">We'll be in touch shortly to discuss your project.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">{t('contact.name')}</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.namePlaceholder')}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-bold text-gray-700 mb-2">{t('contact.businessName')}</label>
                    <input 
                      type="text" 
                      id="businessName" 
                      name="businessName" 
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder={t('contact.businessPlaceholder')}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                {/* 2. Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">{t('contact.emailLabel')}</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.emailPlaceholder')}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">{t('contact.phoneLabel')}</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.phonePlaceholder')}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                {/* 3. Prequalification Dropdowns */}
                
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-gray-700">{t('contact.hasWebsite')}</label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="hasWebsite" 
                        value="Yes" 
                        onChange={handleChange}
                        className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                        required
                      />
                      <span className="text-sm font-medium text-gray-700">{t('contact.hasWebsiteYes')}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="hasWebsite" 
                        value="No" 
                        onChange={handleChange}
                        className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                        required
                      />
                      <span className="text-sm font-medium text-gray-700">{t('contact.hasWebsiteNo')}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="hasWebsite" 
                        value="Not sure" 
                        onChange={handleChange}
                        className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                        required
                      />
                      <span className="text-sm font-medium text-gray-700">{t('contact.hasWebsiteNotSure')}</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-bold text-gray-700 mb-2">{t('contact.businessType')}</label>
                    <select 
                      id="businessType" 
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-gray-700"
                    >
                      <option value="" disabled>Select business type</option>
                      <option value="restaurant">{t('contact.btRestaurant')}</option>
                      <option value="cafe">{t('contact.btCafe')}</option>
                      <option value="shop">{t('contact.btShop')}</option>
                      <option value="service">{t('contact.btService')}</option>
                      <option value="startup">{t('contact.btStartup')}</option>
                      <option value="ngo">{t('contact.btNgo')}</option>
                      <option value="other">{t('contact.btOther')}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-bold text-gray-700 mb-2">{t('contact.biggestChallenge')}</label>
                    <select 
                      id="projectType" 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-gray-700"
                    >
                      <option value="" disabled>Select option</option>
                      <option value="customers">{t('contact.chCustomers')}</option>
                      <option value="website">{t('contact.chWebsite')}</option>
                      <option value="booking">{t('contact.chBooking')}</option>
                      <option value="menu">{t('contact.chMenu')}</option>
                      <option value="google">{t('contact.chGoogle')}</option>
                      <option value="ordering">{t('contact.chOrdering')}</option>
                      <option value="social">{t('contact.chSocial')}</option>
                      <option value="other">{t('contact.chOther')}</option>
                    </select>
                  </div>
                </div>

                {/* 4. Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">{t('contact.message')}</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.messagePlaceholder')}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all flex justify-center items-center gap-2 shadow-glow-blue disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full"></span>
                  ) : (
                    <>
                      {t('contact.sendMsg')} <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
