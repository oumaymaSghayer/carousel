import React, { useState, useEffect } from "react";
import "./Shopify.css";
import Card from "./../mycard/Card";
import Slider from "react-slick";
function Shopify() {
  const [activeIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className="card my-container d-flex flex-column justify-content-around align-items-center">
      <div>
        <Slider className="my-slider" {...settings}>
          <div>
            <Card activeIndex={0} />
          </div>
          <div>
            <Card activeIndex={1} />
          </div>
          <div>
            <Card activeIndex={2} />
          </div>
        </Slider>
      </div>
      <div>
        <button
          type="button"
          class={
            activeIndex == 1
              ? "btn btn-light rounded-pill px-3"
              : "btn btn-primary rounded-pill px-3"
          }
        >
          Get started
        </button>
      </div>
    </div>
  );
}

export default Shopify;
