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
            <p className='text-2xl text-weight-medium p-0 text-menu'>Recommendation</p>
            <RecommendedMenu />
        </Row>
        <Row>
            <p className='text-2xl text-weight-medium p-0 text-menu'>Bubur</p>
            <PorridgeMenu />
        </Row>
        <Row>
            <p className='text-2xl text-weight-medium p-0 text-menu'>Nasi</p>
            <RiceMenu />
        </Row>
        <Row>
            <p className='text-2xl text-weight-medium p-0 text-menu'>Mi Ayam</p>
            <ChickenNoodleMenu />
        </Row>
        <Row>
            <p className='text-2xl text-weight-medium p-0 text-menu'>Snack</p>
            <SnackMenu />
        </Row>
        <Row>
            <p className='text-2xl text-weight-medium p-0 text-menu'>Drink</p>
            <DrinkMenu/>
        </Row>
    </main>
    )
}

export default FoodCard;