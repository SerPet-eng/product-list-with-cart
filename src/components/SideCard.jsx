import { useCartFunction } from '../utils/CartFunctionContext';

import SideCardItems from './sidecard_items/SideCardItems';
import IconCarbonNeutral from '../../assets/images/icon-carbon-neutral.svg';

export default function SideCard() {
  const { totalSumProduct, confirmOrder } = useCartFunction();

  return (
    <>
      <div className="box">
        <SideCardItems />
      </div>
      <div className="order">
        <p className="order-text">Order Total</p>
        <p className="order-total-price">${totalSumProduct()}</p>
      </div>
      <div className="reminders">
        <img src={IconCarbonNeutral} alt="Icon of Carbon Neutral" />
        <p className="reminder-text">
          This is a <strong>carbon-neutral</strong> delivery
        </p>
      </div>
      <div className="confirm-btn-section">
        <button className="confirm-order-btn" onClick={() => confirmOrder()}>
          Confirm Order
        </button>
      </div>
    </>
  );
}
