import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img
            className=""
            src={assets.logo2}
            alt="Logo"
            style={{ cursor: "pointer" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          <br />
          <p>
            At The Espresso Cafe, we believe every cup tells a story. Whether
            you're here for a quick espresso or a long chat over dessert, we’re
            always brewing something special just for you.
          </p>
          <br />
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a
              href="https://x.com/?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a
              href="https://in.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <a
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </a>
            </li>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
            <li>
              <a href="#my-orders">Delivery</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-8964186541</li>
            <br />
            <li>contact@theespressocafe.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 © The Espresso Cafe.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
