import IconIncrement from '../../../assets/images/icon-increment-quantity.svg';

// eslint-disable-next-line react/prop-types
export default function IncrementButton({ onClick }) {
  return (
    <>
      <button className="button increment" onClick={onClick}>
        <img src={IconIncrement} alt="Icon Increment" />
      </button>
    </>
  );
}
