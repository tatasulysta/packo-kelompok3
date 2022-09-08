import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from './components/Rating';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rating />
        <Navbar />
      </header>
    </div>
  );
}

export default App;
