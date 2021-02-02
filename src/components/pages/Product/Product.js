import { useState, useEffect } from "react";

import "./Product.css";

// Components
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";

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
  Our new HPB12 / A12 battery is rated at 2000mAh and designed to power up Black and Decker / FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models:

  Black & Decker Drills and Drivers:
  BD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121 
  
  Black & Decker Impact Wrenches:
  SX5000, XTC12IK, XTC12IKH 
  
  Black & Decker Multi-Tools:
  KC2000FK 
  
  Black & Decker Nailers:
  BDBN1202  
  
  Black & Decker Screwdrivers:
  HP9019K 
  
  and other 12V tools.
  
  Best replacement for the following Black and Decker OEM battery part numbers:
  HPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.
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
    { comment: "Great product", author: "John Doe", value: 5 },
    { comment: "Gets the job done", author: "Jane Doe", value: 4 },
    { comment: "Just perfect", author: "Jeff Bezos", value: 5 },
  ],
};

const Product = ({ match }) => {
  const productId = match.params.productId;

  const [product, setProduct] = useState(null);
  const [imageIdx, setImageIdx] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    // TODO: make request to backend to gfet product by id
    setProduct(productResult);
  }, [productId, product]);

  const onQuantityChange = (e) => {
    const operationType = e.target.id;

    if (operationType === "inc-qty" && qty < product.quantityInStock) {
      setQty((prevQty) => prevQty + 1);
    } else if (operationType === "desc-qty" && qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  return (
    <div className="productpage">
      {product && (
        <>
          <Breadcrumb route={[{ title: `${product.title}` }]} />
          <div className="productpage__productSummary customer_container">
            {/* IMAGES SECTION */}
            <div className="productpage__images">
              <img
                className="productpage__images-main"
                src={product.images[imageIdx]}
                alt="product showcase"
              />
              <div className="productpage__thumbnails">
                {product.images.map((img, idx) => (
                  <div
                    className="productpage__thumbnail"
                    key={idx}
                    style={
                      imageIdx === idx
                        ? { borderBottom: "2px solid #fed700" }
                        : null
                    }
                    onClick={() => setImageIdx(idx)}
                  >
                    <img src={img} alt="product thumbnail showcase" />
                  </div>
                ))}
              </div>
            </div>

            {/* SUMMARY INFO SECTION */}
            <div className="productpage__summary">
              <div className="productpage__summary-head">
                <p className="productpage__vendor">{product.vendor}</p>
                <h4 className="productpage__productName">{product.title}</h4>
                <div className="productpage__rating">
                  <div>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>

                  <span>(No reviews)</span>

                  <a href="#customer-reviews">Add Your Review</a>
                </div>
              </div>

              <div className="productpage__summary-middle">
                <ul>
                  {product.specifications.slice(0, 4).map((spec, idx) => (
                    <li key={idx}>{spec}</li>
                  ))}
                </ul>
              </div>

              <div className="productpage__summary-bottom">
                <ul>
                  <li>Brand: {product.brand}</li>
                  <li>Category: {product.category}</li>
                </ul>
              </div>
            </div>

            {/* PRICING SECTION */}
            <div className="productpage__pricing">
              <div>
                <p className="productpage__availablity">
                  <span>Available: </span>
                  <span
                    style={
                      product.quantityInStock > 0
                        ? { color: "#4bd964" }
                        : { color: "#ee1d00" }
                    }
                  >
                    {product.quantityInStock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </p>
                <p className="productpage__price">
                  <span>Rs </span>
                  <span>{product.price}</span>
                </p>
                <div className="productpage__qty">
                  <label htmlFor="quantity">Quantity</label>
                  <div className="productpage__qty-selector">
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      max={product.quantityInStock}
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    />
                    <div>
                      <span id="inc-qty" onClick={onQuantityChange}>
                        +
                      </span>
                      <span id="desc-qty" onClick={onQuantityChange}>
                        -
                      </span>
                    </div>
                  </div>
                </div>

                <button className="productpage__wishlistBtn">
                  <i className="far fa-heart"></i>
                  <span>Wishlist</span>
                </button>
              </div>
            </div>
          </div>

          <div className="productpage__productInfo">
            <div className="customer_container"></div>
          </div>

          <div id="customer-reviews" className="productpage__customerReviews">
            <div className="customer_container"></div>
          </div>

          <div className="productpage__relatedItems">
            <div className="customer_container"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
