import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsBottom(scrollTop > 0);  
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);  
    };
  }, []);

  return (
    <section
      className={`${
        isBottom ? 'fixed bottom-0' : 'relative'
      } h-auto w-full flex flex-col m-0 bg-black justify-center space-y-2`}
    >
      <h1 className="text-center text-white font-jaro">© 2023. All Rights Reserved.</h1>
    </section>
  );
};

export default Footer;
