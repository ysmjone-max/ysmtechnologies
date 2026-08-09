'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import logo from '../ysm-logo.png'

const GEEZ_CHARS = 'ሀሁሂሃሄህሆለሉሊላሌልሎሐሑሒሓሔሕሖመሙሚማሜምሞሠሡሢሣሤሥሦረሩሪራሬርሮሰሱሲሳሴስሶሸሹሺሻሼሽሾቀቁቂቃቄቅቆበቡቢባቤብቦተቱቲታቴትቶቸቹቺቻቼችቾነኑኒናኔንኖኘኙኚኛኜኝኞአኡኢኣኤእኦከኩኪካኬክኮወዉዊዋዌውዎዐዑዒዓዔዕዖዘዙዚዛዜዝዞዠዡዢዣዤዥዦየዩዪያዬይዮደዱዲዳዴድዶጀጁጂጃጄጅጆገጉጊጋጌግጎጠጡጢጣጤጥጦጨጩጪጫጬጭጮጰጱጲጳጴጵጶጸጹጺጻጼጽጾፀፁፂፃፄፅፆፈፉፊፋፌፍፎፐፑፒፓፔፕፖ';

export default function SplashScreen() {
  const [show, setShow] = useState(true)
  const [phase, setPhase] = useState(1) 
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Phase 1 to Phase 2
    const timer1 = setTimeout(() => {
      setPhase(2)
    }, 2800) 

    // Hide completely
    const timer2 = setTimeout(() => {
      setShow(false)
    }, 4500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  // Matrix Rain Canvas Effect
  useEffect(() => {
    if (phase !== 1 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    // willReadFrequently optimizes performance since we are getting image data
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const fontSize = window.innerWidth < 768 ? 12 : 16;
    const columns = Math.floor(canvas.width / fontSize);
    
    const logoW = window.innerWidth < 768 ? 250 : 340;
    const logoH = window.innerWidth < 768 ? 100 : 140;

    let maskData: { y: number, color: string }[][] = [];
    const drops: number[] = [];
    const dropSpeeds: number[] = [];
    const dropOpacities: number[] = [];
    
    const img = new window.Image();
    img.src = logo.src;
    
    let interval: NodeJS.Timeout;

    img.onload = () => {
      // 1. Draw logo to offscreen canvas
      const offCanvas = document.createElement('canvas');
      offCanvas.width = logoW;
      offCanvas.height = logoH;
      const offCtx = offCanvas.getContext('2d', { willReadFrequently: true });
      if (!offCtx) return;
      
      offCtx.drawImage(img, 0, 0, logoW, logoH);
      const imgData = offCtx.getImageData(0, 0, logoW, logoH).data;

      // 2. Build grid-aligned mask targets
      const logoLeft = canvas.width / 2 - logoW / 2;
      const logoTop = canvas.height / 2 - logoH / 2;

      for (let i = 0; i < columns; i++) {
        const cellX = i * fontSize + (fontSize / 2);
        maskData[i] = [];

        if (cellX >= logoLeft && cellX <= logoLeft + logoW) {
          const imgX = Math.floor(cellX - logoLeft);
          
          for (let y = canvas.height; y >= 0; y -= fontSize) {
            if (y >= logoTop && y <= logoTop + logoH) {
              const imgY = Math.floor(y - logoTop);
              const dataIndex = (imgY * logoW + imgX) * 4;
              const alpha = imgData[dataIndex + 3];
              
              if (alpha > 30) {
                // Feature 1: Exact Color Mapping
                const r = imgData[dataIndex];
                const g = imgData[dataIndex + 1];
                const b = imgData[dataIndex + 2];
                maskData[i].push({ y, color: `rgb(${r},${g},${b})` });
              }
            }
          }
          // Foreground parameters
          drops[i] = (Math.random() * -20); 
          dropSpeeds[i] = 1; 
          dropOpacities[i] = 1; 
        } else {
          // Feature 2: 3D Parallax Rain in periphery
          drops[i] = Math.random() > 0.3 ? -10000 : (Math.random() * -100);
          dropSpeeds[i] = 0.3 + Math.random() * 0.4; // Slower
          dropOpacities[i] = 0.1 + Math.random() * 0.2; // Dimmer
        }
      }

      // 3. Start the draw loop
      const startTime = Date.now();
      const stuckChars: {text: string, x: number, y: number, color: string}[] = [];

      const draw = () => {
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `bold ${fontSize}px "Space Grotesk", sans-serif`;
        ctx.textAlign = 'center';

        const now = Date.now();
        const timeRunning = now - startTime;
        const isAccumulating = timeRunning > 100; // Start accumulating almost instantly (0.1s)

        // Feature 3: Heartbeat Ripple calculation
        const rippleStart = 2200; // Trigger slightly before 2800ms phase end
        let rippleRadius = 0;
        if (timeRunning > rippleStart) {
           rippleRadius = ((timeRunning - rippleStart) / 400) * (canvas.width / 1.5);
        }

        for (let i = 0; i < drops.length; i++) {
          const text = GEEZ_CHARS.charAt(Math.floor(Math.random() * GEEZ_CHARS.length));
          const x = i * fontSize + (fontSize / 2);
          const y = drops[i] * fontSize;

          if (isAccumulating && maskData[i] && maskData[i].length > 0) {
            const target = maskData[i][0]; 

            if (y >= target.y) {
              stuckChars.push({ text, x, y: target.y, color: target.color });
              maskData[i].shift();
              // Shoot drop back just slightly above the logo to keep it filling extremely fast
              drops[i] = (Math.random() * -8); 
              continue;
            }
          }

          // Draw falling characters
          ctx.fillStyle = `rgba(0, 116, 199, ${dropOpacities[i]})`; 
          ctx.shadowBlur = 0;
          ctx.fillText(text, x, y - fontSize); 

          ctx.fillStyle = `rgba(0, 229, 255, ${dropOpacities[i]})`; 
          ctx.shadowBlur = dropOpacities[i] === 1 ? 8 : 0;
          ctx.shadowColor = '#00E5FF';
          ctx.fillText(text, x, y);
          
          if (y > canvas.height && Math.random() > 0.90) { 
            drops[i] = 0;
          }

          drops[i] += dropSpeeds[i];
        }

        // Draw the accumulated exact-color logo mask
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        for (let sc of stuckChars) {
          // Apply Ripple Effect to formed logo
          let isRippling = false;
          if (rippleRadius > 0) {
              const dist = Math.sqrt(Math.pow(sc.x - centerX, 2) + Math.pow(sc.y - centerY, 2));
              if (Math.abs(dist - rippleRadius) < 30) {
                  isRippling = true;
              }
          }

          ctx.fillStyle = isRippling ? '#FFFFFF' : sc.color;
          ctx.shadowBlur = isRippling ? 20 : 0;
          ctx.shadowColor = isRippling ? '#00E5FF' : 'transparent';
          ctx.fillText(sc.text, sc.x, sc.y);
        }
      };

      interval = setInterval(draw, 20); 
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (interval) clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [phase]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white overflow-hidden"
        >
          {/* Phase 1: Matrix Digital Rain with Image Mask Accumulation */}
          <AnimatePresence>
            {phase === 1 && (
              <motion.canvas
                key="matrix"
                ref={canvasRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ 
                  scale: 1.15, 
                  opacity: [1, 1, 0],
                  filter: ["blur(0px)", "blur(2px)", "blur(12px)"],
                  x: [0, -20, 20, -10, 10, 0], // Feature 4: Holographic Glitch Transition
                  transition: { duration: 0.8, times: [0, 0.2, 1], ease: "easeIn" }
                }}
                className="absolute inset-0 block bg-white"
              />
            )}
          </AnimatePresence>

          {/* Phase 2: Logo Reveal */}
          <AnimatePresence>
            {phase === 2 && (
              <motion.div
                key="logo-bg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-white flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0.1, opacity: 0, filter: 'brightness(3) blur(20px)' }}
                  animate={{ scale: 1, opacity: 1, filter: 'brightness(1) blur(0px)' }}
                  transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                  className="relative z-10"
                >
                  <Image 
                    src={logo} 
                    alt="YSM Technologies Logo" 
                    width={340} 
                    height={140} 
                    className="object-contain w-64 md:w-80 h-auto relative z-10 drop-shadow-xl" 
                    priority
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
