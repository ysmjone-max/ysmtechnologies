'use client'

import { Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import logo from '../ysm-logo.png'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-white border-t border-surfaceBorder py-12">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-4">
             <Image src={logo} alt="YSM Technologies Logo" width={120} height={35} className="object-contain mix-blend-multiply" />
          </div>
          <p className="text-gray-500 text-sm font-medium">
            {t('footer.rights', { year: currentYear.toString() })}
          </p>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a href="mailto:info@ysm-technologies.com" className="text-gray-400 hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://www.linkedin.com/in/yohannes-molla-2022baledelu/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}
