import "./Home.css";

// Components
import ImageSlider from "../../layout/ImageSlider/ImageSlider";
import ProductsCarousel from "../../layout/ProductsCarousel/ProductsCarousel";

const Home = () => {
  return (
    <div className="homepage">
      <ImageSlider />
      <ProductsCarousel catagoryName="Newarrivals" />
      <ProductsCarousel catagoryName="Best Sealers" />
      <ProductsCarousel catagoryName="On Sale" />
    </div>
  );
};

export default Home;
