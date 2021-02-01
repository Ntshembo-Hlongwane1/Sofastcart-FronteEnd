import "./Home.css";

// Components
import ImageSlider from "../../layout/ImageSlider/ImageSlider";
import ProductsCarousel from "../../layout/ProductsCarousel/ProductsCarousel";
import FeaturedProducts from "../../layout/FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <div className="homepage">
      <ImageSlider />
      <FeaturedProducts />
      <ProductsCarousel catagoryName="Daily Deals" />
      <ProductsCarousel catagoryName="New Arrivals" />
      <ProductsCarousel catagoryName="Top Rated" />
    </div>
  );
};

export default Home;
