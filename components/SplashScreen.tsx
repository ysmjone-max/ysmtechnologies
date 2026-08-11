'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../ysm-logo.png'

export default function SplashScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    // Show the logo for a brief moment, then fade out the splash screen
    const timer = setTimeout(() => {
      setShow(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image 
              src={logo} 
              alt="YSM Technologies Logo" 
              width={340} 
              height={140} 
              className="object-contain w-64 md:w-80 h-auto drop-shadow-md" 
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
