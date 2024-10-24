import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Nopage: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const navigate = useNavigate(); 
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Ref to store button

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        iframeRef.current.style.height = `${window.innerHeight}px`; 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleIframeLoad = () => {
    if (iframeRef.current) {
      try {
        const button = iframeRef.current.contentDocument?.querySelector('.len-btn') as HTMLButtonElement;
        if (button) {
          buttonRef.current = button; // Store reference to the button
          button.addEventListener('click', handleButtonClick);
        }
      } catch (error) {
        console.error('Error accessing iframe content:', error);
      }
    }
  };

  const handleButtonClick = (event: MouseEvent) => {
    event.stopPropagation(); // Prevent event from bubbling
    navigate('/'); 
  };

  // Cleanup function to remove the button event listener
  useEffect(() => {
    return () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener('click', handleButtonClick);
      }
    };
  }, []);

  return (
    <section className='relative w-full h-full'>
      <motion.div
        className="flex flex-col h-screen w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-1 overflow-hidden">
          <iframe
            ref={iframeRef}
            className="full-screen-preview__frame w-full h-full border-none"
            src="https://temsool.com/demo/zombie-404/"
            name="preview-frame"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            onLoad={handleIframeLoad}
          />
        </div>
      </motion.div>
      <div className='bg-black w-full h-full absolute z-50 top-0 opacity-0' onClick={() => navigate('/')}>
        {/* Fake cover */}
      </div>
    </section>
  );
};

export default Nopage;
