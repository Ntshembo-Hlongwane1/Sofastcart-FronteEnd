import { useState, useEffect } from "react";

import "./Product.css";

// Components
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import ProductPageTopInfo from "../../layout/ProductPageTopInfo/ProductPageTopInfo";
import ProductPageDescription from "../../layout/ProductPageDescription/ProductPageDescription";
import ProductsCarousel from "../../layout/ProductsCarousel/ProductsCarousel";
import ProductReviews from "../../layout/ProductReviews/ProductReviews";
import Spinner from "../../layout/Spinner/Spinner";

import products from "../../../assets/productData";

const Product = ({ match }) => {
  const productId = match.params.productId - 1;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  });

  useEffect(() => {
    // TODO: make request to backend to get product by id

    const fetchData = async () => {
      setLoading(true);
      setTimeout(() => {
        setProduct(products[productId]);
        setLoading(false);
      }, 1500);
    };

    fetchData();
  }, [productId]);

  return (
    <div className="productpage">
      {loading ? (
        <Spinner />
      ) : product ? (
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

          <ProductsCarousel
            catagoryName="Related items"
            products={products.reverse()}
          />
        </>
      ) : (
        <h3>Something went wrong please reload page!</h3>
      )}
    </div>
  );
};

export default Product;
