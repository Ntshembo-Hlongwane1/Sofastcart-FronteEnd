import "./FP-Two.css";

// Components
import FPHugeCardTwo from "./FPHugeCardTwo/FPHugeCard-Two";
import FPTabContainerTwo from "./FPTabContainer/FPTabContainer-Two";

const FeaturedProductsTwo = ({ featuredProducts }) => {
  return (
    <div className="featuredProductsTwo customer_container">
      <FPHugeCardTwo product={featuredProducts[0]} />

      <FPTabContainerTwo
        products={featuredProducts.slice(1, featuredProducts.length - 1)}
      />
    </div>
  );
};

export default FeaturedProductsTwo;
