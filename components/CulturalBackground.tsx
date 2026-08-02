'use client'

import { motion } from 'framer-motion'

export default function CulturalBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.03]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tibeb-symbolism" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
            {/* Base Diamond */}
            <path d="M80 20 L140 80 L80 140 L20 80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            {/* Inner Cross Structure */}
            <path d="M80 40 L120 80 L80 120 L40 80 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M80 10 L80 150 M10 80 L150 80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            {/* Axumite / Stepped Cross Corners */}
            <rect x="70" y="10" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="70" y="130" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="10" y="70" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="130" y="70" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
            
            {/* Center intricate cross */}
            <path d="M70 70 L90 70 L90 90 L70 90 Z" fill="currentColor" />
            <path d="M75 60 L85 60 L85 70 L75 70 Z M75 90 L85 90 L85 100 L75 100 Z M60 75 L70 75 L70 85 L60 85 Z M90 75 L100 75 L100 85 L90 85 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#tibeb-symbolism)" className="text-primary" />
      </svg>
      
      {/* Soft gradient mask to fade the pattern beautifully */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
    </div>
  )
}
