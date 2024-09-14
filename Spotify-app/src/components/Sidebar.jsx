import React from 'react'


const Sidebar = () => {
  return (
    < div className='h-full p-1 w-[67%] rounded gap-2 flex-col text-white lg:flex'>
         <div className='bg-neutral-900 h-[25%] flex-col rounded justify-around '>
       <div className='flex items-center gap-2 pl-3 my-5 ' >
     <img className='w-8 rounded-full p-1'src='spotify.png'></img>
       <p className='font-bold'>Spotify</p> 
       </div>
      <div className='flex items-center gap-4 pl-8 my-5 cursor-pointer' >
     <img className='w-8 rounded-full p-2 bg-white 'src='house-solid.svg'></img>
       <p className='font-bold'>Home</p>
       </div>
       <div className='flex items-center gap-4 pl-8 my-5 cursor-pointer' >
     <img className='w-8 rounded-full p-2 bg-white ' src='search (1).png'></img>
       <p className='font-bold'>Search</p>
       
       </div>
       </div>
      
       <div className='bg-neutral-900 h-[71%] flex-col rounded justify-around'>
       <div className='flex items-center gap-4 pl-8 mt-3 cursor-pointer' >
        <img className='w-8 rounded-full p-1 bg-white ' src='media-library.png'></img>
         <p className='font-bold'>My Library</p>
         
       </div>
       <div className='w-6 relative top-[-5%] left-[89%] cursor-pointer ' >
        <img className=' rounded-full p-1 bg-white hover:bg-slate-800' src='line.png'></img>
     
        </div>
        <div className='bg-[#2d3436] h-[45%] mr-1 py-1 flex-col rounded justify-around overflow-auto scroll'>
        <div className='bg-neutral-900 h-[65%] ml-2 mr-1 flex-col rounded justify-around '>
          <p className='py-4 px-6 text-white font-bold'>Create your first playlist</p>
          <p className='mt-[-2%] px-6 text-white font-semibold'>It's easy,we'll help you</p>
          <button className='bg-white px-4 py-1 mx-6 my-6 text-black rounded-full font-bold hover:scale-105 transition ease-in'>Create Playlist</button>
          </div>
          
          <div className='bg-neutral-900 h-[72%] ml-2 mr-1 mt-2 flex-col rounded justify-around '>
          <p className='py-5 px-6 text-white font-bold'>Let's find some podcasts to follow</p>
          <p className='mt-[-2%] px-6 text-white font-semibold'>We'll keep you updated on new episodes</p>
          <button className='bg-white px-4 py-1 mx-6 my-3 text-black rounded-full font-bold hover:scale-105 transition ease-in'>Browse Podcasts </button> 
          </div>
          </div>

           <div className='flex gap-4 text-white font-sans mt-[12%] ml-[10%] mr-[5%] flex-wrap text-sm cursor-pointer font-thin text-[11px] '>
            <p>Legal</p>
            <p>Safety&Privacy Center</p>
            <p>Privacy Policy</p>
            <p>Cookies</p>
            <p>About Ads</p>
            <p>Accessibility</p>
            </div>
            <div className='bg-neutral-900 flex-col rounded justify-around'>
            <div className='flex items-center gap-2 pl-8 mt-5' >
            <img className='w-8 rounded-full p-2 bg-white cursor-pointer border border-black mt-3' src='global.png'></img>
            <button className='bg-black px-4  text-white rounded-full font-bold cursor-pointer border border-white mt-3  hover:bg-white hover:text-black'>English</button>
            </div>
            </div> 

         


        
        </div>


       
    </div>
    
  )
}

export default Sidebar

