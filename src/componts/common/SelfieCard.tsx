import React from 'react';
import { motion } from 'framer-motion';

type SelfieCardProps = {
  src: string;
  candies: number;
  choclates: number;
};

const SelfieCard: React.FC<SelfieCardProps> = ({ src, candies, choclates }) => {
  return (
    <motion.div
      className="rounded-md border border-solid border-white bg-black flex flex-col h-auto w-full sm:w-auto md:m-5 p-4 overflow-hidden cursor-pointer relative"
      whileHover={{ scale: 1.05 }} 
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-full h-full"
        whileHover={{
          scale: 1.05, 
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.4)', 
        }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={src}
          alt="selfie"
          className="h-full w-full object-cover rounded-md"
        />
      </motion.div>

      <motion.span
        className="absolute top-[40%] w-full h-8 flex justify-center items-center space-x-3"
        initial={{ opacity: 0, y: 20 }} 
        whileHover={{ opacity: 1, y: 0 }} 
        animate={{ opacity: 0, y: 20 }}  
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 25,
          duration: 0.5, 
        }}
      >
        <motion.p
          className="text-white font-inder text-sm" 
          style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' }} 
        >
          Candy: {candies}
        </motion.p>
        <motion.p
          className="text-white font-inder text-sm" 
          style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' }} 
        >
          Choclates: {choclates}
        </motion.p>
      </motion.span>
      
    </motion.div>
  );
};

export default SelfieCard;
