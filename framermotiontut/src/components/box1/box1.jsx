import React from 'react'
import { motion } from "framer-motion"


export default function box1() {
  return (
    <div className='box-container'>
      <motion.div 
      
      className='box'
      
      animate={{
         x: 750,
         opacity: 1
      }}
      initial={{
        opacity: 0.1
      }}
      >

      </motion.div>
    </div>
  )
}
