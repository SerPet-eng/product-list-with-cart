import { useState, createContext, useContext } from 'react';
import useFetchData from './useFetchData';

const CartFunctionProvider = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCartFunction = () => {
  return useContext(CartFunctionProvider);
};

// eslint-disable-next-line react/prop-types
export default function CartFunctionContext({ children }) {
  const { data: items, error } = useFetchData('../../data/data.json');

  const [carts, setCart] = useState([]);
  const [haveCarts, setHaveCarts] = useState(false);

  const incrementItem = (index) => {
    const item = items[index];
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.name === item.name,
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                totalPrice: (cartItem.quantity + 1) * cartItem.price,
                thumbnail: item.image.thumbnail,
              }
            : cartItem,
        );
      }

      return [
        ...prevCart,
        {
          name: item.name,
          quantity: 1,
          price: item.price,
          totalPrice: item.price,
          thumbnail: item.image.thumbnail,
        },
      ];
    });
  };

  const decrementItem = (index) => {
    const item = items[index];
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.name === item.name,
      );
      if (existingItem) {
        if (existingItem.quantity === 1) {
          return prevCart.filter((cartItem) => cartItem.name !== item.name);
        }
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
                totalPrice: (cartItem.quantity - 1) * cartItem.price,
              }
            : cartItem,
        );
      }
      return prevCart;
    });
  };

  const deleteItem = (index) => {
    setCart((prevCart) =>
      prevCart.filter((_, cartIndex) => cartIndex !== index),
    );
  };

  const totalSumProduct = () => {
    const totalSum = carts.reduce(
      (accumulator, currentItem) => accumulator + currentItem.totalPrice,
      0,
    );
    return totalSum;
  };

  const confirmOrder = () => {
    if (carts) {
      setHaveCarts(true);
    }
  };

  const selectNewOrder = () => {
    setHaveCarts(false);
    setCart([]);
  };

  if (error) return console.log(error);

  const variousValue = {
    items,
    incrementItem,
    decrementItem,
    deleteItem,
    totalSumProduct,
    confirmOrder,
    selectNewOrder,
    haveCarts,
    carts,
    error,
  };

  return (
    <>
      <CartFunctionProvider.Provider value={variousValue}>
        {children}
      </CartFunctionProvider.Provider>
    </>
  );
}
