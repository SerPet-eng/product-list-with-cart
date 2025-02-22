import IconCart from '../../../assets/images/icon-add-to-cart.svg';

// eslint-disable-next-line react/prop-types
export default function AddToCartButton({ onClick }) {
  return (
    <>
      <button className="add-to-cart" onClick={onClick}>
        <img src={IconCart} alt="Icon Cart" />
        Add To Cart
      </button>
    </>
  );
}
