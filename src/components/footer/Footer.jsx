import React from "react";
import "./Footer.scss";
import FacebookIcon from "../../images/facebook.svg";
import TwitterIcon from "../../images/twitter.svg";
import YoutubeIcon from "../../images/youtube.svg";
import PinterestIcon from "../../images/pinterest.svg";
import BehanceIcon from "../../images/behance.svg";

function Footer() {
  const openSocialMediaLink = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="contact-container">
            <p>Contact the Publisher</p>
            <span>mike@runo.com</span>
            <span>+944 450 904 505</span>
          </div>
          <div className="explore-container">
            <p>Explorate</p>
            <span>About</span>
            <span>Partners</span>
            <span>Job Opportunities</span>
            <span>Advertise</span>
            <span>Membership</span>
          </div>
          <div className="adress">
            <p>Headquarter</p>
            <span>191 Middleville Road, NY 1001, Sydney Australia</span>
          </div>
          <div className="connections">
            <p>Connection</p>
            <div>
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
        </div>
      </footer>
      <div className="studio-container">
        <p>2021 | RUNO Publisher Studio</p>
        <span>Subscribe Now</span>
      </div>
    </>
  );
}

export default React.memo(Footer);
