/** @format */

import React from "react";
import pizzabg from "./images/pizzabg.jpg";
import supremebg from "./images/supremebg.jpg";
import sidebg from "./images/sidebg.jpg";
import deepdishbg from "./images/deepdishbg.jpg";

const FeatureBottom = () => {
  return (
    <div className='featureBottom'>
      {/* wrapper div to wrap all divs */}
      <div className='featBottomWrapperDiv'>
        {/* Div 1 with text and image */}
        <div className='featBottomDiv'>
          {/* text div */}
          <div className='featBottomTextDiv'>CREATE YOUR OWN PIZZA</div>
          <img
            src={supremebg}
            className='featBottomImage'
            alt='supreme pizza'
          />
        </div>

        {/* Div 2 with text and image */}
        <div className='featBottomDiv'>
          {/* text div */}
          <div className='featBottomTextDiv'>LARGE ROUND PIZZA</div>
          <img
            src={pizzabg}
            className='featBottomImage'
            alt='pepperoni pizza'
          />
        </div>

        {/* Div 3 with text and image */}
        <div className='featBottomDiv'>
          {/* text div */}
          <div className='featBottomTextDiv'>DEEP DISH PIZZA</div>
          <img
            src={deepdishbg}
            className='featBottomImage'
            alt='deep dish pizza'
          />
        </div>

        {/* Div 4 with text and image */}
        <div className='featBottomDiv'>
          {/* text div */}
          <div className='featBottomTextDiv'>SIDE DISHES!</div>
          <img
            src={sidebg}
            className='featBottomImage'
            alt='breadsticks and marinara sauce'
          />
        </div>

        {/* Div 5 option "learn more" button */}
        <div className='featBottomDiv franDiv'>
          {/* text div */}
          <div className='featBottomTextDiv '>BECOME A FRANCHISEE TODAY!</div>
          <div className='featBottomBtnDiv'>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBottom;
