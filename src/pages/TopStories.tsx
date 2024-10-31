// TopStories.tsx
import React from 'react';
import StoryCard from '../componts/common/StoryCard';

const TopStories: React.FC = () => {
  return (
    <section className='flex flex-col relative h-full w-full '>
      <h1 className='font-jaro text-3xl text-orange-500 text-center mt-10 underline'>Top Stories</h1>
<input type='search' placeholder=' Search here your most fav story...&#xF002; ' className='border border-black py-1 rounded-md w-[90%] mx-auto text-white font-inder bg-[#2E2D2D] md:w-1/2'></input>
    <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 text-white">
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
    </section>
    </section>
  );
};

export default TopStories;
