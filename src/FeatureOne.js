/** @format */

import React from "react";
import feattwo from "./images/feattwo.png";

const FeatureOne = () => {
  return (
    <div className='featureOne'>
      {/* wrapper div to wrap middle div and legal div*/}

      <div className='featOneWrapperDiv'>
        {/* middle "description" text div */}

        <div className='featOneTextDiv'>
          {/* left side "$6" text div */}
          <div className='featOneTitleDiv'>
            <p className='featOneDollar'>$6</p>
          </div>

          {/* middle content div */}
          <div className='featOneCenterDiv'>
            <p className='featOneTitle'>Hot-N-Ready 4-8 PM</p>
            <p className='featOneSubtitle'>SLICES-N-STIX</p>
            <p className='featOneDescText'>
              4 PEPPERONI SLICES + 8 ITALIAN CHEESE STIX + CRAZY SAUCE
            </p>

            {/* order button div inside middle content div*/}
            <div className='featOneOuterBtnDiv'>
              <div className='featOneBtnWrapperDiv'>
                <i class='far fa-star-half fa-2x'></i>
                <i class='fas fa-user-astronaut fa-2x'></i>
                <p className='featOneDelivery'>
                  Delivery! <br /> Delivery!
                </p>
                <i class='far fa-star-half fa-flip-horizontal fa-2x'></i>

                {/* button div */}
                <div className='featOneBtnDiv'>
                  <button>ORDER NOW</button>
                </div>
                {/* end of btn wrapper div below */}
              </div>
              {/* end of outer btn wrapper div below */}
            </div>
            {/* under all divs "legal section" */}
            <div className='featOneLegalDiv'>
              <p>
                Plus tax where applicable. Available at participating locations.
                Prices may vary. Prices higher in AK and HI.
              </p>
            </div>
            {/* end of center div below */}
          </div>
          {/* end of text div below */}
        </div>

        {/* right image div */}
        <div className='featOneBlankDiv'>
          <div className='featOneImgDiv'>
            <img src={feattwo} alt='pizza' />
          </div>
        </div>

        {/* end of wrapper div below */}
      </div>

      {/* end of feature one div below */}
    </div>
  );
};

export default FeatureOne;
