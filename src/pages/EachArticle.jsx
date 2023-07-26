import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ThirdBanner from "../images/ThirdBanner.png";
import { useArticlesContext } from "../ArticlesContext";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Header from "../components/header/Header";
import "./EachArticle.scss";
import FacebookIcon from "../images/facebook.svg";
import TwitterIcon from "../images/twitter.svg";
import YoutubeIcon from "../images/youtube.svg";
import PinterestIcon from "../images/pinterest.svg";
import BehanceIcon from "../images/behance.svg";
import Footer from "../components/footer/Footer";

function EachArticle() {
  const { articleId } = useParams();
  const [currentImage, setCurrentImage] = useState(ThirdBanner);
  const [loading, setLoading] = useState(true);
  const articlesContext = useArticlesContext();

  const article = articlesContext.articles.find(
    (article) => article.id === parseInt(articleId)
  );

  useEffect(() => {
    const fetchBannerFromStorage = async () => {
      if (article) {
        const storage = getStorage();
        try {
          const imageUrl = await getDownloadURL(
            ref(storage, `Banners/${article.bannerImageName}`)
          );
          setCurrentImage(imageUrl);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching banner image from Firebase:", error);
          setLoading(false);
        }
      }
    };

    fetchBannerFromStorage();
  }, [article]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article Not Found</div>;
  }

  const openSocialMediaLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Header />
      <div className="each-slideshow-container">
        <img
          src={currentImage}
          className="slideshow-image"
          alt="First Banner"
        />
        <div className="each-advanture">
          <p>{article.type}</p>
        </div>
        <div className="each-title-container">
          <h2>{article.title}</h2>
          <div>
            <p>{article.description}</p>
            <p className="by-writer">{article.name}</p>
          </div>
        </div>
      </div>
      <div className="article-info">
        <div className="time-container">
          <span>{article.date}</span>
          <div className="line" />
          <span className="minutes">4 minutes</span>
        </div>
        <p className="detailed-description">{article.detailedDescription}</p>
        <p className="detailed-title">“ {article.title}. ”</p>
      </div>
      <div className="author-container">
        <div>
          <img src={article.profileImageURL} alt="Profile" />
          <div className="profession">
            <p>{article.name}</p>
            <span>{article.job}</span>
          </div>
        </div>
        <div className="icon-container">
          <img
            src={FacebookIcon}
            alt="Facebook Icon"
            onClick={() => openSocialMediaLink("https://www.facebook.com")}
          />
          <img
            src={TwitterIcon}
            alt="Twitter Icon"
            onClick={() => openSocialMediaLink("https://www.twitter.com")}
          />
          <img
            src={YoutubeIcon}
            alt="Youtube Icon"
            onClick={() => openSocialMediaLink("https://www.youtube.com")}
          />
          <img
            src={PinterestIcon}
            alt="Pinterest Icon"
            onClick={() => openSocialMediaLink("https://www.pinterest.com")}
          />
          <img
            src={BehanceIcon}
            alt="Behance Icon"
            onClick={() => openSocialMediaLink("https://www.behance.net")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EachArticle;
