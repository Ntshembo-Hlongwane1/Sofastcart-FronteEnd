import Carousel from "react-elastic-carousel";

import "./ProductsCarousel.css";

// Components
import ProductCard from "../ProductCard/ProductCard";

const ProductsCarousel = ({ catagoryName, products }) => {
  const breakPoints = [
    { width: 375, itemsToShow: 2, itemsToScroll: 2 },
    { width: 650, itemsToShow: 3 },
    { width: 1121, itemsToShow: 4 },
    { width: 1290, itemsToShow: 5 },
  ];

  return (
    <div className="productscarousel">
      <div className="customer_container">
        <h3 className="productscarousel__catagory-name">{catagoryName}</h3>
        <Carousel
          enableMouseSwipe={false}
          pagination={false}
          itemsToShow={5}
          breakPoints={breakPoints}
        >
          {products &&
            products.map((product) => (
              <ProductCard product={product} key={product.title} />
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductsCarousel;
