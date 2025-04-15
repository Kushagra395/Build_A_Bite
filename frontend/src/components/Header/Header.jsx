import React, { useState, useEffect } from 'react';
import './Header.css'; // Import the CSS file
import { FaUtensils, FaPaintBrush } from 'react-icons/fa'; // Import icons
import { assets } from '../../assets/frontend_assets/assets';

const Header = () => {
  const [toggleText, setToggleText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggleText((prev) => !prev); // Toggle between true and false
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className='header'>
      {/* Video */}
      <video 
        className="header-video"
        autoPlay 
        loop 
        muted 
      >
        <source src={assets.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Header Content */}
      <div className='header-content margin-top: 1200px;'>
        <h1 className='font-extrabold'>
          <span className={`toggle-text ${toggleText ? "order-text" : "customize-text"} font-serif`}>
            {toggleText ? "Order" : "Customize"}
          </span>
          <br /> {/* Line break for the second line */}
          <span className="food-text font-black">Your food & drinks</span>
        </h1>
        <p>Why settle for ordinary when you can design <span className='  text-orange-600'>'extraordinary'</span></p>
        <div className='button'>
          <button>
            <FaUtensils className="inline mr-2" /> View Menu
          </button>
          <button>
            <FaPaintBrush className="inline mr-2" /> Customize
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;