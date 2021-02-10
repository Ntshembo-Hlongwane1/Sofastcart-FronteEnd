import { useEffect } from "react";
import "./Home.css";

// Components
import ImageSlider from "../../layout/ImageSlider/ImageSlider";
import ProductsCarousel from "../../layout/ProductsCarousel/ProductsCarousel";
import FeaturedProductsOne from "../../layout/FeaturedProductsOne/FP-One";
import FeaturedProductsTwo from "../../layout/FeaturedProductsTwo/FP-Two";

import products from "../../../assets/productData";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  });

  return (
    <div className="homepage">
      <ImageSlider />
      <FeaturedProductsTwo featuredProducts={products.slice(0, 10)} />
      <FeaturedProductsOne featuredProducts={products.slice(0, 10)} />
      <ProductsCarousel catagoryName="Daily Deals" products={products} />
      <ProductsCarousel catagoryName="New Arrivals" products={products} />
      <ProductsCarousel catagoryName="Top Rated" products={products} />
    </div>
  );
};

export default Home;
