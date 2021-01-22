import { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
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

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const ImageSlider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [inProp, setInProp] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInProp(false);
    }, 4000);

    const interval = setInterval(() => {
      setInProp(true);
      const newIdx = sliderIndex + 1;

      if (newIdx > sliderImages.length - 1) {
        setSliderIndex(0);
      } else {
        setSliderIndex(newIdx);
      }
    }, 5000);
    return () => {
      return clearInterval(interval);
    };
  }, [sliderIndex]);

  return (
    <div className="imageslider">
      <img
        className="imageslider__image"
        src={sliderImages[sliderIndex].image}
        alt={`Carousel Slide ${sliderIndex}`}
      />

      <Transition in={inProp} timeout={duration}>
        {(state) => (
          <div
            className="imageslider__info"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <p className="imageslider__info-heading">
              {sliderImages[sliderIndex].heading}
            </p>
            <p className="imageslider__info-subheading">
              {sliderImages[sliderIndex].subtext}
            </p>
            <p className="imageslider__info-price">
              {sliderImages[sliderIndex].price}
            </p>
            <a
              href={sliderImages[sliderIndex].link}
              className="imageslider__info-cta"
            >
              Shop Now
            </a>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default ImageSlider;
