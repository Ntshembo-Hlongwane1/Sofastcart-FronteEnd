import CountDown, { zeroPad } from "react-countdown";
import "./FPHugeCard-Two.css";

const Completionist = () => <span>This special is over</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        <span className="timer-values">{zeroPad(hours)}</span>:
        <span className="timer-values">{zeroPad(minutes)}</span>:
        <span className="timer-values">{zeroPad(seconds)}</span>
      </p>
    );
  }
};

const FPHugeCardTwo = ({ product }) => {
  const inStock = product.quantityInStock;
  const sold = 1;
  const progress = (sold / inStock) * 100;

  return (
    <div className="fpHugeCardTwo">
      <div className="fpHugeCardTwo__salebanner">
        <p className="fpHugeCardTwo__salebanner-special">
          <span>Special</span>
          <span>Offer</span>
        </p>
        <p className="fpHugeCardTwo__salebanner-save">
          <span>Save</span>
          <span>30%</span>
        </p>
      </div>
      <img src={product.images[0]} alt={product.title} />
      <p className="fpHugeCardTwo__title">{product.title}</p>
      <div className="fpHugeCardTwo__price">
        <span>Rs {product.price}</span>
        <span>Rs 399.00</span>
      </div>
      <div className="fpHugeCardTwo__stock">
        <span>
          Already Sold: <strong>{sold}</strong>
        </span>
        <span>
          Available: <strong>{inStock}</strong>
        </span>
      </div>
      <div className="fpHugeCardTwo__progress-container">
        <div
          className="fpHugeCardTwo__progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="fpHugeCardTwo__counterdownTitle">Hurry Up! Offer ends in</p>
      <CountDown date={Date.now() + 30000000} renderer={renderer} />
    </div>
  );
};

export default FPHugeCardTwo;
