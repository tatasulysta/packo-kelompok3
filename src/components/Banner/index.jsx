import React, { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import styles from './styles.module.css';

import Rating from '../Rating';
import Breadcrumbs from '../Breadcrumbs';
import Navbar from '../Navbar';
import Badge from '../Badge';
import TimeInformation from '../TimeInformation';
import { Col, Container, Row } from 'react-bootstrap';

const Banner = ({ setHover }) => {
  return (
    <div
      className={styles.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <Container className={styles.wrapper}>
        <Breadcrumbs />
        <Row className="d-flex justify-content-end">
          <Col className={styles['row__left-wrapper']}>
            <h1 className={`text-4xl text-weight-bold ${styles.title}`}>Bubur Yoyong</h1>
            <div className="d-flex gap-4">
              <Badge />
              <span className="d-inline-flex gap-3">
                <TimeInformation open="7:00" close="15:00" />
                <FiChevronDown
                  fontSize={'15px'}
                  style={{ marginTop: '3px' }}
                  color="var(--brand-purple)"
                />
              </span>
              <p className="text-sm text-weight-regular">
                Breakfast | Jalan Magelang, Jetis, Yogyakarta
              </p>
            </div>
          </Col>
          <Rating className={styles.rate} />
        </Row>
      </Container>
      <Navbar />
    </div>
  );
};

export default Banner;
