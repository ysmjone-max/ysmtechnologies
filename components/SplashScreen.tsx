'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../ysm-logo.png'

const GEEZ_CHARS = 'ሀሁሂሃሄህሆለሉሊላሌልሎሐሑሒሓሔሕሖመሙሚማሜምሞሠሡሢሣሤሥሦረሩሪራሬርሮሰሱሲሳሴስሶሸሹሺሻሼሽሾቀቁቂቃቄቅቆበቡቢባቤብቦተቱቲታቴትቶቸቹቺቻቼችቾነኑኒናኔንኖኘኙኚኛኜኝኞአኡኢኣኤእኦከኩኪካኬክኮወዉዊዋዌውዎዐዑዒዓዔዕዖዘዙዚዛዜዝዞዠዡዢዣዤዥዦየዩዪያዬይዮደዱዲዳዴድዶጀጁጂጃጄጅጆገጉጊጋጌግጎጠጡጢጣጤጥጦጨጩጪጫጬጭጮጰጱጲጳጴጵጶጸጹጺጻጼጽጾፀፁፂፃፄፅፆፈፉፊፋፌፍፎፐፑፒፓፔፕፖ';

export default function SplashScreen() {
  const [show, setShow] = useState(true)
  const [matrixText, setMatrixText] = useState('');
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    // Matrix decoding effect
    if (!showLogo) {
      interval = setInterval(() => {
        let text = '';
        for (let i = 0; i < 20; i++) {
          text += GEEZ_CHARS.charAt(Math.floor(Math.random() * GEEZ_CHARS.length));
        }
        setMatrixText(text);
      }, 50);
    }

    // Show logo after 1.5 seconds
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 1200);

    // Hide entire splash screen after 3 seconds
    const hideTimer = setTimeout(() => {
      setShow(false);
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(logoTimer);
      clearTimeout(hideTimer);
    }
  }, [showLogo])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Subtle glowing background radial for futuristic feel */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,116,199,0.05)_0%,transparent_70%)]" />

          <AnimatePresence mode="wait">
            {!showLogo ? (
              <motion.div
                key="matrix"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
                className="font-heading text-primary/80 font-bold text-2xl md:text-4xl tracking-widest text-center max-w-md break-all leading-loose shadow-glow-blue drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]"
              >
                {matrixText}
              </motion.div>
            ) : (
              <motion.div
                key="logo"
                initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
                animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                exit={{ scale: 0.9, opacity: 0, filter: 'blur(5px)' }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="absolute -inset-10 bg-primary/10 rounded-full blur-3xl" />
                <Image 
                  src={logo} 
                  alt="YSM Technologies Logo" 
                  width={250} 
                  height={100} 
                  className="mix-blend-multiply object-contain w-56 md:w-72 h-auto relative z-10" 
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
