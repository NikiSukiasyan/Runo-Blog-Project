import React, { useState } from "react";
import "./Header.scss";
import FacebookIcon from "../../images/facebook.svg";
import TwitterIcon from "../../images/twitter.svg";
import YoutubeIcon from "../../images/youtube.svg";
import PinterestIcon from "../../images/pinterest.svg";
import BehanceIcon from "../../images/behance.svg";
import SearchIcon from "../../images/SearchIcon.svg";
import { Link } from "react-router-dom";
import Articles from "../../pages/Articles";

function Header() {
  const [searchInputVisible, setSearchInputVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const openSocialMediaLink = (url) => {
    window.open(url, "_blank");
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchIconClick = () => {
    setSearchInputVisible(!searchInputVisible);
    setSearchValue("");
  };

  return (
    <div className="header-container">
      <header>
        <Link to="/" className="title-link">
          <h1>RUNO</h1>
        </Link>
        <div className="navigation-container">
          <nav>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/Articles">
                <li>Articles</li>
              </Link>
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
            <img
              src={SearchIcon}
              alt="Search Icon"
              className="search-icon"
              onClick={handleSearchIconClick}
            />
            {searchInputVisible && (
              <input
                type="text"
                value={searchValue}
                onChange={handleSearchInputChange}
                placeholder="Search blog..."
                className="search-input"
              />
            )}
          </nav>
        </div>
      </header>
    </div>
  );
}

export default React.memo(Header);
