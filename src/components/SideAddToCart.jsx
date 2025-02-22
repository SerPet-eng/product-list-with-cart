import { useCartFunction } from '../utils/CartFunctionContext';
import EmptyDisplay from '../error_components/EmptyDisplay';
import SideCard from './SideCard';

export default function SideAddToCart() {
  const { carts } = useCartFunction();

  return (
    <>
      <section className="section-cart">
        <h1 className="cart_title">Your Cart ({carts.length})</h1>
        {carts.length === 0 ? <EmptyDisplay /> : <SideCard />}
      </section>
    </>
  );
}
