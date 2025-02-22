import MainContent from './components/MainContent';
import CartFunctionContext from './utils/CartFunctionContext';

export default function App() {
  return (
    <>
      <CartFunctionContext>
        <MainContent />
      </CartFunctionContext>
    </>
  );
}
