import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Explore from '../../components/exploremenu/Explore';
import FList from '../../components/FoodList/FList';

const Home = () => {
  const [category, setcategory] = useState("Dishes"); // Initialize state

  return (
    <div className="home-container">
      <Header category={category} setcategory={setcategory} />
      <Explore category={category} setcategory={setcategory} />
      <FList category={category} />
      
    </div>
  );
};

export default Home;