import "./FeaturedProducts.css";

// Components
import ProductCard from "../ProductCard/ProductCard";
import HugeProductCard from "../HugeProductCard/HugeProductCard";

import image1 from "../../../assets/product9.jpeg";

const product = {
  vendor: "Vendor 1",
  title: "Product One",
  price: "150.00",
  img: image1,
};

const FeaturedProducts = () => {
  return (
    <div className="featuredproduts">
      <div className="featuredproducts__left">
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div>

      <div className="featuredproducts__middle">
        <HugeProductCard product={product} />
      </div>

      <div className="featuredproducts__right">
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div>
    </div>
  );
};

export default FeaturedProducts;
