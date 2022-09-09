import RecommendedMenu from './RecommendedMenu';
import PorridgeMenu from './PorridgeMenu';
import RiceMenu from './RiceMenu';
import ChickenNoodleMenu from './ChickenNoodleMenu';
import SnackMenu from './SnackMenu';
import DrinkMenu from './DrinkMenu';
import ShowDetail from '../ShowDetail';
import { Row } from 'react-bootstrap';
import MenuContextProvider, { useMenu } from '../../contexts/menuContext';

const FoodCard = () => {
  const { menuExpanded, setMenuExpanded, isOpen, setIsOpen } = useMenu();
  const showDetail = function (menu) {
    setMenuExpanded(menu);
    setIsOpen(true);
  };

  return (
    <>
      <ShowDetail menu={menuExpanded} isOpen={isOpen} onHide={setIsOpen} />
      <main className="menu">
        <Row>
          <p className="text-2xl text-weight-medium p-0 text-menu">Recommendation</p>
          <RecommendedMenu onClick={showDetail} />
        </Row>
        <Row>
          <p className="text-2xl text-weight-medium p-0 text-menu">Bubur</p>
          <PorridgeMenu onClick={showDetail} />
        </Row>
        <Row>
          <p className="text-2xl text-weight-medium p-0 text-menu">Nasi</p>
          <RiceMenu onClick={showDetail} />
        </Row>
        <Row>
          <p className="text-2xl text-weight-medium p-0 text-menu">Mi Ayam</p>
          <ChickenNoodleMenu onClick={showDetail} />
        </Row>
        <Row>
          <p className="text-2xl text-weight-medium p-0 text-menu">Snack</p>
          <SnackMenu onClick={showDetail} />
        </Row>
        <Row>
          <p className="text-2xl text-weight-medium p-0 text-menu">Drink</p>
          <DrinkMenu onClick={showDetail} />
        </Row>
      </main>
    </>
  );
};

export default FoodCard;
