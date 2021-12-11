/** @format */

import React from "react";

const FeatureFour = () => {
  return (
    <div className='featureFour'>
      {/* left side of empty div */}
      <div className='featFourEmptyDiv'></div>
      {/* right side div */}
      <div className='featFourBlankDiv'>
        <div className='featFourOverlay'>
          <h2>TASTY MERCH</h2>
          <p className='featFourSubTitle'>Your eyes desire</p>
          <p className='featFourDescText'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className='featFourBtnDiv'>
            <button>
              <a href='#shopnow'>SHOP NOW</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureFour;
