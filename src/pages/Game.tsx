import React from 'react';
import quizeImage from '../assets/Images/sddefault.jpg'
import GameCard from '../componts/common/GameCard';
interface GameMapping {
    img: string;
    name: string;
    bio: string;
    link: string;
}

const Games: GameMapping[] = [
    {
        img: quizeImage,
        name: "Halloween Quiz",
        bio: "Play Halloween quiz and get new Halloween treats",
        link: "/game/quizegame"
    },
    {
        img: quizeImage,
        name: "Halloween Quiz",
        bio: "Play Halloween quiz and get new Halloween treats",
        link: "/game/quizegame"
    },
    {
        img: quizeImage,
        name: "Halloween Quiz",
        bio: "Play Halloween quiz and get new Halloween treats",
        link: "/game/quizegame"
    }
];

const Game: React.FC = () => {
  return (
    <div className={`container w-full  bg-black grid grid-cols-1 grid-rows-4 gap-5 ${(Games.length >= 2)?"h-auto":"h-full"}`}>
      {Games.map((item, index): JSX.Element => (
          <GameCard key={index} img={item.img} name={item.name} bio={item.bio} link={item.link} />
      ))}
    </div>
  );
}

export default Game;
