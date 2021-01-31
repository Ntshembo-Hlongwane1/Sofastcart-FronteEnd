import { useState, useEffect } from "react";
import "./FeaturedProducts.css";

// Components
import HugeProductCard from "../HugeProductCard/HugeProductCard";
import FeaturedProductCard from "./FeaturedProductCard";

import image1 from "../../../assets/product9.jpeg";
import image2 from "../../../assets/product10.jpeg";
import image3 from "../../../assets/product11.jpeg";
import image4 from "../../../assets/product12.jpeg";
import image5 from "../../../assets/product1.jpeg";
import image6 from "../../../assets/product2.jpeg";
import image7 from "../../../assets/product3.jpeg";
import image8 from "../../../assets/product4.jpeg";
import image9 from "../../../assets/product5.jpeg";

const products = [
  {
    vendor: "Vendor 1",
    title: "Product One",
    price: "150.00",
    img: [image1],
  },
  {
    vendor: "Vendor 2",
    title: "Product Two",
    price: "250.00",
    img: [image2],
  },
  {
    vendor: "Vendor 3",
    title: "Product Three",
    price: "350.00",
    img: [image3],
  },
  {
    vendor: "Vendor 4",
    title: "Product Four",
    price: "450.00",
    img: [image4],
  },
  {
    vendor: "Vendor 5",
    title: "Product Five",
    price: "550.00",
    img: [image5, image5, image5],
  },
  {
    vendor: "Vendor 6",
    title: "Product Siz",
    price: "100.00",
    img: [image6],
  },
  {
    vendor: "Vendor 7",
    title: "Product Seven",
    price: "200.00",
    img: [image7],
  },
  {
    vendor: "Vendor 8",
    title: "Product Eight",
    price: "300.00",
    img: [image8],
  },
  {
    vendor: "Vendor 9",
    title: "Product Nine",
    price: "400.00",
    img: [image9],
  },
];

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // TODO: Make reuest to backend to get all featured products and add them to state
    setFeaturedProducts(products);
  }, []);

  return (
    <div className="feauturedproducts">
      <div className="customer_container">
        <h3 className="productscarousel__catagory-name">Featured</h3>
        <div className="featuredproduts__grid">
          {featuredProducts.length > 0 && (
            <>
              <div className="featuredproducts__left">
                {featuredProducts.slice(0, 4).map((product) => (
                  <FeaturedProductCard key={product.title} product={product} />
                ))}
              </div>

              <div className="featuredproducts__middle">
                <HugeProductCard product={featuredProducts[4]} />
              </div>

              <div className="featuredproducts__right">
                {featuredProducts.slice(5, 9).map((product) => (
                  <FeaturedProductCard key={product.title} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
