/* hit ctrl+K then M, then type react, it enables react intillicence*/
/* rafce */

import React from 'react';
import Navbar from './Navbar';
import bannerbackground from "../Assets/home-banner-background.png";
import bannerImage from "../Assets/home-banner-image.png";
import fiArrowRight from "react-icons/fi";


const Home = () => {
  return(
      <div className="home-container">
          <Navbar />
          <div className="home-banner-conatiner">
            <div className="home-bannerImage-conatiner">
              <img src={bannerbackground} alt="" />
            </div>
            <div className='home-text-section'>
              <h1 className='primary-heading'>
                Your Favourite Food Delivered Hot & Fresh
              </h1>
            </div>
          </div>
      </div>
  );  
};

export default Home;