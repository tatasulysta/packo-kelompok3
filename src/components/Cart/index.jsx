import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';

import './Cart.css';
import { useCart } from '../../contexts/ContextProvider';
import CartItem from './CartItem';

const Cart = () => {
  const { isCartOpen: show, setIsCartOpen: setShow } = useCart();

  const handleClose = () => setShow(false);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="cart-title">
            <p className="text-xl text-weight-medium mb-1">Keranjang</p>
            <div className="text-sm cart-time">
              <div className="cart-time-icon">
                <Image src="/images/clock.svg" alt="time" />
              </div>
              Delivery time: 30 min (3.2 km away)
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="cart-items">
            <CartItem />
            <div className="subtotal p-24 text-sm d-flex flex-column gap-2">
              <div className="d-flex justify-content-between">
                <div>Subtotal</div>
                <div>28.000</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Delivery fee akan ditampilkan setelah checkout</div>
                <div>-</div>
              </div>
            </div>
          </div>
          <div className="cart-order p-24">
            <div className="d-flex justify-content-between mb-4">
              <div className="text-lg text-weight-medium">Total</div>
              <div className="text-lg text-weight-bold">28.000</div>
            </div>
            <button className="cart-order-button text-base text-weight-medium">
              Login untuk lanjut ke checkout
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
