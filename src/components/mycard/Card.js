import React, { useState, useEffect } from "react";
import "./Card.css";
import illus1 from "./../../assets/illus1.png";
import illus2 from "./../../assets/illus2.png";
import illus3 from "./../../assets/illus3.png";
function Card({ activeIndex }) {
  const content = [
    {
      title: "Title1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 1 ",
      image: illus1,
    },
    {
      title: "Title2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, description 2 ",
      image: illus2,
    },
    {
      title: "Title3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, description 3 ",
      image: illus3,
    },
  ];

  return (
    <div className="d-flex flex-column justify-content-around content">
      <div className="imageWrapper">
        <img src={content[activeIndex].image} />
      </div>
      <div>
        <h2 className="title my-3 ">{content[activeIndex].title}</h2>
        <p className="description">{content[activeIndex].description}</p>
      </div>
    </div>
  );
}

export default Card;
