import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import './style.css';
import menu from '../../../data/food';

function RecommendedFoodCard(props) {
  return menu.foodRecommendations.map((food) => {
    return (
      <Col lg={3} className="data">
        <Card className="recommendation" onClick={() => props.onClick(food)}>
          <Card.Body className="recommendation">
            <Row>
              <Col lg={12}>
                <img
                  className="recommendation"
                  src={process.env.PUBLIC_URL + food.imgUrl}
                  alt="food-irecommendation"
                />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Card.Text className="text-base text-weight-medium">{food.name}</Card.Text>
              </Col>
            </Row>
            <Row>
              <Col lg={9} className="my-auto">
                <Card.Text>{food.price}</Card.Text>
              </Col>
              <Col lg={3} className="text-end">
                <Button className="add-food"></Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}

export default RecommendedFoodCard;
