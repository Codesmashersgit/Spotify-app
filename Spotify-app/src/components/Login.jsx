import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
<div className='fixed h-screen w-screen bg-black overflow-auto'>
    <div className=' flex flex-col items-center '>
        <div className='h-[90%] w-[40%] m-2 bg-neutral-900 rounded pb-10 '>
        <img className='h-10 ml-[48%] mt-[3%]' src='spotify.png'></img>
        <h1 className='font-bold text-white text-[30px] py-[2%] ml-[33%]'>Log in to Spotify</h1>
        <Link to='https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1242586784%3A1722888578431339&ddm=0'> <button className='items-center bg-transparent text-white font-semibold rounded-full w-80 p-2 mt-[1.5%] text-[18px] border border-white inline-block relative ml-[25%]'>
    <img className='w-6 inline-block absolute left-[5%] ' src='google.png'></img>Continue with Google</button></Link>
    <Link to='https://www.facebook.com/'> <button className='items-center bg-transparent text-white font-semibold rounded-full w-80 p-2 mt-[1.5%] text-[18px] border border-white inline-block relative ml-[25%] '>
    <img className='w-6 inline-block absolute left-[5%] ' src='facebook.png'></img>Continue with Facebook</button></Link>
    <Link to='https://support.spotify.com/in-en/article/apple-login-help/'><button className='items-center bg-transparent text-white font-semibold rounded-full w-80 p-2 mt-[1.5%] text-[18px] border border-white inline-block relative ml-[25%]  '>
    <img className='w-6 inline-block absolute left-[5%] ' src='apple.png '></img>Continue with Apple</button></Link>
    <button className='items-center bg-transparent text-white font-semibold rounded-full w-80 p-2 mt-[1.5%] text-[18px] border border-white inline-block relative ml-[25%]  '>
    Continue with Phone number</button>
    <div class="inline-flex items-center justify-center w-full mt-5 ml-3">
    <hr class="w-96 h-0.5 my-8 border-0 dark:bg-neutral-600"></hr>
    </div>

<p className='text-white font-semibold mt-[3%] ml-[25%] '>Email or Username</p>  
        <input type='text' className=' w-80 h-12 rounded text-white font-semibold bg-transparent border border-white px-[1%] mt-[2%] ml-[25%]' placeholder='Email or Username'spellCheck='false'></input>
        <p className='text-white font-semibold mt-[3%] ml-[25%] '>Password</p>  
        <input type='password' className=' w-80 h-12 rounded text-white font-semibold bg-transparent border border-white px-[1%] mt-[2%] ml-[25%]' placeholder='Password'spellCheck='false'></input>
       
        <label class="flex items-center mb-5 mt-7 ml-[25%] cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer "></input>
  <div class="relative w-9 h-5  bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-slate-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
  <span class="ms-3 text-sm font-normal text-gray-900 dark:text-gray-300 ">Remember me</span>
</label>
<button className='items-center bg-green-400 text-black font-bold rounded-full w-80 p-3 mt-[1.5%] text-[20px] ml-[25%] outline-none cursor-pointer hover:scale-105 transition ease-in hover:font-bold'>Log in</button>
<p className='text-white font-semibold ml-[38%] mt-14 underline underline-offset-2 cursor-pointer hover:text-green-400'>Forgot your password?</p>
<div class="inline-flex items-center justify-center w-full mt-5 ml-3">
    <hr class="w-96 h-0.5 mt-20 border-0 dark:bg-neutral-600"></hr>
    </div>
    <p className='mt-24 ml-[25%] font-light text-white'>Don't have an account?
      <Link to='/Signup'>
        <a href='#'className='font-bold underline underline-offset-2 ml-2 hover:text-green-400'>Sign up for Spotify.</a>
        </Link>
    </p>
    </div>
       
        </div>
      </div>
      
    
    
  )
}

export default Login

