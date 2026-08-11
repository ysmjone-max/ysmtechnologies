'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../ysm-logo.png'

export default function SplashScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    // 3.8 second total animation sequence
    const timer = setTimeout(() => {
      setShow(false)
    }, 3800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            
            {/* The Shield/Lens Interface */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3.2, times: [0, 0.15, 0.85, 1], ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Outer Dashed Ring */}
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-full h-full rounded-full border-[2px] border-blue-600/20 border-dashed absolute"
              />
              {/* Middle Solid Ring with Crosshairs */}
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="w-[80%] h-[80%] rounded-full border-[1.5px] border-cyan-500/40 absolute flex items-center justify-center"
              >
                 <div className="w-full h-[1px] bg-cyan-500/30 absolute"></div>
                 <div className="h-full w-[1px] bg-cyan-500/30 absolute"></div>
                 {/* Inner geometric accent (Ethiopian shield motif) */}
                 <div className="w-[60%] h-[60%] border border-blue-600/10 rotate-45 absolute"></div>
              </motion.div>
            </motion.div>

            {/* The Logo (Revealed by scanning laser) */}
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)", scale: 0.95 }}
              animate={{ clipPath: "inset(0 0 0% 0)", scale: 1 }}
              transition={{ delay: 1, duration: 1.5, ease: "linear" }}
              className="relative z-10"
            >
              <Image 
                src={logo} 
                alt="YSM Technologies Logo" 
                width={340} 
                height={140} 
                className="object-contain w-56 md:w-72 h-auto" 
                priority
              />
            </motion.div>

            {/* The Cyber Scanning Laser */}
            <motion.div
              initial={{ top: "0%", opacity: 0 }}
              animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
              transition={{ delay: 1, duration: 1.5, times: [0, 0.05, 0.95, 1], ease: "linear" }}
              className="absolute left-[10%] right-[10%] h-[3px] bg-cyan-500 shadow-[0_0_20px_6px_rgba(6,182,212,0.4)] z-20"
            ></motion.div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
