/** @format */

import React from "react";
import featone from "./images/featone.jpg";
import feattwo from "./images/feattwo.png";
import pizzabread from "./images/pizzabread.jpg";
import brownie from "./images/brownie.png";
import character from "./images/character.jpg";
import shop from "./images/shop.jpg";
import car from "./images/car.png";
import price from "./images/price.png";
import phone from "./images/phone.png";
import drivethru from "./images/drivethru.png";
import pizza from "./images/pizza.png";
import pizzabg from "./images/pizzabg.jpg";
import supremebg from "./images/supremebg.jpg";
import sidebg from "./images/sidebg.jpg";
import deepdishbg from "./images/deepdishbg.jpg";

const FeaturedItems = () => {
  return (
    <div className='featureDiv'>
      {/* FEATURE ONE */}
      {/* move these features into their own component */}

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
                  <p className='featOneDelivery'>🚘 Delivery!</p>
                  <p className='featOneDelivery'>Delivery! 🎇</p>

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
                  Plus tax where applicable. Available at participating
                  locations. Prices may vary. Prices higher in AK and HI.
                </p>
              </div>
              {/* end of center div below */}
            </div>
            {/* end of text div below */}
          </div>

          {/* right image div */}
          <div className='featOneBlankDiv'>
            <div className='featOneImgDiv'>
              <img src={featone} alt='pizza' />
            </div>
          </div>

          {/* end of wrapper div below */}
        </div>

        {/* end of feature one div below */}
      </div>

      {/* FEATURE TWO */}
      <div className='featureTwo'>
        {/* wrapper div to wrap middle div and legal div */}
        <div className='featTwoWrapperDiv'>
          {/* left side image div */}
          <div className='featTwoBlankDiv'>
            <div className='featTwoImgDiv'>
              <img src={feattwo} className='featTwoImg' alt='pepperoni pizza' />
            </div>
          </div>

          {/* right side content div */}
          <div className='featTwoTextDiv'>
            <p className='featTwoTitle'>Online-Only Deal</p>
            <p className='featTwoSubTitle'>FREE CRAZY BREAD</p>
            <p className='featTwoDescText'>With any custom pizza purchase</p>
            <p className='featTwoCartText'>ADD TO CART - ENTER CODE</p>
            <p className='featTwoCode'>
              🍕<strong>GETYOURBREAD1</strong>🍕
            </p>
            <p className='featTwoOfferDate'>
              Offer good until January 1, 2022.Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
          </div>
        </div>
      </div>

      {/* FEATURE THREE */}
      <div className='featureThree'>
        {/* left side text div */}
        <div className='featThreeCrazyDiv'>
          <h2>Crazy!Crazy!Deals</h2>
        </div>
        {/* right side div */}
        <div className='featThreeBlankDiv'>
          {/* right side overlay div */}
          <div className='featThreeOverlay'>
            <h2>WANT ACCESS TO</h2>
            <p className='featThreeSubTitle'>Exclusive Deals?</p>
            <p className='featThreeDescText'>
              Subscribe for access to exclusive offers, promotions, and NEW
              Crazy!Crazy! Deals
            </p>
            <div className='featThreeBtnDiv'>
              <button>
                <a href='#signup'>SUBSCRIBE NOW ▶</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE FOUR */}
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
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className='featFourBtnDiv'>
              <button>
                <a href='#shopnow'>SHOP NOW</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE FIVE */}
      <div className='featureFive'>
        {/* wrapper div to wrap middle div and offer date div */}
        <div className='featFiveWrapperDiv'>
          {/* middle "description" text div */}
          <div className='featFiveTextDiv'>
            {/* left side "3.69" text div */}
            <div className='featFiveTitleDiv'>
              <div className='featFivePriceImgDiv'>
                <img
                  src={price}
                  alt='hot price tag'
                  className='featFiveDollar'
                />
              </div>

              <h1 className='featFiveTitle'>
                COOKIE <br /> DOUGH
              </h1>
            </div>

            <p className='featFiveSubTitle'>Brownie</p>

            {/* middle content div */}
            <div className='featFiveCenterDiv'>
              <p className='featFiveDescText'>
                BROWNIE TOPPED WITH COOKIE DOUGH FROSTING AND M&M'S
                <br />
                MINIS CHOCOLATE CANDIES | 4-PIECE ORDER
              </p>
              {/* order button div inside middle content div */}
              <div className='featFiveBtnDiv'>
                <button>ORDER NOW</button>
              </div>
            </div>
            {/* under all divs "offer section" */}
            <div className='featFiveOfferDate'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>

          {/* right side image div */}
          <div className='featFiveBlankDiv'>
            <div className='featFiveDealImgDiv'>
              <img src={brownie} alt='brownies' />
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE SIX */}
      <div className='featureSix'>
        {/* upper title div */}
        <div className='featSixTitleDiv'>
          <div className='featSixHiring'>
            <p className='featSixJobText'>Now Hiring! STORE JOBS</p>
            {/* lower left image div */}
            <div className='featSixImgShopDiv'>
              <img src={shop} alt='pizza resturant' />
            </div>
          </div>
        </div>

        {/* wrapper div for lower right divs */}
        <div className='featSixLowWrapperDiv'>
          {/* lower right image div */}
          <div className='featSixImgCharDiv'>
            <img src={character} alt='pizza character' />
            {/* right side button div */}
            <div className='featSixBtnDiv'>
              <button>APPLY NOW</button>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE SEVEN */}
      <div className='featureSeven'>
        {/* wrapper div to wrap text and image */}
        <div className='featSevWrapperDiv'>
          {/* left side text div */}
          <div className='featSevTextDiv'>
            <p className='featSevText'>
              RAISE SOME DOUGH FOR YOUR ORGANIZATION WITH GALACTIC PIZZA
              FUNDRAISING
            </p>
            <div className='featSevBtnDiv'>
              <button>LEARN HOW</button>
            </div>
          </div>

          {/* right side image div */}
          <div className='featSevBlankDiv'>
            <div className='featSevImgCharDiv'>
              <img src={character} alt='pizza character' />
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE EIGHT */}
      <div className='featureEight'>
        {/* upper title div */}
        <div className='featEightTopTextDiv'>
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

        {/* wrapper for lower divs for "no contact options" */}
        <div className='featEightLowWrapperDiv'>
          {/* "delivery options" div */}
          <div className='featEightOptionDivs'>
            {/* thumbnail image for option divs*/}
            <div className='featEightCarImgDiv'>
              <img src={car} alt='red car' />
            </div>

            {/* "description" text div */}
            <div className='featEightText'>
              <h3>ONLINE OR DELIVERY</h3>
              <p>
                Left at your door with a ring of the doorbell, if you choose
              </p>
            </div>
          </div>

          {/* "delivery options" div */}
          <div className='featEightOptionDivs'>
            {/* thumbnail image for option divs*/}
            <div className='featEightCarImgDiv'>
              <img src={phone} alt='phone' />
            </div>

            {/* "description" text div */}
            <div className='featEightText'>
              <h3>ONLINE USING PIZZA PORTAL PICKUP</h3>
              <p>
                Held at a safe temperature for you and accessible using a
                no-contact QR code
              </p>
            </div>
          </div>

          {/* "delivery options" div */}
          <div className='featEightOptionDivs'>
            {/* thumbnail image for option divs*/}
            <div className='featEightCarImgDiv'>
              <img src={pizza} alt='hot pizza' />
            </div>

            {/* "description" text div */}
            <div className='featEightText'>
              <h3>HOT N READY PIZZA</h3>
              <p>Held at a safe temperature until you get here</p>
            </div>
          </div>

          {/* "delivery options" div */}
          <div className='featEightOptionDivs'>
            {/* thumbnail image for option divs*/}
            <div className='featEightCarImgDiv'>
              <img src={drivethru} alt='drive thru' />
            </div>

            {/* "description" text div */}
            <div className='featEightText'>
              <h3>DRIVE THRU & PICK UP WINDOWS</h3>
              <p>At participating stores</p>
            </div>
          </div>
        </div>

        {/* "learn more" button div */}
        <div className='featEightBtnDiv'>
          <button>LEARN MORE</button>
        </div>
      </div>

      {/* FEATURE BOTTOM */}
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

      {/* FEATURE CONTACT */}
      <div className='featureContact'>
        {/* wrapper div for all text / list divs */}
        <div className='featContactWrapperDiv'>
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
    </div>
  );
};

export default FeaturedItems;
