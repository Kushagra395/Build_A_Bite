 import React, { useState } from 'react'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import Place from './pages/placeorder/Place'
import Explore from './components/exploremenu/Explore'
import Footer from './components/Footer/Footer'
import SignLogin from './components/Sign-Login/SignLogin'

 
 const App = () => {
  const [showLogin,setShowLogin]=useState(false)
   return (
    <>

     <div className='app'>
      {showLogin?<SignLogin setShowLogin={setShowLogin} />:<></>}
      <Navbar setShowLogin={setShowLogin} />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Order" element={<Place />} />
      </Routes>
      <Footer/>
       
     </div>
     </>
   )
 }
 
 export default App
 