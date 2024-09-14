import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className='bg-neutral-900 h-[10%] w-[100%] rounded mt-1 flex '>
        <div className='flex items-center gap-6 my-5 mx-6 '>
        <img className='w-8 rounded-full p-2 bg-black cursor-pointer hover:bg-slate-800' src='arrow-left-solid.svg '></img>
        <img className='w-8 rounded-full p-2 bg-black  cursor-pointer  hover:bg-slate-800' src='arrow-right-solid.svg'></img>
       
        </div>
        <div className='flex item center gap-10 my-3 ml-[70%]'>
           <Link to='/signup'><button className='font-semibold text-slate-300 text-[15px] mt-3 cursor-pointer hover:text-white'>Sign up</button></Link> 
           <Link to='/login'><button className=' h-12 bg-white font-semibold px-6 py-2 text-[15px] cursor-pointer text-black rounded-full hover:scale-110 transition ease-in hover:bg-slate-100'>Log in</button></Link> 
        </div>
      </div>
    
  )
}

export default Nav
