'use client'

import { motion } from 'framer-motion'

export default function TibebRibbon() {
  return (
    <div className="w-full h-3 md:h-4 overflow-hidden relative opacity-90">
      <motion.div 
        className="absolute inset-0 tibeb-pattern"
        animate={{
          backgroundPosition: ["0px 0px", "56px 56px"]
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 3
        }}
      />
    </div>
  )
}
