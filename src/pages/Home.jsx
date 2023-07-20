import React, { useState } from "react";
import Header from "../components/header/Header";
import FirstBanner from "../images/FirstBanner.png";
import SecondBanner from "../images/SecondBanner.png";
import ThirdBanner from "../images/ThirdBanner.png";
import "./Home.scss";
import Main from "../components/main/Main";

function Home() {
  const [currentImage, setCurrentImage] = useState(FirstBanner);

  const handleDotClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <>
      <Header />
      <div className="slideshow-container">
        <img
          src={currentImage}
          className="slideshow-image"
          alt="First Banner"
        />
        <div className="dots-container">
          <div
            className={`dot ${currentImage === FirstBanner ? "active" : ""}`}
            onClick={() => handleDotClick(FirstBanner)}
          ></div>
          <div
            className={`dot ${currentImage === SecondBanner ? "active" : ""}`}
            onClick={() => handleDotClick(SecondBanner)}
          ></div>
          <div
            className={`dot ${currentImage === ThirdBanner ? "active" : ""}`}
            onClick={() => handleDotClick(ThirdBanner)}
          ></div>
        </div>
        <div className="advanture">
          <p>ADVANTURE</p>
        </div>
        <div className="title-container">
          <h2>Richird Norton photorealistic rendering as real photos</h2>
          <div>
            <span className="date-span">08.08.2021</span>
            <p>
              Progressively incentivize cooperative systems through technically
              sound functionalities. The credibly productivate seamless data.
            </p>
          </div>
        </div>
      </div>
      <Main />
    </>
  );
}

export default Home;
