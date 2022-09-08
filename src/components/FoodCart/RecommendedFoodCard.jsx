import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import './RecommendedFoodCard.css'

function FoodCartRecommended() {
    return (
        <Card>
            <img src={process.env.PUBLIC_URL + `/food-medium.png`} alt='food-img'/>
            <Card.Body>
                <Card.Title>Food</Card.Title>
                <div className='d-flex justify-content-between align-items-center'>
                <Row className='my-auto'>
                    <Card.Text>3500</Card.Text>
                </Row>
                    <Button className='add-food'></Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default FoodCartRecommended;