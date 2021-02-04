import { useState, useEffect } from "react";

import "./Product.css";

// Components
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import ProductPageTopInfo from "../../layout/ProductPageTopInfo/ProductPageTopInfo";
import ProductPageDescription from "../../layout/ProductPageDescription/ProductPageDescription";
import ProductsCarousel from "../../layout/ProductsCarousel/ProductsCarousel";
import ProductReviews from "../../layout/ProductReviews/ProductReviews";

// Image
import image1 from "../../../assets/product6.jpeg";
import image2 from "../../../assets/product7.jpeg";

const productResult = {
  images: [image1, image2],
  title: "Product One",
  category: "Category One",
  brand: "Brand One",
  vendor: "Vendor One",
  description: `
  <p>
  Our new <strong>HPB12 / A12 battery</strong> is rated at 2000mAh and designed to power up Black and Decker / FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models:
  </p>

  <br />

  <p><strong>Black & Decker Drills and Drivers:</strong></p>
  <p>
  BD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121 
  </p>

  <br />

  <p><strong>Black & Decker Impact Wrenches:</strong></p>
  <p>
  SX5000, XTC12IK, XTC12IKH
  </p>

  <br />

  <p><strong>Black & Decker Multi-Tools:</strong></p>
  <p>
  KC2000FK 
  </p>

  <br />

  <p><strong>Black & Decker Nailers:</strong></p>
  <p>
  BDBN1202  
  </p>

  <br />

  <p><strong>Black & Decker Screwdrivers:</strong></p>
  <p>
  HP9019K 
  </p>

  <p>
  and other 12V tools.
  </p>

  <p>
  Best replacement for the following Black and Decker OEM battery part numbers:
  HPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.
  </p>
  `,
  specifications: [
    "Play online with your friends, get free games, save games online and more with PlayStation",
    "Cutting edge graphics bring game worlds to life like never before, and next gen",
    "Connect with your friends to broadcast and celebrate your epic moments",
    "Perfect for both new players and players new to PS4",
    "Chemistry: Ni-CD",
    "Voltage: 12V",
    "AmpHours: 2000mAh",
    "Dimensions: 109.75x79.55x62.20mm",
    "4.5 inch HD Screen",
    "Android 4.4 KitKat OS",
    "1.4 GHz Quad Core™ Processor",
    "20 MP front Camera",
  ],
  price: "200.00",
  quantityInStock: 5,
  reviews: [
    { body: "Great product", author: "John Doe", value: 5, date: "2020-04-23" },
    {
      body: "Gets the job done",
      author: "Jane Doe",
      value: 4,
      date: "2020-04-25",
    },
    {
      body: "Just perfect",
      author: "Jeff Bezos",
      value: 5,
      date: "2020-06-04",
    },
  ],
};

const Product = ({ match }) => {
  const productId = match.params.productId;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  });

  useEffect(() => {
    // TODO: make request to backend to gfet product by id
    setProduct(productResult);
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
