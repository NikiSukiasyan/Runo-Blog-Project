import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import AllArticles from "../components/allarticles/AllArticles";
import Header from "../components/header/Header";
import FirstBanner from "../images/FirstBanner.png";
import SecondBanner from "../images/SecondBanner.png";
import ThirdBanner from "../images/ThirdBanner.png";
import "./Home.scss";

const firebaseConfig = {
  apiKey: "AIzaSyBYJbo3v-3ARuyIf0cYCqrA1-U4zGE4HNE",
  authDomain: "runo-blog.firebaseapp.com",
  databaseURL: "https://runo-blog-default-rtdb.firebaseio.com",
  projectId: "runo-blog",
  storageBucket: "runo-blog.appspot.com",
  messagingSenderId: "295589466264",
  appId: "1:295589466264:web:426434b34211294afa00ed",
  measurementId: "G-7Z64XM5FRX",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function Articles() {
  const [currentImage, setCurrentImage] = useState(FirstBanner);

  useEffect(() => {
    const fetchBannersFromStorage = async () => {
      try {
        const [firstUrl, secondUrl, thirdUrl] = await Promise.all([
          getDownloadURL(ref(storage, "Banners/FirstBanner.png")),
          getDownloadURL(ref(storage, "Banners/SecondBanner.png")),
          getDownloadURL(ref(storage, "Banners/ThirdBanner.png")),
        ]);

        setCurrentImage(firstUrl);
      } catch (error) {
        console.error("Error fetching banner images from Firebase:", error);
      }
    };

    fetchBannersFromStorage();
  }, []);

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
      <AllArticles />
    </>
  );
}

export default React.memo(Articles);
