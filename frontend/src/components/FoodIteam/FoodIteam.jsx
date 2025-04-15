// FoodIteam.jsx
import React, { useContext } from 'react'
import './FoodIteam.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodIteam = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className='food-iteam-container'>
        <img className='food-item-image' src={image} />
      </div>
      <div className='food-item-info'>
        <div className='food-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} />
        </div>
        <p className='food-desciption'>{description}</p>
        <div className='price-addButton'>
          <p className='food-price'>₹{price * 9 + 10}</p>
          <div className='add-remove-button'>
            {cartItems[id] && cartItems[id] > 0 ? (
              <img
                className='remove-button'
                src={assets.remove_icon_red}
                alt='Remove'
                onClick={() => removeFromCart(id)}
              />
            ) : (
              <img
                className='add-button'
                src={assets.add_icon_white}
                alt='Add'
                onClick={() => addToCart(id)}
              />
            )}
            {cartItems[id] && cartItems[id] > 0 && (
              <span className='count'>{cartItems[id]}</span>
            )}
            {cartItems[id] && cartItems[id] > 0 && (
              <img
                className='add-button'
                src={assets.add_icon_green}
                alt='Add'
                onClick={() => addToCart(id)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodIteam