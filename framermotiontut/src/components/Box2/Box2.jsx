import React, { useState } from 'react'
import { color, motion } from "framer-motion"


export default function Box2() {

    const [isAnimating, setIsAnimating] = useState(false)

  return (
    <div className='box-container'>
      <motion.div 
      
      className='box'
      whileTap={{
        scale: 0.9,
        backgroundColor: "orange"
      }}
      >
      

      </motion.div>
    </div>
  )
}
