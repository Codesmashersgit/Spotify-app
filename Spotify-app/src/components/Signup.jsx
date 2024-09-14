import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='fixed h-screen w-screen py-[2%] bg-black '>
       
    <div className='flex flex-col items-center '>
        <img className='h-11' src='spotify.png'></img>
        <h1 className='font-bold text-white text-[45px] py-[1%]'>Sign Up to start</h1>
        <h1 className='font-bold text-white text-[45px] my-[-2%]'>Listening</h1>
        <p className='text-white font-semibold mt-[5%] ml-[-15%] '>Email Address</p>  
        <input type='text' className=' w-80 h-11 rounded text-white font-semibold bg-transparent border border-white px-[1%] mt-[0.5%] ' placeholder='name@domain.com'spellCheck='false'></input>
        <p className='text-green-400 underline underline-offset-1 mt-[0.5%] ml-[-9%] cursor-pointer'>Use phone number instead.</p>
        <button className='items-center bg-green-400 text-black font-bold rounded-full w-80 p-3 mt-[1.5%] text-[20px] outline-none hover:scale-105 transition ease-in hover:font-bold'>Next</button>
        
       <div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-white"></hr>
    <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-black">or</span>
</div>
<button className='items-center bg-transparent font-semibold rounded-full text-white w-80 p-2 mt-[1.5%] text-[18px] border border-white inline-block relative '>
    <img className='w-6 inline-block absolute left-[5%] ' src='google.png'></img>Signup with Google</button>
    <button className='items-center bg-transparent text-white font-semibold rounded-full w-80 p-2 mt-[1.5%] text-[18px] border border-white inline-block relative '>
    <img className='w-6 inline-block absolute left-[5%] ' src='facebook.png'></img>Signup with Facebook</button>
    <button className='items-center bg-transparent text-white font-semibold rounded-full w-80 p-2 mt-[1.5%] text-[18px] border border-white inline-block relative'>
    <img className='w-6 inline-block absolute left-[5%] ' src='apple.png '></img>Signup with Apple</button>

    <p className='text-white font-light mt-3'>Already have an account?
      <Link to ='/Login'>
      <a href='#'className='font-bold underline underline-offset-2 ml-2 hover:text-green-400'>Log in here.</a>
      </Link></p>

       

      
    </div>
    </div>
    
    
  )
}

export default Signup

