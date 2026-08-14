'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Smartphone, Target, Lightbulb, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Portfolio() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t('portfolio.p1Title'),
      category: t('portfolio.p1Category'),
      goal: t('portfolio.p1Goal'),
      solution: t('portfolio.p1Solution'),
      result: t('portfolio.p1Result'),
      tech: t('portfolio.p1Tech').split(', '),
      link: "https://mezgeb.it/",
      isLive: true,
      hasAndroid: true,
    },
    {
      title: t('portfolio.p2Title'),
      category: t('portfolio.p2Category'),
      goal: t('portfolio.p2Goal'),
      solution: t('portfolio.p2Solution'),
      result: t('portfolio.p2Result'),
      tech: t('portfolio.p2Tech').split(', '),
      link: "https://sahaheating.com/",
      isLive: true,
    },
    {
      title: t('portfolio.p3Title'),
      category: t('portfolio.p3Category'),
      goal: t('portfolio.p3Goal'),
      solution: t('portfolio.p3Solution'),
      result: t('portfolio.p3Result'),
      tech: t('portfolio.p3Tech').split(', '),
      link: "https://tolo12.com/",
      isLive: true,
    },
    {
      title: t('portfolio.p4Title'),
      category: t('portfolio.p4Category'),
      goal: t('portfolio.p4Goal'),
      solution: t('portfolio.p4Solution'),
      result: t('portfolio.p4Result'),
      tech: t('portfolio.p4Tech').split(', '),
      link: "https://ysmjone-max.github.io/Habesharestorant.de/",
      isLive: true,
    }
  ]

  return (
    <section id="portfolio" className="py-16 md:py-24 relative bg-white">
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-6 text-foreground">
              {t('portfolio.title1')} <span className="text-primary">{t('portfolio.title2')}</span>
            </h2>
            <p className="text-gray-600 text-lg font-medium">
              {t('portfolio.subtitle')}
            </p>
          </div>
        </div>

        {/* FEATURED RESTAURANT PROJECT */}
        <div className="mb-16 rounded-[2rem] overflow-hidden shadow-2xl relative border border-gray-200 group">
          <div className="absolute inset-0 bg-[url('/habesha-food.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-10"></div>
          
          <div className="relative z-20 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6 border border-orange-500/30">
                🍽️ FEATURED RESTAURANT PROJECT
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-black mb-6 leading-tight drop-shadow-md">
                What if your restaurant looked like this online?
              </h3>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {["Menu", "Reservation", "WhatsApp", "Google Maps", "Multilingual"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-bold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                    <CheckCircle2 size={16} className="text-primary-neon" /> {item}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://ysmjone-max.github.io/Habesharestorant.de/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-glow-blue hover:-translate-y-1 text-center"
                >
                  View Restaurant Demo <ExternalLink size={18} />
                </a>
                <a 
                  href="#contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all text-center hover:-translate-y-1"
                >
                  Get a Free Website Review
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block w-1/3">
              <div className="aspect-[9/16] bg-black rounded-3xl border-4 border-gray-800 shadow-2xl relative overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Fake Mobile Header */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-black z-10 flex justify-center items-center">
                  <div className="w-1/3 h-4 bg-gray-900 rounded-b-xl"></div>
                </div>
                {/* Background image mimicking the mobile site */}
                <div className="absolute inset-0 bg-[url('/habesha-food.jpg')] bg-cover bg-center opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6">
                  <div className="w-full h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 shadow-lg">Book a Table</div>
                  <div className="w-full h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">Order via WhatsApp</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OTHER PROJECTS */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-gray-200 flex-1"></div>
          <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">Other Client Projects</h3>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <motion.a
              key={index}
              href={project.isLive ? project.link : undefined}
              target={project.isLive ? "_blank" : undefined}
              rel={project.isLive ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel p-6 rounded-2xl flex flex-col h-full group hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden bg-white border border-gray-100 ${project.isLive ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md ${project.isLive ? 'bg-blue-50 text-primary border border-blue-100' : 'bg-green-50 text-green-700 border border-green-100'}`}>
                    {project.category}
                  </span>
                </div>
                <div className="flex gap-2">
                  {project.hasAndroid && (
                     <span className="text-gray-400 group-hover:text-primary transition-colors">
                       <Smartphone size={18} />
                     </span>
                  )}
                  {project.isLive && (
                    <span className="text-gray-400 group-hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                    </span>
                  )}
                </div>
              </div>
              
              <h3 className="text-2xl font-extrabold text-foreground mb-6 group-hover:text-primary transition-colors">{project.title}</h3>
              
              <div className="space-y-4 flex-grow mb-6">
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1"><Target size={14}/> Goal</h4>
                  <p className="text-gray-700 text-sm">{project.goal}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1"><Lightbulb size={14}/> Solution</h4>
                  <p className="text-gray-700 text-sm">{project.solution}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-50">
                {project.tech.slice(0,4).map((tech: string, i: number) => (
                  <span key={i} className="text-[10px] px-2 py-1 bg-gray-50 text-gray-500 rounded border border-gray-100 font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
