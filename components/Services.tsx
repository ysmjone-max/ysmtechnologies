'use client'

import { motion } from 'framer-motion'
import { Layout, Smartphone, Globe, Zap } from 'lucide-react'

const services = [
  {
    icon: <Globe className="text-primary" size={32} />,
    title: "Custom Website Development",
    description: "High-converting, responsive websites tailored for restaurants, tradesmen, and local businesses designed to attract and retain clients."
  },
  {
    icon: <Layout className="text-primary" size={32} />,
    title: "Web Applications",
    description: "Complex, scalable full-stack web applications with intuitive dashboards, robust backends, and seamless user experiences."
  },
  {
    icon: <Smartphone className="text-primary" size={32} />,
    title: "Native Android Apps",
    description: "High-performance native Android applications built from the ground up for seamless hardware integration and optimal user engagement."
  },
  {
    icon: <Zap className="text-primary" size={32} />,
    title: "UI/UX & Branding",
    description: "Modern, aesthetic, and user-centric interfaces. From wireframes to final pixel-perfect designs that elevate your brand identity."
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative border-y border-surfaceBorder">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-foreground">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            Comprehensive technical solutions designed to scale your business and establish a dominant digital footprint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group border border-surfaceBorder shadow-sm hover:shadow-xl hover:border-primary/30"
            >
              <div className="mb-6 p-4 rounded-xl bg-blue-50 inline-block group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <div className="group-hover:brightness-200 transition-all">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-extrabold mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
