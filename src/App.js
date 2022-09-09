import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Banner from './components/Banner';
import FoodCard from './components/FoodCard';

function App() {
  return (
    <>
      <Header>
        <Banner />
      </Header>
      <FoodCard />
      <Cart />
      <Footer />
    </>
  );
}

export default App;
