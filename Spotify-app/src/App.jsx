
import React from 'react'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Body from './components/Body';
import Signup from './components/Signup';
import Login from './components/Login';
import Album from './components/Album';
 
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<MainPage/>}/>
         <Route path="/login"element={<Login/>}/>
          <Route path="/signup"element={<Signup/>}/>
          <Route path="/album"element={<Album/>}/>
          <Route path="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1242586784%3A1722888578431339&ddm=0"element={<Login/>}/>
          <Route path="/https://www.facebook.com/"element={<Login/>}/>
          <Route path="/https://support.spotify.com/in-en/article/apple-login-help/"element={<Login/>}/>
      </Routes>
    </Router>
 

  );
}

function MainPage(){
 
  return(
    <>
    <div className='h-screen w-screen fixed bg-black '>
    
    <div className=' flex h-[95%]'> <Sidebar/>
    <div className='flex flex-col'>
    <Nav/>

    <Body/>
  
    
    </div>
   
 </div>


<Footer/> 
</div>


{/* </div>
<Footer/> 


         
        
      
//      </div>
//       */}
  
    </>
  )
 }

export default App
