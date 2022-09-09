import React from 'react';
import { Container, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import styles from './styles.module.css';

function ShowDetail(props) {
  console.log(props);
  return (
    <Container>
      <Modal show={props.isOpen} onHide={props.onHide} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <Col>
            <Row>
              <img src={props.menu.imgUrl} className="mb-4" />
            </Row>
            <Row className="justify-content-center align-items-center">
              <Col>
                <Row>
                  <p className="text-base text-weight-medium">{props.menu.name}</p>
                </Row>
                <Row>
                  <p>{props.menu.price}</p>
                </Row>
              </Col>
              <Col xs={2} className="align-items-center">
                <Button className="add-food"></Button>
              </Col>
            </Row>
          </Col>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default ShowDetail;
