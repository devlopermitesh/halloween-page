import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';
import { Menu } from './Navbar';
import { useNavigate } from 'react-router-dom';
interface MenulistProps {
  isOpen: boolean; 
}

const Menulist: React.FC<MenulistProps> = ({ isOpen }) => {
  const navigate=useNavigate();
  const authoristed = true;
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='bg-black border border-white border-solid h-auto w-36 rounded-lg ms-auto mx-2 absolute top-10 right-0 z-50'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ul className='justify-around mx-2 flex flex-col md:hidden float-end space-y-2 py-2 text-center'>
            {Menu.map((item) => (
              <motion.li key={item.item} className='p-2 flex'>
                <NavLink
                  to={item.link}
                  className={({ isActive }) => (isActive ? 'text-orange-500 underline' : 'text-white')}
                >
                  {item.name}
                </NavLink>
              </motion.li>
            ))}
            <a className='my-auto' href='https://x.com/MiteshGehl60337'>
            <Button
              name="x@mitesh"
              onclick={() => {}}
              className='bg-gray-800 border-white border-solid border my-auto text-slate-300'
              hoverClassName='bg-grey-900 text-white'
            /></a>
            <Button
              name="Login"
              onclick={() => {navigate('/login')}}
              className={`my-auto text-black border-solid border ${(authoristed ? 'hidden' : 'block')}`}
              hoverClassName='bg-orange-500'
            />
            <Button
              name="Logout"
              onclick={() => {}}
              className={`my-auto text-black border-solid border ${ (authoristed ? 'block' : 'hidden') }`}
              hoverClassName='bg-orange-500'
            />
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menulist;
