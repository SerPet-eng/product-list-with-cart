import Cards from './Cards';
import SideAddToCart from './SideAddToCart';
import OrderConfirmed from './OrderConfirmed';
import ErrorDisplay from '../error_components/ErrorDisplay';
import { useCartFunction } from '../utils/CartFunctionContext';

export default function MainContent() {
  const { haveCarts, error } = useCartFunction();

  return (
    <>
      {error ? (
        <ErrorDisplay />
      ) : (
        <main className={`main ${haveCarts ? 'disabled' : ''}`}>
          <h1 className="main_title">Desserts</h1>
          <div className="main-section">
            <section className="section-card">
              <Cards />
            </section>
            <section className="section-side-cart">
              <SideAddToCart />
            </section>
          </div>

          {haveCarts && <OrderConfirmed />}
        </main>
      )}
    </>
  );
}
