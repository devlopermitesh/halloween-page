import React from 'react'
import { Link, NavLink, useNavigate, useNavigation } from 'react-router-dom'
import Button from '../common/Button'
import Menubutton from './Menubutton'
import Menulist from './Menulist'
import Userprofile from './Userprofile'
export const Menu=[
    {
        item:0,
        name:"home",
        link:"/home",
    },
    {
        item:1,
        name:"top-Stories",
        link:"/top-Stories",
    },
    {
        item:2,
        name:"Game",
        link:"/game",
    },
    {
        item:3,
        name:"HorrorSelfie",
        link:"/selfies",
    }
]
const Navbar = () => {
const [isOpen,setIsOpen]=React.useState<boolean>(false)
const navigate=useNavigate();
const authoristed=true;
  return (
<>
<div className='text-white flex bg-[#252121]  items-centers justify-between font-jaro '>
<span className='flex my-auto'>
    <h1 className='font-jaro text-3xl'>🎃</h1>
<h1 className='font-jaro text-2xl'>Happy halloween!</h1>
</span>
<ul className='justify-around mx-2 hidden md:flex'>
{
    Menu.map((item)=><li key={item.item} className='p-4 flex'><NavLink to={item.link} className={({isActive})=>(isActive?'text-orange-500':'text-white')}>{item.name}</NavLink></li>)
}

<a href='https://x.com/MiteshGehl60337' className='my-auto'><Button name="x@mitesh" onclick={()=>{}} className='bg-gray-800 border-white border-solid border my-auto text-slate-300' hoverClassName='bg-grey-900 text-white '/>
</a>

<Button name="Login" onclick={()=>{navigate('/login')}} className={`my-auto text-black border-solid border ${(authoristed?'hidden':'block')}`} hoverClassName='bg-orange-500'/>
<Button name="Logout" onclick={()=>{navigate('/logout')}} className={`my-auto text-black border-solid border ${(authoristed?'block':'hidden')}`} hoverClassName='bg-orange-500'/>
<Userprofile source='https://menshaircuts.com/wp-content/uploads/2024/09/boys-halloween-costumes-ideas-ghost-1.jpg' className='w-10 h-10 my-auto rounded-full border-solid border-2 border-white bg:black' Imgclass='w-full h-full rounded-full object-cover'/>
</ul>
{/* menubutton for small device  */}
<div className='md:hidden flex'>

<Userprofile source='https://menshaircuts.com/wp-content/uploads/2024/09/boys-halloween-costumes-ideas-ghost-1.jpg' className='w-10 h-10 my-auto rounded-full border-solid border-2 border-white bg:black' Imgclass='w-full h-full rounded-full object-cover'/>
    <Menubutton isOpen={isOpen} setIsOpen={setIsOpen}/>
    
    
    </div>

 </div>
 {
    isOpen && <Menulist isOpen={isOpen}/>
 }
    
</>
  )
}

export default Navbar