'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import logo from '../ysm-logo.png'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-surface/90 backdrop-blur-md border-b border-surfaceBorder py-0 md:py-0' : 'bg-transparent py-0 md:py-1'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center">
           <Image src={logo} alt="YSM Technologies Logo" width={160} height={160} className="-my-6 md:-my-12 w-32 md:w-[160px] h-auto object-contain mix-blend-multiply" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all shadow-[0_4px_14px_0_rgba(0,116,199,0.39)] hover:shadow-[0_6px_20px_rgba(0,116,199,0.23)] hover:-translate-y-0.5">
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-surfaceBorder py-4 px-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary font-semibold">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="px-6 py-3 text-center bg-primary text-white font-semibold rounded-lg shadow-md">
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  )
}
