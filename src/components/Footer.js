import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <a href="https://twitter.com/">
          <img
            src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png"
            alt="twitter"
          ></img>
        </a>
        <a href="https://instagram.com/">
          <img
            src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png"
            alt="instagram"
          ></img>
        </a>
        <a href="https://www.facebook.com/">
          <img
            src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png"
            alt="facebook"
          ></img>
        </a>
      </div>
    </>
  );
};

export default Footer;
