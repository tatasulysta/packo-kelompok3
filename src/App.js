import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import FoodCard from './components/FoodCard';
import { useEffect, useState } from 'react';

function App() {
  const [hover, setHover] = useState(false);
  useEffect(() => {
    console.log(hover);
  }, [hover]);
  return (
    <>
      <Header>
        <Banner setHover={setHover} />
      </Header>
      <div className={`menu-container ${hover ? 'hover--margin' : 'menu--margin'}`}>
        <FoodCard />
      </div>
      <Footer />
    </>
  );
}

export default App;
