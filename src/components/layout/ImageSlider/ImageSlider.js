import { useRef, useEffect } from "react";
import Carousel from "react-elastic-carousel";
// import { Transition } from "react-transition-group";
import "./ImageSlider.css";

// Images
import imageOne from "../../../assets/carousel1.jpeg";
import imageTwo from "../../../assets/carousel2.jpeg";
import imageThree from "../../../assets/carousel3.jpeg";
import imageFour from "../../../assets/carousel4.jpeg";
import imageFive from "../../../assets/carousel5.jpeg";

const sliderImages = [
  {
    image: imageOne,
    heading: "House equipment",
    subtext: "Upgrade your house equipment",
    price: "$999.99",
    link: "!#",
  },
  {
    image: imageTwo,
    heading: "Kitchen Luxuries",
    subtext: "Improve your kitchen needs",
    price: "$899.99",
    link: "!#",
  },
  {
    image: imageThree,
    heading: "Mens Cologne",
    subtext: "Smell the best you have had ever smelt",
    price: "$799.99",
    link: "!#",
  },
  {
    image: imageFour,
    heading: "Skincare for Woman",
    subtext: "Get the softest skin today",
    price: "$699.99",
    link: "!#",
  },
  {
    image: imageFive,
    heading: "Epilators",
    subtext: "Remove unwanted hair within seconds",
    price: "$599.99",
    link: "!#",
  },
];

const ImageSlider = () => {
  const itemsPerPage = 1;
  const carouselRef = useRef(null);
  const totalPages = Math.ceil(sliderImages.length / itemsPerPage);
  let resetTimeout;

  useEffect(() => {
    return () => {
      return clearTimeout(resetTimeout);
    };
  });

  return (
    <div className="imageslider">
      <Carousel
        ref={carouselRef}
        enableSwipe={false}
        enableMouseSwipe={false}
        enableAutoPlay={true}
        autoPlaySpeed={5000}
        transitionMs={1000}
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout);
          if (index + 1 === totalPages) {
            resetTimeout = setTimeout(() => {
              carouselRef.current.goTo(0);
            }, 5000);
          }
        }}
        itemsToShow={itemsPerPage}
      >
        {sliderImages.map((el) => (
          <div className="imageslider__container" key={el.heading}>
            <div className="imageslider__item-info">
              <h3 className="imageslider__item-heading">{el.heading}</h3>
              <p className="imageslider__item-subtext">{el.subtext}</p>
              <p className="imageslider__item-price">{el.price}</p>
              <button className="imageslider__item-shopnow">Shop Now</button>
            </div>
            <img
              className="imageslider__image"
              src={el.image}
              alt={el.heading}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
