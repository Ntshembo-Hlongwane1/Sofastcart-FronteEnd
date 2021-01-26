import Carousel from "react-elastic-carousel";
import "./ProductsCarousel.css";

// Components
import ProductCard from "../ProductCard/ProductCard";

// Images
import image1 from "../../../assets/product1.jpeg";
import image2 from "../../../assets/product2.jpeg";
import image3 from "../../../assets/product3.jpeg";
import image4 from "../../../assets/product4.jpeg";
import image5 from "../../../assets/product5.jpeg";
import image6 from "../../../assets/product6.jpeg";
import image7 from "../../../assets/product7.jpeg";
import image8 from "../../../assets/product8.jpeg";
import image9 from "../../../assets/product9.jpeg";
import image10 from "../../../assets/product10.jpeg";
import image11 from "../../../assets/product11.jpeg";
import image12 from "../../../assets/product12.jpeg";

const products = [
  { vendor: "Vendor 1", title: "Product One", price: "150.00", img: image1 },
  { vendor: "Vendor 2", title: "Product Two", price: "250.00", img: image2 },
  { vendor: "Vendor 3", title: "Product Three", price: "350.00", img: image3 },
  { vendor: "Vendor 4", title: "Product Four", price: "450.00", img: image4 },
  { vendor: "Vendor 5", title: "Product Five", price: "100.00", img: image5 },
  { vendor: "Vendor 6", title: "Product Six", price: "200.00", img: image6 },
  { vendor: "Vendor 7", title: "Product Seven", price: "300.00", img: image7 },
  { vendor: "Vendor 8", title: "Product Eight", price: "400.00", img: image8 },
  { vendor: "Vendor 9", title: "Product Nine", price: "170.00", img: image9 },
  { vendor: "Vendor 10", title: "Product Ten", price: "270.00", img: image10 },
  {
    vendor: "Vendor 11",
    title: "Product Eleven",
    price: "370.00",
    img: image11,
  },
  {
    vendor: "Vendor 12",
    title: "Product Twelve",
    price: "470.00",
    img: image12,
  },
];

const ProductsCarousel = ({ catagoryName }) => {
  return (
    <div className="productscarousel">
      <div className="customer_container">
        <h3 className="productscarousel__catagory-name">{catagoryName}</h3>
        <Carousel itemsToShow={5} pagination={false}>
          {products.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductsCarousel;
