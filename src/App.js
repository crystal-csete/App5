/** @format */
import React from "react";
import "./App.css";

import Nav from "./Nav";
import FeatureOne from "./FeatureOne";
import FeatureTwo from "./FeatureTwo";
import FeatureThree from "./FeatureThree";
import FeatureFour from "./FeatureFour";
import FeatureFive from "./FeatureFive";
import FeatureSix from "./FeatureSix";
import FeatureSeven from "./FeatureSeven";
import FeatureEight from "./FeatureEight";
import FeatureBottom from "./FeatureBottom";
import FeatureContact from "./FeatureContact";

import Footer from "./Footer";

function App() {
  return (
    <div className='App'>
      <Nav />
      <header>
        <h1>Start Here</h1>
        <button>Pickup</button>
        <p className='appArrow'>↕</p>
        <button>Delivery</button>
      </header>
      <section>
        <FeatureOne />
        <FeatureTwo />
        <FeatureThree />
        <FeatureFour />
        <FeatureFive />
        <FeatureSix />
        <FeatureSeven />
        <FeatureEight />
        <FeatureBottom />
        <FeatureContact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
