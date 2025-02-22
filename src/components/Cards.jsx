import { useCartFunction } from '../utils/CartFunctionContext';

import IncrementButton from './card_buttons/IncrementButton';
import DecrementButton from './card_buttons/DecrementButton';
import AddToCartButton from './card_buttons/AddToCartButton';

export default function Cards() {
  const { items, carts, incrementItem, decrementItem } = useCartFunction();

  return (
    <>
      {items.map((item, index) => (
        <div className="cards" key={index}>
          <picture
            className={
              carts.some((cartItem) => cartItem.name === item.name)
                ? 'picture'
                : ''
            }
          >
            <source
              className="image"
              media="(min-width: 900px)"
              srcSet={item.image.desktop}
            />
            <source
              className="image"
              media="(min-width: 600px)"
              srcSet={item.image.tablet}
            />
            <source
              className="image"
              media="(min-width: 400px)"
              srcSet={item.image.mobile}
            />
            <img
              className="image"
              src={item.image.mobile}
              alt={`Image of ${item.name}`}
            />
          </picture>

          {carts.some((cartItem) => cartItem.name === item.name) ? (
            <>
              <div className="button-group">
                <DecrementButton onClick={() => decrementItem(index)} />
                <p className="quantity">
                  {carts.find((cartItem) => cartItem.name === item.name)
                    ?.quantity || 0}
                </p>
                <IncrementButton onClick={() => incrementItem(index)} />
              </div>
            </>
          ) : (
            <>
              <AddToCartButton onClick={() => incrementItem(index)} />
            </>
          )}

          <div className="description">
            <p className="description_category">{item.category}</p>
            <p className="description_name">{item.name}</p>
            <p className="description_price">${item.price}</p>
          </div>
        </div>
      ))}
    </>
  );
}
