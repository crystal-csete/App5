/** @format */
import React from "react";
import "./App.css";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/fontawesome-free";
// import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

import Nav from "./Nav";
import FeaturedItems from "./FeaturedItems";
import Footer from "./Footer";

// library.add(fab, faCheckSquare, faCoffee);

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
        <FeaturedItems />
      </section>
      <Footer />
    </div>
  );
}

export default App;
