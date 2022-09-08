import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import styles from './Footer.module.css';
import logo from '../../assets/packo-logo-white.png';
import google from '../../assets/google-play-white.png';
import apple from '../../assets/app-store-white.png';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Container className={styles['footer-text-white']}>
        <Row className={styles['footer-width']}>
          <Col md={8}>
            <div className={styles['footer-logo']}>
              <Image src={logo} alt="packo-logo" fluid />
            </div>
            <p className="text-3xl text-weight-medium mb-3">
              Pemadam kelaparan ketika kamu mager keluar rumah
            </p>
            <p className={`${styles['mb-56']} text-base`}>
              Scelerisque platea pulvinar neque egestas et vivamus praesent porttitor libero.
            </p>

            <ul className={'list-unstyled d-flex gap-4 text-xs'}>
              <li>© 2022 Packo</li>
              <li>
                <Link to="/privacy" className={styles['footer-link']}>
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link to="/term" className={styles['footer-link']}>
                  Terms of service
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="d-flex flex-column align-items-md-end align-items-start justify-content-center mt-md-0 mt-4">
            <div className={styles['footer-app']}>
              <Image src={google} alt="google" fluid />
            </div>
            <div className={`${styles['footer-app']}`}>
              <Image src={apple} alt="apple" fluid />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
