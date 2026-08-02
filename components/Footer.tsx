import { Github, Twitter, Linkedin } from 'lucide-react'
import Image from 'next/image'
import logo from '../7.png'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-surfaceBorder py-12">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="mb-4">
             <Image src={logo} alt="YSM Technologies Logo" width={120} height={35} className="object-contain" />
          </div>
          <p className="text-gray-500 text-sm font-medium">
            © {currentYear} YSM Technologies. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/ysmjone-max" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}
