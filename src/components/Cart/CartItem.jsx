import { useState } from 'react';
import Image from 'react-bootstrap/Image';

const CartItem = () => {
  const [qty, setQty] = useState(1);

  const handleQty = (status) => {
    if (status === 'increment') {
      setQty((prev) => prev + 1);
    } else if (status === 'decrement') {
      setQty((prev) => {
        // qty can't below 1
        if (prev <= 1) {
          return prev;
        } else {
          return prev - 1;
        }
      });
    }
  };

  return (
    <div className="cart-item">
      <p className="text-xl text-weight-medium">Bubur Yoyong</p>
      <div className="cart-item-detail d-flex align-items-center justify-content-between">
        <div className="cart-item-detail-count d-flex align-items-center gap-3">
          <button className="cart-item-icon border-0" onClick={() => handleQty('decrement')}>
            <Image src="/images/u_minus.svg" alt="decrement" />
          </button>
          <div className="text-lg text-weight-medium">{qty}</div>
          <button className="cart-item-icon border-0" onClick={() => handleQty('increment')}>
            <Image src="/images/u_plus.svg" alt="increment" />
          </button>
        </div>

        <div className="cart-item-detail-name d-flex align-items-center">
          <div className="cart-item-detail-name-img">
            <Image src="/images/rectangle-2-7.png" alt="item" className="img-fluid" />
          </div>
          <div className="text-sm text-weight-medium">Bubur Sarang Telor Setengah Matang</div>
        </div>
        <div className="text-sm cart-item-detail-price">
          <div>28.000</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
