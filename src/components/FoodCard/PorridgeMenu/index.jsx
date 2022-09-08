import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import '../style.css'
import menu from '../../../data/food';

const PorridgeMenu = () => {
    return (
        menu.porridgeMenus.map((porridge) => {
            return (
                <Col lg={4} className='mb-4 p-0'>
                    <Card>
                        <Card.Body className='p-0'>
                            <Row>
                                <Col lg={4}>
                                    <img className='menu' src={process.env.PUBLIC_URL + porridge.imgUrl} alt='porridge-menu'/>
                                </Col>
                                <Col lg={8} className='details'>
                                    <Row>
                                        <Col lg={12}>
                                            <Card.Text className='title text-base text-weight-medium'>{porridge.name}</Card.Text>
                                        </Col>
                                    </Row>
                                    <Row className='justify-content-between align-items-center'>
                                        <Col lg={9}>
                                            <Card.Text>{porridge.price}</Card.Text>
                                        </Col>
                                        <Col lg={3} className='text-center'>
                                            <Button className='add-food'></Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            );
        })
    )
}

export default PorridgeMenu;