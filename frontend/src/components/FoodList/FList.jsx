import React, { useContext } from 'react';
import './Flist.css';
import { StoreContext } from '../../context/StoreContext';
import FoodIteam from '../FoodIteam/FoodIteam';

const FList = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Best { category} near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "Dishes" || item.category === category) {
            return (
              <FoodIteam
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FList;