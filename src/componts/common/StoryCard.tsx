// StoryCard.tsx
import React from 'react';

const StoryCard: React.FC = () => {
  return (
    <div className="rounded-md border border-solid border-white bg-black flex flex-col h-auto w-full sm:w-auto md:m-5 p-4 overflow-hidden cursor-pointer">
      <img
        src="https://i.pinimg.com/736x/84/29/95/842995b9e26968e91f2a7bb5b8931769.jpg"
        className="h-48 w-full object-cover rounded-t-md"
        alt="halloween pic"
      />
      <q className="text-orange-500 font-jaro text-lg sm:text-xl mt-2">
        ghar me bhoot
      </q>
      <p className="w-full sm:w-64 text-sm  overflow-hidden text-ellipsis whitespace-nowrap lg:max-w-40 max-w-full ">
        This is a long text that will be truncated with an ellipsis if it
        exceeds the container width.
      </p>
<div className='flex flex-row space-x-2'>
      <span><b className='text-orange-500 font-jaro'>Choclate:</b> 🍫5</span>
      <span><b className='text-orange-500 font-jaro'>Candy:</b> 🍬5</span>
      </div> 
    </div>
  );
};

export default StoryCard;
