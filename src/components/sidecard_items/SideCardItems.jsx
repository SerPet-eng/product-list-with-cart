import { useCartFunction } from '../../utils/CartFunctionContext';
import IconRemove from '../../../assets/images/icon-remove-item.svg';

export default function SideCardItems() {
  const { carts, deleteItem } = useCartFunction();

  return (
    <>
      {carts.map((cart, index) => (
        <div className="cart" key={index}>
          <div className="cart-content">
            <h4 className="cart-title">{cart.name}</h4>
            <div className="cart-info">
              <p className="cart-quantity">{cart.quantity}x</p>
              <p className="cart-price">@${cart.price}</p>
              <p className="cart-totalPrice">${cart.totalPrice}</p>
            </div>
          </div>
          <button className="deleteItem" onClick={() => deleteItem(index)}>
            <img src={IconRemove} alt="Icon Remove" />
          </button>
        </div>
      ))}
    </>
  );
}
