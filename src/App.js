import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Cart from './components/Cart';
import FoodCard from './components/FoodCard';

function App() {
  const [hover, setHover] = useState(false);
  return (
    <>
      <Header>
        <Banner setHover={setHover} />
      </Header>
      <div className={`menu-container ${hover ? 'hover--margin' : 'menu--margin'}`}>
        <FoodCard />
      </div>
      <Cart />
      <Footer />
    </>
  );
}

export default App;
