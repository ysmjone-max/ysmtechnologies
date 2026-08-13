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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.isLive ? project.link : undefined}
              target={project.isLive ? "_blank" : undefined}
              rel={project.isLive ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel p-8 rounded-3xl flex flex-col h-full group hover:shadow-2xl hover:border-primary/50 transition-all duration-300 relative overflow-hidden bg-white border border-gray-200 ${project.isLive ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-[4rem]" />

              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg ${project.isLive ? 'bg-blue-50 text-primary border border-blue-100' : 'bg-green-50 text-green-700 border border-green-100'}`}>
                    {project.category}
                  </span>
                </div>
                <div className="flex gap-4">
                  {project.hasAndroid && (
                     <span className="text-gray-400 group-hover:text-primary transition-colors" title="Native Android App Available">
                       <Smartphone size={24} />
                     </span>
                  )}
                  {project.isLive && (
                    <span className="text-gray-400 group-hover:text-primary transition-colors">
                      <ExternalLink size={24} />
                    </span>
                  )}
                </div>
              </div>
              
              <h3 className="text-3xl font-extrabold text-foreground mb-8 group-hover:text-primary transition-colors">{project.title}</h3>
              
              <div className="space-y-6 flex-grow mb-10">
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-red-400"><Target size={20} /></div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Goal</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.goal}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-yellow-500"><Lightbulb size={20} /></div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Solution</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 text-green-500"><CheckCircle2 size={20} /></div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Result</h4>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">{project.result}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-100">
                {project.tech.map((tech: string, i: number) => (
                  <span key={i} className="text-xs px-3 py-1.5 bg-gray-50 text-gray-500 rounded-md font-semibold border border-gray-200">
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
