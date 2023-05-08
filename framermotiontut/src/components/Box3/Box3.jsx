import React, { useState } from 'react'
import { color, motion } from "framer-motion"


export default function Box3() {

 const boxVariant = {
    hidden: {
        x:"-100vw"
    },

    visible: {
        x: 0,
        transition: {
            delay: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    }
 }

 const listVariant = {
    hidden: {
        x: -10,
        opacity: 0
    },

    visible: {
        x: 0,
        opacity: 1,
        
      
    }
 }

  return (
    <div className='box-container'>
      <motion.div 
      
      className='box'
        variants={boxVariant}
        animate="visible"
        initial="hidden"
       
      >
      
    {[1, 2, 3].map(box => {
        return ( 
        <motion.li 
        className='boxitem'
        variants={listVariant}
        
        ></motion.li>
        )

        
    })
    
    }
      </motion.div>
    </div>
  )
}
