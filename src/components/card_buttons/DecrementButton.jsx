import IconDecrement from '../../../assets/images/icon-decrement-quantity.svg';

// eslint-disable-next-line react/prop-types
export default function DecrementButton({ onClick }) {
  return (
    <>
      <button className="button decrement" onClick={onClick}>
        <img src={IconDecrement} alt="Icon Decrement" />
      </button>
    </>
  );
}
