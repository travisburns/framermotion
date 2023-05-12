import React, { useState } from 'react'
import { color, motion, useScroll } from "framer-motion"


export default function Box2() {

    const [isAnimating, setIsAnimating] = useState(false)

  return (
    <div className='box-container'>
      <motion.div 
      
      className='box'
      initial={{X: 90}}
      whileInView={{x: 200}}
      viewport={{ once: false}}
      transition={{ duration: 1, delay: 2 }}
     >
      

      </motion.div>
    </div>
  )
}
