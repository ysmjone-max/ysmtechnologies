'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import logo from '../YSM LOGO.png'

export default function About() {
  const highlights = [
    "Full-Stack Web Development",
    "UI/UX Design & Prototyping",
    "Native Android Applications",
    "SEO & Performance Optimization"
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
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-green-500 rounded-2xl blur-lg opacity-20"></div>
              <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-surface flex items-center justify-center border border-surfaceBorder shadow-lg p-6 md:p-0">
                 <Image src={logo} alt="YSM Technologies Badge" width={300} height={300} className="object-contain w-full h-auto" />
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
              Engineering Digital <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed font-medium">
              Based on years of experience, I specialize in transforming complex requirements into elegant, high-performance web applications and native Android software. Whether it's a bespoke platform for a service-based business or a comprehensive financial tracking tool, I deliver end-to-end solutions that drive results.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed font-medium">
              My approach blends cutting-edge technologies with intuitive UI/UX design to ensure your digital presence is not only beautiful but built for conversion and scale.
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
