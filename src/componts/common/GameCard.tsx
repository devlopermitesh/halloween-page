import React from 'react';
import Button from './Button';

interface GameCardProps {
    img: string;
    name: string;
    bio: string;
    link: string;
}

const GameCard: React.FC<GameCardProps> = ({ img, name, bio, link }) => {
  return (
    <div className="flex flex-row w-11/12 max-w-xl mx-auto lg:w-full rounded-lg border border-solid border-white bg-black h-60 overflow-hidden mt-4">
      <img 
        src={img}
        alt={name} 
        className="w-2/3 h-full object-cover"
      />
      <div className="flex flex-col w-1/3 justify-center items-center p-4">
        <p className="text-orange-500 font-jaro text-lg lg:text-2xl text-center">{name}</p>
        <i className="text-white font-inder text-sm lg:text-base text-ellipsis whitespace-nowrap overflow-hidden max-w-full">
          {bio}
        </i>
        <Button 
          name="Play" 
          onclick={() => window.location.href = link} 
          className="bg-gray-800 border-white border-solid border mx-auto font-jaro mt-2" 
          hoverClassName="bg-orange-600"
        />
      </div>
    </div>
  );
};

export default GameCard;
