import React from "react";
import logo from "../../assets/Logic.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Thanks for your attention, you also can see my work on other
          platforms.
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Behance</p>
        <p>Instagram</p>
        <p>Dribbble</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="logo" />
          <p>www.milosdjokovic.com</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Social</h4>
          <p>Instagram</p>
          <p>Linkedin</p>
          <p>Behance</p>
          <p>Dribbble</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Instagram</p>
          <p>Linkedin</p>
          <p>Behance</p>
          <p>Dribbble</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Mazuraniceva 23/4</p>
          <p>11000 Belgrade, Serbia</p>
          <p>design@milosdjokovic.com</p>
          <p>Phone: +381 (0) 60 33 77 556</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>2022 Milos Djokovic Design All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
