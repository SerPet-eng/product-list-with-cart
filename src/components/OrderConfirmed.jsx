import { useCartFunction } from '../utils/CartFunctionContext';
import IconOrderConfirmed from '../../assets/images/icon-order-confirmed.svg';
import OrderItemsComponents from './order_items/OrderItemsComponents';

export default function OrderConfirmed() {
  const { totalSumProduct, selectNewOrder } = useCartFunction();

  return (
    <>
      <div className="blur"></div>

      <div className="order-confirmed">
        <img
          className="order-confirmed-icon"
          src={IconOrderConfirmed}
          alt="Icon of Order Confirmed"
        />
        <div className="order-confirmed-message">
          <p className="order-confirmed-title">Order Confirmed</p>
          <p className="order-confirmed-text">We hope you enjoy your food!</p>
        </div>

        <OrderItemsComponents />

        <div className="order-confirmed-total-section">
          <p className="order-confirmed-text">Order Total</p>
          <p className="order-confirmed-total-price">${totalSumProduct()}</p>
        </div>
        <div className="order-confirmed-btn-section">
          <button
            className="start-new-order-btn"
            onClick={() => selectNewOrder()}
          >
            Start New Order
          </button>
        </div>
      </div>
    </>
  );
}
