import IconEmptyCart from '../../assets/images/illustration-empty-cart.svg';

export default function EmptyDisplay() {
  return (
    <>
      <div className="empty">
        <img
          className="empty_image"
          src={IconEmptyCart}
          alt="Illustration of Empty Cart"
        />
        <p className="empty_title">Your added items will appear here</p>
      </div>
    </>
  );
}
