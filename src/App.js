import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { data } from './data/dummyData';

function App() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <main>
        <Menu data={data.bubur} title="Bubur" />
        <Menu data={data.nasi} title="Nasi" />
        <Menu data={data.miAyam} title="Mi Ayam" />
        <Menu data={data.snack} title="Snack" />
        <Menu data={data.minuman} title="Minuman" />
      </main>
      <Footer />
    </>
  );
}

export default App;
