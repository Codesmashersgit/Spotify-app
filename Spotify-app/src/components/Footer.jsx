import React from 'react'
import { Link } from 'react-router-dom';
const Footer= () => {
  return (
    <div className='h-[8%] absolute bg-gradient-to-r from-pink-600 to-violet-500 w-full  bottom-0 '>
      <div className='flex items-center justify-between text-center'>
        <p className='text-white font-bold  mx-12'>Preview of Spotify</p>
     <p className='text-white font-light mx-5 '>Sign up to get unlimited songs & podcasts with ocassional ads. No credit card needed</p> 

          <Link to='/signup'><button className='bg-white text-black rounded-full px-4 py-3 mr-10 text-[15px] mt-2 font-semibold hover:scale-105 transition ease-in delay-150 hover:bg-slate-100'>Sign up for free</button>
          </Link>
        
        
      </div>
    </div>
  )
}

export default Footer
