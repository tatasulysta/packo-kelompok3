import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodCard from './components/FoodCard/FoodCard';
import RecommendedFoodCard from './components/FoodCard/RecommendedFoodCard';
import { Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-lg">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <main className='menu'>
        <Row>
          <p className='text-2xl text-weight-medium p-0 mt-5'>Recommendation</p>
          <RecommendedFoodCard/>
        </Row>
        <Row>
          <p className='text-2xl text-weight-medium p-0 mt-5'>Bubur</p>
          <FoodCard/>
        </Row>
      </main>
    </div>
  );
}

export default App;
