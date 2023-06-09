import React, { useState } from 'react'
import { color, motion } from "framer-motion"


export default function Box2() {

    const [isAnimating, setIsAnimating] = useState(false)

  return (
    <div className='box-container'>
      <motion.div 
      
      className='box'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      drag
      dragConstraints = {{
        right: 20
      }}
      whileTap={{
        scale: 0.9,
        backgroundColor: "orange"
      }}
      
      >
      

      </motion.div>
    </div>
  )
}
