import "./FP-One.css";

// Components
import FPHugeCard from "./FPHugeCardOne/FPHugeCard-One";
import FPCard from "./FPCard-One";

const FeaturedProductsOne = ({ featuredProducts }) => {
  return (
    <div className="feauturedproducts">
      <div className="customer_container">
        <h3 className="productscarousel__catagory-name">Featured</h3>
        <div className="featuredproduts__grid">
          {featuredProducts.length > 0 && (
            <>
              <div className="featuredproducts__left">
                {featuredProducts.slice(0, 4).map((product) => (
                  <FPCard key={product.title} product={product} />
                ))}
              </div>

              <div className="featuredproducts__middle">
                <FPHugeCard product={featuredProducts[4]} />
              </div>

              <div className="featuredproducts__right">
                {featuredProducts.slice(5, 9).map((product) => (
                  <FPCard key={product.title} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsOne;
