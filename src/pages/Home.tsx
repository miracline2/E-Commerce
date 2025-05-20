import React from 'react'
import Header from '../commponent/Dashboard/Header'
import Welcome from '../commponent/Dashboard/Welcome'
import { motion } from 'framer-motion'

const Home:React.FC = () => {
  return (
 <div className='w-full h-screen flex flex-col '>
  <Header />
   <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }} // Animates when 20% of the element is in view
          >
              <Welcome /> 
          </motion.div>

  
</div>

  )
}

export default Home
