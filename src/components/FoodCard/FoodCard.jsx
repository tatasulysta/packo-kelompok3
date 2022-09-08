import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import './FoodCard.css'

function FoodCard() {
    return (
        <Card>
            {/* <div className='d-flex justify-content-between align-items-center'> */}
                <Card.Body className='d-flex align-items-center'>
                    <Row>
                        <Col lg={3}>
                            <img src={process.env.PUBLIC_URL + `/food-small.png`} alt='food-img'/>
                        </Col>
                        <Col lg={9}>
                            <Row>
                                <Col lg={12}>
                                    <Card.Title>Food</Card.Title>
                                </Col>
                            </Row>
                            <Row className='justify-content-between align-items-center'>
                                <Col lg={9}>
                                    <Card.Text>3500</Card.Text>
                                </Col>
                                <Col lg={3}>
                                    <Button className='add-food'></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            {/* </div> */}
        </Card>
    );
}

export default FoodCard;