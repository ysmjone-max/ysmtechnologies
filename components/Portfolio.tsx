'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Smartphone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Portfolio() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t('portfolio.p1Title'),
      category: t('portfolio.p1Category'),
      description: t('portfolio.p1Desc'),
      tech: ["Next.js", "Android SDK", "TailwindCSS"],
      link: "https://mezgeb.it/",
      isLive: true,
      hasAndroid: true,
    },
    {
      title: t('portfolio.p2Title'),
      category: t('portfolio.p2Category'),
      description: t('portfolio.p2Desc'),
      tech: ["React", "TailwindCSS", "Framer Motion"],
      link: "https://sahaheating.com/",
      isLive: true,
    },
    {
      title: t('portfolio.p3Title'),
      category: t('portfolio.p3Category'),
      description: t('portfolio.p3Desc'),
      tech: ["Next.js", "TailwindCSS"],
      link: "https://tolo12.com/",
      isLive: true,
    },
    {
      title: t('portfolio.p4Title'),
      category: t('portfolio.p4Category'),
      description: t('portfolio.p4Desc'),
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://ysmjone-max.github.io/Habesharestorant/#about",
      isLive: true,
    }
  ]

  return (
    <section id="portfolio" className="py-24 relative bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-foreground">
              {t('portfolio.title1')} <span className="text-primary">{t('portfolio.title2')}</span>
            </h2>
            <p className="text-gray-600 text-lg font-medium">
              {t('portfolio.subtitle')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface border border-surfaceBorder shadow-sm p-8 rounded-2xl flex flex-col h-full group hover:shadow-xl hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full ${project.isLive ? 'bg-blue-100 text-primary' : 'bg-green-100 text-green-700'}`}>
                    {project.category}
                  </span>
                </div>
                <div className="flex gap-3">
                  {project.hasAndroid && (
                     <span className="text-gray-400 hover:text-primary transition-colors cursor-help" title="Native Android App Available">
                       <Smartphone size={22} />
                     </span>
                  )}
                  {project.isLive && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-2xl font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow font-medium leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-md font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
