import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProgressBar from './ProgressBar';
import Logo from '../Header/Logo';
import { FaMessage } from 'react-icons/fa6';

interface QuizeprintProps {
  quizenum: number;
  question: string;
  answer: string;
  options: string[];
  setnext: React.Dispatch<React.SetStateAction<number>>;
}

const Quizeprint: React.FC<QuizeprintProps> = ({ quizenum, question, answer, options, setnext }) => {
  const [clickedOption, setClickedOption] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [count,setcount]=useState<number>(1);
  // Progress represented as a percentage, increments by 10% for each correct answer
  const progress = Math.min((score / 100) * 100, 100); 
  
  // Function to check answer and adjust score and progress
  const checkAnswer = (option: string) => {
    setClickedOption(option);
    
    if (option === answer) {
      setScore(score + 10);
    }

    setTimeout(() => {
      setClickedOption(null);
      if (count === 10) {
alert(`Your score is ${score} out of 100`);        
      }else{
        
      setnext(quizenum + 1);
      setcount(count+1);
      }
    }, 1000);
  };

  return (
    <div className="bg-black bg-opacity-30 p-6 rounded-lg text-center flex flex-col">
      <b className="font-inder text-white text-xl">Question: {count}</b>
      <p className="text-white font-jaro text-lg">{question}</p>
      
      {/* Options with conditional colors based on answer correctness */}
      <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-3">
        {options.map((option) => (
          <motion.button
            key={option}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => checkAnswer(option)}
            className={`opacity-60 text-white px-2 rounded-md border-white border-solid border mx-auto font-jaro
              ${clickedOption === option ? (option === answer ? 'bg-green-600' : 'bg-red-600') : 'bg-gray-800'}
            `}
          >
            {option}
          </motion.button>
        ))}
      </div>
      
      {/* Witch Image and Progress Bar */}
      <div className="relative  mt-6 py-3 w-full">
        {(progress === 0) &&
      <Logo 
      name="Messagebox" 
      iconSize={80}  // Increased size here
      children="Hey! Let's go help me get candies" 
      childrunClass="text-white text-xs absolute animate-pulse" 
      className="text-black h-20  text-5xl font-jaro " 
      containerClass="w-20 h-16 flex justify-center items-center text-wrap max-w-sm bg-transparent z-50 animate-bounce "
      style={{ textShadow: "1px 1px 1px white" }}
    
    />  
        }
      
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default Quizeprint;
