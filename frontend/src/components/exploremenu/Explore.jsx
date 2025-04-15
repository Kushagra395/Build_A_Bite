import React from 'react';
import './Explore.css';
import { menu_list } from '../../assets/frontend_assets/assets';

const Explore = ({ category, setcategory }) => {
  return (
    <div className='explore-menu'>
      <h1 className='font-extrabold'>Explore our menu</h1>
      <p>Your cravings, your call. Dive into a menu that’s made for you!</p>
      <div className="menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => setcategory(item.menu_name)}
              key={index}
              className={`item ${category === item.menu_name ? 'active' : ''}`}
            >
              <img className='menu-img' src={item.menu_image} alt={item.menu_name} />
              <h2 className='menu-name'>{item.menu_name}</h2>
            </div>
          );
        })}
      </div>
      <hr className='ending '/>
    </div>
  );
};

export default Explore;