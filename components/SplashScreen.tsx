'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../YSM LOGO.png'

export default function SplashScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    // Hide the splash screen after 2.5 seconds
    const timer = setTimeout(() => {
      setShow(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            exit={{ scale: 0.9, opacity: 0, filter: 'blur(5px)' }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image 
              src={logo} 
              alt="YSM Technologies Logo" 
              width={250} 
              height={100} 
              className="object-contain w-48 md:w-64 h-auto" 
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
