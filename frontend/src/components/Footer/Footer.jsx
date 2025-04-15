import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-content-left">
      <img onClick={() => window.location.reload()} src={assets.logo} alt="Logo" />
      <p>Copyright 2025. All rights reserved.</p>
       
    </div>
    <div className='footer-content-left2'>
    <h2>Company</h2>
      <ul>
        <li>About Us</li>
        <li>Terms & Conditions</li>
        <li>Report Fraud</li>
      </ul>
    </div>
    <div className="footer-content-middle">
  <h2>Available in:</h2>
  <div className="cities-container">
    <div className="cities-column">
      <ul>
        <li>Delhi</li>
        <li>Mumbai</li>
        <li>Pune</li>
        <li>Nashik</li>
        <li>Banglore</li>
      </ul>
    </div>
    <div className="cities-column">
      <ul>
        <li>Kolkata</li>
        <li>Chennai</li>
        <li>Kanpur</li>
        <li>Ranchi</li>
      </ul>
    </div>
  </div>
</div>
    <div className="footer-content-right">
      <div className='right-content'> 
      <h2>Contact us</h2>
      <ul>
        <li>Help & Support</li>
        <li>Partner with us</li>
        <li>Ride with us</li>
      </ul>
      </div>
      <div className="download-button">
        <img  onClick={()=>window.open('https://play.google.com/store/games?hl=en&pli=1')}   src={assets.play_store} alt="Play Store" />
        <img  onClick={() => window.open('https://www.apple.com/in/app-store//')} src={assets.app_store} alt="App Store" />
      </div>
    </div>
  </div>
  )
}

export default Footer
