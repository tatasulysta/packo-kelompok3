import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import './FoodCard.css'
import menu from '../../data/food';

function FoodCard() {
    return (
        menu.buburMenu.map((bubur) => {
            return (
                <Card>
                    <Card.Body className='d-flex align-items-center'>
                        <Row>
                            <Col lg={3}>
                                <img src={process.env.PUBLIC_URL + `/menu/food-medium.png`} alt='food-irecommendation'/>
                            </Col>
                            <Col lg={9}>
                                <Row>
                                    <Col lg={12}>
                                        <Card.Title>{bubur.name}</Card.Title>
                                    </Col>
                                </Row>
                                <Row className='justify-content-between align-items-center'>
                                    <Col lg={9}>
                                        <Card.Text>{bubur.price}</Card.Text>
                                    </Col>
                                    <Col lg={3}>
                                        <Button className='add-food'></Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            );
        })
    )
}

export default FoodCard;