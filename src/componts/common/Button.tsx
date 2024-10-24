import React from 'react'

interface Butttonprops extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    name?:string,
    onclick:() => void,
    className?:string,
    hoverClassName?:string,
    children?:React.ReactNode
}
const Button:React.FC<Butttonprops> = ({name,onclick,className='',hoverClassName}) => {
  return (
    <button className={`rounded-md w-24 h-7 bg-orange-500 mx-2  text-center  ${className} ${hoverClassName}`} onClick={onclick}>{name}</button>
  )
}

export default Button