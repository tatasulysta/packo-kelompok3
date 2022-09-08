import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Cart />
      <Footer />
    </>
  );
}

export default App;
