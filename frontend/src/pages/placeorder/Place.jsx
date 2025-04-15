import React, { useState } from 'react';

const PlaceOrder = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Place Order Form submitted:');
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Address 1:', address1);
    console.log('Address 2:', address2);
    console.log('Pincode:', pincode);
    console.log('City:', city);
    console.log('State:', state);
    console.log('Delivery Option:', deliveryOption);
  };

  return (
    <div>
      <h1>Place Order</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div>
          <label>Address 1:</label>
          <input
            type="text"
            value={address1}
            onChange={(event) => setAddress1(event.target.value)}
          />
        </div>
        <div>
          <label>Address 2:</label>
          <input
            type="text"
            value={address2}
            onChange={(event) => setAddress2(event.target.value)}
          />
        </div>
        <div>
          <label>Pincode:</label>
          <input
            type="number"
            value={pincode}
            onChange={(event) => setPincode(event.target.value)}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            value={state}
            onChange={(event) => setState(event.target.value)}
          />
        </div>
        <div>
          <label>Delivery Option:</label>
          <select
            value={deliveryOption}
            onChange={(event) => setDeliveryOption(event.target.value)}
          >
            <option value="">Select Delivery Option</option>
            <option value="homeDelivery">Home Delivery</option>
            <option value="storePickup">Store Pickup</option>
          </select>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default PlaceOrder;