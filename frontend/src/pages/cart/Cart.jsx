import React from 'react'
import { ImCross } from "react-icons/im";
import './Cart.css'
 
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
 

const Cart = () => {
  const{food_list,cartItems,addToCart,removeFromCart, gettotalCartAmount}=useContext(StoreContext)
  
  const promo = () => {
    const input = document.querySelector('.promocode-input input');
    if (input) {
      const value = input.value;

      if (value === "WELCOME50") {
        return 50;
      } else {
        return 0;
      }
    } else {
      console.error("Element not found");
      return 0;
    }
  }
  
  return (
    <div>
      <div className="cart">
        <div className="cart-iteams">
          <div className="cart-iteam-titles">
            <p></p>
            <p>Iteams</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            
         </div>
         <hr className='line'/>
         <br/>
         
         {food_list.map((iteam,index)=>{
          if(cartItems[iteam._id]>0)
          {
            return(<> 
              <div className="cart-iteam-titles cart-iteam-iteams">
               <ImCross onClick={()=>removeFromCart(iteam._id)} />
               <img src={iteam.image} alt="" />
               <p>{iteam.name}</p>
               <p>₹{iteam.price}</p>
               <p>{cartItems[iteam._id]}</p>
               <p>₹{iteam.price*cartItems[iteam._id]}</p>
              
        
              </div>
              <hr/>
              </>
            )
          }
         })}
        </div>
        <div className='cart-botttom'>
          <div className='cart-total'>
            <div className="card-total-details">
              <p>Subtotal</p>
              <p>{gettotalCartAmount()}</p>
              
        
            </div>
            <hr/>
            <div className="card-total-details">
              <p>Delivery charge </p>
              <p>{98}</p>

            </div>
            <hr/>
            <div className="card-total-details">
              <p>Discount </p>
              <p>-{promo()}</p>

            </div>
            <hr/>
            <div className="card-total-details">
              <p>Total</p>
              <p>{gettotalCartAmount()+98-promo()}</p>
            </div>
       <button>Proceed to Checkout</button>
          </div>
          <div className='promo-code'>
        <p>Enter your promocode for extra discount</p>
        <div className='promocode-input'>
          <input type="text" placeholder='Enter your promocode'/>
          <button>Apply</button> 
        </div>
      </div>
        </div>
      
      </div>
    </div>
  )
}

export default Cart
