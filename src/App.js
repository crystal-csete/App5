/** @format */

import "./App.css";
import Nav from "./Nav";
import FeaturedItems from "./FeaturedItems";
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
        <FeaturedItems />
      </section>
      <Footer />
    </div>
  );
}

export default App;
