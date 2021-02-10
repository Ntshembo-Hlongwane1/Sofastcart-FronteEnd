import { useState } from "react";
import "./FpTabContainer-Two.css";

// Components
import FPTabContainerHeaderTwo from "./FPTabContainerHeader/FPTabContainerHeaderTwo";
import FPCardTwo from "../FPCardTwo/FPCard-Two";

const FPTabContainerTwo = ({ products = [] }) => {
  const [tabIdx, setTabIdx] = useState(0);

  return (
    <div className="fpTabContainerTwo">
      <FPTabContainerHeaderTwo tab={tabIdx} changeTabIdx={setTabIdx} />

      <div className="fpTabContainerTwo__cardgrid">
        {products.length > 0 &&
          products.map((product) => (
            <FPCardTwo key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default FPTabContainerTwo;
