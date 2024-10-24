import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../common/Button'
import Menubutton from './Menubutton'
import Menulist from './Menulist'

export const Menu=[
    {
        item:0,
        name:"home",
        link:"/",
    },
    {
        item:1,
        name:"top-Stories",
        link:"/top-Stories",
    },
    {
        item:2,
        name:"About",
        link:"/about",
    },
    {
        item:3,
        name:"contact",
        link:"/contact",
    }
]
const Navbar = () => {
const [isOpen,setIsOpen]=React.useState<boolean>(false)
  return (
<>
<div className='text-white flex bg-[#252121]  items-centers justify-between font-jaro'>
<span className='flex my-auto'>
    <h1 className='font-jaro text-3xl'>🎃</h1>
<h1 className='font-jaro text-2xl'>Happy halloween!</h1>
</span>
<ul className='justify-around mx-2 hidden md:flex'>
{
    Menu.map((item)=><li key={item.item} className='p-4 flex'><NavLink to={item.link} className={({isActive})=>(isActive?'text-orange-500':'text-white')}>{item.name}</NavLink></li>)
}

<Button name="x@mitesh" onclick={()=>{}} className='bg-gray-800 border-white border-solid border my-auto text-slate-300' hoverClassName='bg-grey-900 text-white '/>
<Button name="Login" onclick={()=>{}} className='my-auto text-black border-solid border ' hoverClassName='bg-orange-500'/>
</ul>
{/* menubutton for small device  */}
<div className='md:hidden flex'>
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