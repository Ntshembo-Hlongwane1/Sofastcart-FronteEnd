import { useState, useEffect } from "react";

import "./Product.css";

// Components
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import ProductPageTopInfo from "../../layout/ProductPageTopInfo/ProductPageTopInfo";
import ProductPageDescription from "../../layout/ProductPageDescription/ProductPageDescription";
import ProductsCarousel from "../../layout/ProductsCarousel/ProductsCarousel";
import ProductReviews from "../../layout/ProductReviews/ProductReviews";

import Products from "../../../assets/productData";

const Product = ({ match }) => {
  const productId = match.params.productId - 1;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  });

  useEffect(() => {
    // TODO: make request to backend to gfet product by id
    setProduct(Products[productId]);
  }, [productId, product]);

  return (
    <div className="productpage">
      {product && (
        <>
          <Breadcrumb route={[{ title: `${product.title}` }]} />

          <ProductPageTopInfo product={product} />

          <ProductPageDescription
            desc={product.description}
            specs={product.specifications}
          />

          <div id="customer-reviews">
            <ProductReviews reviews={product.reviews} />
          </div>

          <ProductsCarousel catagoryName="Related items" />
        </>
      )}
    </div>
  );
};

export default Product;
