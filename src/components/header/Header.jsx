import React from "react";
import "./Header.scss";
import FacebookIcon from "../../images/facebook.svg";
import TwitterIcon from "../../images/twitter.svg";
import YoutubeIcon from "../../images/youtube.svg";
import PinterestIcon from "../../images/pinterest.svg";
import BehanceIcon from "../../images/behance.svg";
import SearchIcon from "../../images/SearchIcon.svg";
import { Link } from "react-router-dom";

function Header() {
  const openSocialMediaLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="header-container">
      <header>
        <Link to="/">
          <h1>RUNO</h1>
        </Link>
        <div className="navigation-container">
          <nav>
            <ul>
              <li>Home</li>
              <li>Articles</li>
            </ul>
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
            <img src={SearchIcon} alt="Search Icon" className="search-icon" />
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
