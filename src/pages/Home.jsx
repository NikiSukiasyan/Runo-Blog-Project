import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

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

function Home() {
  const [currentImage, setCurrentImage] = useState(null);
  const [firstBannerUrl, setFirstBannerUrl] = useState(null);
  const [secondBannerUrl, setSecondBannerUrl] = useState(null);
  const [thirdBannerUrl, setThirdBannerUrl] = useState(null);

  useEffect(() => {
    const fetchBannersFromStorage = async () => {
      const storageRef = ref(storage, "Banners");

      try {
        const [firstUrl, secondUrl, thirdUrl] = await Promise.all([
          getDownloadURL(ref(storageRef, "FirstBanner.png")),
          getDownloadURL(ref(storageRef, "SecondBanner.png")),
          getDownloadURL(ref(storageRef, "ThirdBanner.png")),
        ]);

        setFirstBannerUrl(firstUrl);
        setSecondBannerUrl(secondUrl);
        setThirdBannerUrl(thirdUrl);
        setCurrentImage(firstUrl);
      } catch (error) {
        console.error("Error fetching banner images from Firebase:", error);
      }
    };

    fetchBannersFromStorage();
  }, [storage]);

  const handleDotClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <>
      <Header />
      <div className="slideshow-container">
        <img src={currentImage} className="slideshow-image" alt="Banner" />
        <div className="dots-container">
          <div
            className={`dot ${currentImage === firstBannerUrl ? "active" : ""}`}
            onClick={() => handleDotClick(firstBannerUrl)}
          ></div>
          <div
            className={`dot ${
              currentImage === secondBannerUrl ? "active" : ""
            }`}
            onClick={() => handleDotClick(secondBannerUrl)}
          ></div>
          <div
            className={`dot ${currentImage === thirdBannerUrl ? "active" : ""}`}
            onClick={() => handleDotClick(thirdBannerUrl)}
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
      <Footer />
    </>
  );
}

export default Home;
