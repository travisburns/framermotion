import React, { useState } from 'react'
import { motion } from "framer-motion"


export default function box1() {

    const [isAnimating, setIsAnimating] = useState(false)

  return (
    <div className='box-container'>
      <motion.div 
      
      className='box'
      
      animate={{
         x: isAnimating ? 750 : 0, 
         opacity: isAnimating ? 1 : 0.5,
         rotate: isAnimating ? 360 : 0,
         backgroundColor: isAnimating ? "blue" : "black" 
         
      }}
      initial={{
        opacity: 0.1
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 5
      }}

      onClick={() => setIsAnimating(!isAnimating)}
      >

      </motion.div>
    </div>
  )
}
