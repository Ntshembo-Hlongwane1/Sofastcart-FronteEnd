import { useState, useEffect } from "react";
import "./Home.css";

// Components
import ImageSlider from "../../layout/ImageSlider/ImageSlider";
import ProductsCarousel from "../../layout/ProductsCarousel/ProductsCarousel";
import FeaturedProductsOne from "../../layout/FeaturedProductsOne/FP-One";
import FeaturedProductsTwo from "../../layout/FeaturedProductsTwo/FP-Two";
import Spinner from "../../layout/Spinner/Spinner";

import products from "../../../assets/productData";

const Home = () => {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  });

  useEffect(() => {
    // TODO: MAKE REQUEST TO API FOR DATA

    const fecthData = async () => {
      setLoading(true);

      setTimeout(() => {
        setHomeData(products);
        setLoading(false);
      }, 1500);
    };

    fecthData();
  }, []);

  return (
    <div className="homepage">
      <ImageSlider />
      {loading ? (
        <Spinner />
      ) : homeData ? (
        <>
          <FeaturedProductsTwo featuredProducts={homeData.slice(0, 10)} />
          <FeaturedProductsOne featuredProducts={homeData.slice(0, 10)} />
          <ProductsCarousel catagoryName="Daily Deals" products={homeData} />
          <ProductsCarousel catagoryName="New Arrivals" products={homeData} />
          <ProductsCarousel catagoryName="Top Rated" products={homeData} />
        </>
      ) : (
        <h3>Something went wrong refresh please!</h3>
      )}
    </div>
  );
};

export default Home;
