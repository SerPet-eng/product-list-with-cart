import { useCartFunction } from '../../utils/CartFunctionContext';

export default function OrderItemsComponents() {
  const { carts } = useCartFunction();

  return (
    <>
      <div className="order-confirmed-items">
        {carts.map((cart, index) => (
          <div className="order-confirmed-cart" key={index}>
            <img
              className="order-confirmed-image"
              src={cart.thumbnail}
              alt={`Image of ${cart.name}`}
            />
            <div className="order-confirmed-cart-content" key={index}>
              <h4 className="order-confirmed-cart-title">{cart.name}</h4>
              <div className="order-confirmed-cart-info">
                <p className="order-confirmed-cart-quantity">
                  {cart.quantity}x
                </p>
                <p className="order-confirmed-cart-price">@ ${cart.price}</p>
              </div>
            </div>
            <p className="order-confirmed-cart-totalPrice">
              ${cart.totalPrice}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
