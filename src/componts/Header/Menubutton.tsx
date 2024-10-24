import React, { useState } from 'react';
import { motion } from 'framer-motion';
interface MenubuttonProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
const Menubutton: React.FC<MenubuttonProps> = ({isOpen, setIsOpen}) => {

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className='border border-solid rounded-md w-8 h-8 flex flex-col relative mx-2 items-center cursor-pointer overflow-hidden'
      onClick={toggleMenu}
    >
      <motion.span 
        initial={{ rotate: 0 }} 
        animate={{ rotate: isOpen ? 45 : 0,y: isOpen ? 10 : 0 }} 
        transition={{ duration: 0.5 }} 
        className={`absolute h-0.5 w-6 bg-white rounded-xl top-1 ${(isOpen)?"w-8":""}`}
      ></motion.span>
      <motion.span 
        initial={{ x: 0 }} 
        animate={{ x: isOpen ? 50 : 0 }} 
        transition={{ duration: 0.5 }} 
        className={`absolute h-0.5 w-7 bg-white rounded-xl top-3`}
      ></motion.span>
      <motion.span 
        initial={{ rotate: 0 }} 
        animate={{ rotate: isOpen ? -45 : 0,y: isOpen ? -5 : 0  }} 
        transition={{ duration: 0.5 }} 
        className={`absolute h-0.5 w-4 bg-white rounded-xl top-5   ${(isOpen)?"w-7":""}`}
      ></motion.span>
    </div>
  );
};

export default Menubutton;
