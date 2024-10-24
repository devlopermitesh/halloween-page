import React from 'react';
import Button from './Button';

const images = [
  {
    src: 'https://t3.ftcdn.net/jpg/03/77/93/14/360_F_377931465_txu2WCMcmQL87ARK6ztPP2Udor5waNDJ.jpg',
    alt: 'Ghost Image',
    title: 'Zombie Rahul',
    chocolate: 35,
    lollipop: 25,
  },
  {
    src: 'https://t3.ftcdn.net/jpg/03/77/93/14/360_F_377931465_txu2WCMcmQL87ARK6ztPP2Udor5waNDJ.jpg', // Change to your second image URL
    alt: 'Another Ghost Image',
    title: 'Zombie Rahul 2',
    chocolate: 20,
    lollipop: 30,
  },
  {
    src: 'https://t3.ftcdn.net/jpg/03/77/93/14/360_F_377931465_txu2WCMcmQL87ARK6ztPP2Udor5waNDJ.jpg', // Change to your third image URL
    alt: 'Yet Another Ghost Image',
    title: 'Zombie Rahul 3',
    chocolate: 10,
    lollipop: 15,
  },
  {
    src: 'https://t3.ftcdn.net/jpg/03/77/93/14/360_F_377931465_txu2WCMcmQL87ARK6ztPP2Udor5waNDJ.jpg', // Change to your third image URL
    alt: 'Yet Another Ghost Image',
    title: 'Zombie Rahul 3',
    chocolate: 10,
    lollipop: 15,
  },
];

const Gallery: React.FC = () => {
  return (

<>  
<section className='container mx-auto flex flex-col'>
  <div className='flex flex-col md:flex-row container  mx-auto justify-around py-5 space-y-3'>
      {images.map((image, index) => (
        <div key={index} className='relative flex flex-col rounded-lg overflow-hidden  justify-center items-center h-auto w-40 mx-auto'>
          <img src={image.src} alt={image.alt} className='h-56 w-40 rounded-md' />
          <b className='text-center text-green-500 font-jaro absolute text-xl bottom-10' style={{ textShadow: "1px 1px 1px black" }}>
            {image.title}
          </b>
          <i className='text-center text-white font-jaro absolute bottom-3'>🍫{image.chocolate}</i>
          <i className='text-center text-white font-jaro absolute bottom-3 left-1'>🍭{image.lollipop}</i>
        </div>
      ))}
    </div>
      <Button name="See More" onclick={() => { }} className='bg-gray-800 md:block border-white border-solid border mx-auto font-jaro' hoverClassName='bg-orange-600'></Button>
      </section>
</>
  );
}

export default Gallery;
