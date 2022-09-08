import RecommendedMenu from './RecommendedMenu';
import PorridgeMenu from './PorridgeMenu';
import RiceMenu from './RiceMenu';
import ChickenNoodleMenu from './ChickenNoodleMenu';
import SnackMenu from './SnackMenu';
import DrinkMenu from './DrinkMenu';
import { Row } from 'react-bootstrap';

const FoodCard = () => {
    return (
        <main className='menu'>
        <Row>
            <p className='text-2xl text-weight-medium p-0 mt-5'>Recommendation</p>
            <RecommendedMenu />
        </Row>
        <Row>
            <p className='text-2xl text-weight-medium p-0 mt-5'>Bubur</p>
            <PorridgeMenu />
        </Row>
        <Row>
            <p className='text-2xl text-weight-medium p-0 mt-4'>Nasi</p>
            <RiceMenu />
        </Row>
        <Row>
            <p className='text-2xl text-weight-medium p-0 mt-4'>Mi Ayam</p>
            <ChickenNoodleMenu />
        </Row>
        <Row>
            <p className='text-2xl text-weight-medium p-0 mt-4'>Snack</p>
            <SnackMenu />
        </Row>
        <Row>
            <p className='text-2xl text-weight-medium p-0 mt-4'>Drink</p>
            <DrinkMenu/>
        </Row>
    </main>
    )
}

export default FoodCard;