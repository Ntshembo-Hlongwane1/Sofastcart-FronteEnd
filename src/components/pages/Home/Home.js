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
      <ProductsCarousel catagoryName="New Arrivals" />
      <ProductsCarousel catagoryName="Best Sellers" />
      <ProductsCarousel catagoryName="On Sale" />
    </div>
  );
};

export default Home;
