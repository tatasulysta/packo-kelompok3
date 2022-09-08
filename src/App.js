import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Footer />
    </>
  );
}

export default App;
