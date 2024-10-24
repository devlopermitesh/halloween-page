import React from 'react';

interface AboutItem {
  itemkey: number;
  name: string;
  description: string;
}

const abouts: AboutItem[] = [
  {
    itemkey: 1,
    name: "Shared Halloween Images",
    description: "Upload and showcase your spookiest snapshots! Connect with fellow Halloween enthusiasts.",
  },
  {
    itemkey: 2,
    name: "Register & Connect:",
    description: "Join our haunted community and share your experiences! Celebrate Halloween night like never before!",
  },
  {
    itemkey: 3,
    name: "Chocolate Donations:",
    description: "Spread joy by donating chocolate treats to others! Share sweetness in the season of fright.",
  },
  {
    itemkey: 4,
    name: 'Earn Rewards',
    description: 'Upload images and earn points for special goodies! The more you share, the more you earn!',
  },
];

const Sectionpage2: React.FC = () => {
  return (
    <section className='relative md:-top-16 w-full flex flex-col m-0 h-[90%] bg-black justify-center space-y-2'>
      <h1 className='font-jaro text-3xl text-orange-500 text-center mt-10'>About Halloween Site</h1>
      <div className='flex flex-col space-y-2 w-full h-full md:space-y-4'>
        {abouts.map(item => (
          <span key={item.itemkey} className='block text-center w-full h-auto'>
            <b className='text-orange-400 font-jaro'>{item.name}</b>
            <p className='text-white font-jaro max-w-xs mx-auto'>{item.description}</p>
          </span>
        ))}
      </div>
    </section>
  );
}

export default Sectionpage2;
