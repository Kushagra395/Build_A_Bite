import React, { useState ,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';
import { FaHome, FaUtensils, FaMobileAlt, FaInfoCircle, FaUserCircle } from 'react-icons/fa';

const Navbar = ({setShowLogin}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menue, setMenue] = useState("home");

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 150) { // Adjust the scroll threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenueClick = (selectedMenue) => {
    setMenue(selectedMenue);
  };
  console.log( `fixed top-0 left-0 w-full p-2 z-50 transition-colors duration-300 ${
    isScrolled ? 'bg-black bg-opacity-95' : 'bg-transparent'
  }`);
  return (
    <div className="relative">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full p-1 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-gray-500 bg-opacity-95' : ' bg-black bg-opacity-50 shadow-lg p-2 z-50'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
        <Link to='/'>   <img   src={assets.logo} className="w-40 h-auto p-0 gap-x-0 m-0" alt="Logo" /></Link>
          <ul className="flex space-x-6 text-white">
          <li
    className={`hover:text-orange-300 transition duration-300 ${
      menue === "home" ? "text-orange-500" : ""
    }`}
    onClick={() => handleMenueClick("home")}
  >
    <Link to='/'>
      <FaHome className="inline mr-1 text-yellow-300" /> Home
    </Link>
  </li>
            <li
              className={`hover:text-orange-300 transition duration-300 ${
                menue === "menu" ? "text-orange-500" : ""
              }`}
              onClick={() => handleMenueClick("menu")}
            >
              <FaUtensils className="inline mr-1 text-yellow-300" /> Menu
            </li>
            <li
              className={`hover:text-orange-300 transition duration-300 ${
                menue === "mobile-app" ? "text-orange-500" : ""
              }`}
              onClick={() => handleMenueClick("mobile-app")}
            >
              <FaMobileAlt className="inline mr-1 text-yellow-300" /> Mobile App
            </li>
            <li
              className={`hover:text-orange-300 transition duration-300 ${
                menue === "about-us" ? "text-orange-500" : ""
              }`}
              onClick={() => handleMenueClick("about-us")}
            >
              <FaInfoCircle className="inline mr-1 text-yellow-300" /> About Us
            </li>
          </ul>
          <div className="flex p-2 items-center">
            <img className="p-2 m-2" src={assets.search_icon} alt="Search" />
           <Link to='/Cart'><img className="p-2 m-2" src={assets.basket_icon} alt="Basket" /></Link>  
            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center focus:outline-none"
              >
                <FaUserCircle className="mr-2 p-0 m-3 my-0 text-gray-700 " size={32} />
              </button>
              {/* Dropdown Content */}
              {isDropdownOpen && (
                <div className="absolute right-0 mr-0 mt-4 w-48 bg-white rounded-lg shadow-lg  ">
                 
                   
                     
                      <button onClick={()=>{setShowLogin(true) 
                        console.log("yess")
                      }}
                        
                        className=" px-4 py-2 w-48 text-gray-800 hover:bg-gray-300 font-serif"
                      >
                        Sign Up
                      </button>
                   
                    
                      <button
               
                        className="block px-4 py-2 w-48 text-gray-800 hover:bg-gray-300 font-serif"
                      >
                        Log Out
                        </button>
                     
               
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;