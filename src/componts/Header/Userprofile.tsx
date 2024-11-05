import React from 'react'
interface UserprofileProps extends React.HTMLAttributes<HTMLDivElement>{
    source:string,
    className?:string,
    Imgclass?:string
    onclick?:()=>void

}
const Userprofile:React.FC<UserprofileProps> = ({source,className,Imgclass,onclick,...props}) => {
  return (
    <div className={className} onClick={onclick} {...props}>
<img src={source} alt='user profile' className={Imgclass}></img>
    </div>
  )
}

export default Userprofile