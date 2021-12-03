/** @format */

import React from "react";
import pizzabread from "./images/pizzabread.jpg";
import brownie from "./images/brownie.jpg";
import character from "./images/character.jpg";
import shop from "./images/shop.jpg";
import car from "./images/car.jpg";

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

      <div className='featureSix'>
        {/* left side title div */}
        <div className='featSixText'>
          <div className='featSixTitle'>
            <h2>Now Hiring!</h2>
            <p className='featJobText'>STORE JOBS</p>
          </div>
          <div className='featImgDiv'>
            <img src={shop} alt='pizza resturant' />
          </div>
          <button>APPLY NOW</button>
        </div>

        {/* right side image div */}
        <div className='featImgCharacterDiv'>
          <img src={character} alt='pizza character' />
        </div>
      </div>

      <div className='featureSeven'>
        {/* left side text div */}
        <div className='featSevText'>
          <p>
            RAISE SOME DOUGH FOR YOUR ORGANIZATION WITH LITTLE GALACTIC PIZZA
            FUNDRAISING
          </p>
          <button>LEARN HOW</button>
        </div>
        {/* right side image div */}
        <div className='featImgCharacterDiv'>
          <img src={character} alt='pizza character' />
        </div>
      </div>

      <div className='featureEight'>
        <div className='featEightTopText'>
          <p className='featEightTitle'>
            SERVING UP PEACE OF MIND WITH NO-CONTACT ORDERING OPTIONS
          </p>
          <p className='featEightSubTitle'>
            Our pizzas are baked in 475-degree ovens to ensure food safety and
            never touched after baking. Then, now and always.
          </p>
          <p className='featEightOptions'>
            ⬅NO-CONTACT OPTIONS TO GET YOUR PIZZA ➡
          </p>
        </div>

        <div className='featEightBottomText'>
          <div className='featEightOptionDivs'>
            <div className='carImg'>
              <img src={car} alt='red car' />
            </div>
            <div className='featEightText'>
              <h3>ONLINE OR DELIVERY</h3>
              <p>
                Left at your door with a ring of the doorbell, if you choose
              </p>
            </div>
          </div>

          <div className='featEightOptionDivs'>
            <div className='carImg'>
              <img src={car} alt='red car' />
            </div>
            <div className='featEightText'>
              <h3>ONLINE USING PIZZA PORTAL PICKUP</h3>
              <p>
                Held at a safe temperature for you and accessible using a
                no-contact QR code
              </p>
            </div>
          </div>

          <div className='featEightOptionDivs'>
            <div className='carImg'>
              <img src={car} alt='red car' />
            </div>
            <div className='featEightText'>
              <h3>HOT N READY PIZZA</h3>
              <p>Held at a safe temperature until you get here</p>
            </div>
          </div>

          <div className='featEightOptionDivs'>
            <div className='carImg'>
              <img src={car} alt='red car' />
            </div>
            <div className='featEightText'>
              <h3>DRIVE THRU & PICK UP WINDOWS</h3>
              <p>At participating stores</p>
            </div>
          </div>
        </div>
        <button>LEARN MORE</button>
      </div>

      <div className='featureBottom'>
        <div className='featBottomText'>
          <h4>CREATE YOUR OWN PIZZA</h4>
        </div>
        <div className='featBottomText'>
          <h4>LARGE ROUND PIZZAS</h4>
        </div>
        <div className='featBottomText'>
          <h4>DEEP!DEEP! DISH PIZZAS</h4>
        </div>
        <div className='featBottomText'>
          <h4>BREADSTICKS</h4>
        </div>
      </div>

      <div className='featureContact'>
        <div className='featContactText'>
          <h4>COMPANY</h4>
          <ul>
            <li>Nutrition</li>
            <li>Our History</li>
            <li>Hometown Pride</li>
            <li>Merchandise Store</li>
          </ul>
        </div>

        <div className='featContactText'>
          <h4>CAREERS</h4>
          <ul>
            <li>Careers</li>
            <li>Store Jobs</li>
            <li>Corporate Jobs</li>
            <li>Distribution Jobs</li>
          </ul>
        </div>

        <div className='featContactText'>
          <h4>COMMUNITY</h4>
          <ul>
            <li>Love Kitchen</li>
            <li>Galactic Pizza Fundraising</li>
            <li>Veterans Program</li>
            <li>AAA Hockey</li>
            <li>IIitch Charities</li>
            <li>Million Pizza Giveaway</li>
          </ul>
        </div>

        <div className='featContactText'>
          <h4>CONNECT WITH US</h4>
          <ul>
            <li>Customer Contact</li>
            <li>For the Media</li>
            <li>International Franchising</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
