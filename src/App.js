import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Banner from './components/Banner';

function App() {
  return (
    <>
      <Header>
        <Banner />
      </Header>
      <Cart />
      <Footer />
    </>
  );
}

export default App;
