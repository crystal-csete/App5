/** @format */

import React from "react";
import pizzabread from "./images/pizzabread.jpg";
import brownie from "./images/brownie.jpg";

const FeaturedItems = () => {
  return (
    <div className='featureDiv'>
      <div className='featureOne'>
        <h2>
          <strong className='featDollar'>$6 </strong>Hot-N-Ready 4-8PM
        </h2>
        <p className='featTitle'>SLICES-N-STIX</p>
        <p className='featDesc'>
          4 PEPPERONI SLICES + 8 ITALIAN CHEESE
          <br />
          STIX + CRAZY SAUCE
        </p>
        <div className='featBtnDiv'>
          <p>
            Delivery!
            <br />
            ...Delivery!
          </p>
          <button>
            ORDER <br /> NOW
          </button>
        </div>
        <div className='featLegal'>
          <p>
            Plus tax where applicable. Available at participating locations.
            Prices may vary. Prices higher in AK and HI.
          </p>
        </div>
      </div>

      <div className='featureTwo'>
        {/* image div for pizza and breadsticks */}
        <div className='featDealImg'>
          <img src={pizzabread} alt='pizza and breadsticks' />
        </div>
        {/* right div for all words */}
        <div className='featText'>
          <h2>
            Online-Only
            <br />
            Deal
          </h2>
          <p className='featTitle'>
            FREE CRAZY <br />
            BREAD
          </p>
          <p className='featDealDesc'>With any custom pizza purchase</p>
          <p className='featAddText'>ADD TO CART - ENTER CODE</p>
          <p className='featCode'>
            🍕<strong>GETYOURBREAD1</strong>🍕
          </p>
          <p className='featOfferDate'>
            Offer good until January 1, 2022.Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>

      <div className='featureThree'>
        <div className='featOverlay'>
          <h2>WANT ACCESS TO</h2>
          <p className='featSubTitle'>Exclusive Deals?</p>
          <p className='featDescText'>
            Subscribe for access to exclusive offers, promotions, and NEW
            Crazy!Crazy! Deals
          </p>
          <button>
            <a href='#signup'>SUBSCRIBE NOW ▶</a>
          </button>
        </div>
      </div>

      <div className='featureFour'>
        <div className='featOverlay'>
          <h2>TASTY MERCH</h2>
          <p className='featSubTitle'>Your eyes desire</p>
          <p className='featDescText'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button>
            <a href='#shopnow'>SHOP NOW</a>
          </button>
        </div>
      </div>

      <div className='featureFive'>
        {/* left side text description div */}
        <div className='featText'>
          <div className='featFiveTitle'>
            <h2>
              <strong className='featDollar'>$3.69</strong>
            </h2>
            <div className='featFiveTitle two'>
              <p className='featTitle'>
                COOKIE <br /> DOUGH
              </p>
              <h2 className='featDealBrownieText'>Brownie</h2>
            </div>
          </div>

          {/* middle content div */}
          <div className='featCenterDiv'>
            <p className='featAddText'>
              BROWNIE TOPPED WITH COOKIE DOUGH FROSTING AND M&M'S
              <br />
              MINIS CHOCOLATE CANDIES | 4-PIECE ORDER
            </p>
            <button className='brownieBtn'>ORDER NOW</button>
            <p className='featOfferDate'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>

        {/* right side image div */}
        <div className='featDealImg'>
          <img src={brownie} alt='desert' />
        </div>
      </div>

      <div className='featureEight'>
        <h2>Now Hiring!</h2>
        <p>STORE JOBS</p>
        <button>APPLY NOW</button>
        <div className='featImgDiv'>{/* <img src={} alt="" /> */}</div>
      </div>
    </div>
  );
};

export default FeaturedItems;
