import React, { useState, useEffect } from "react";
import "./Header.css";

const headerImages = [
  "/header_img.png",
  "/header_img2.png",
  "/header_img3.png",
];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % headerImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${headerImages[currentImageIndex]})`,
      }}
    >
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <a
          href="#explore-menu"
          onClick={() => setMenu("explore-menu")}
          style={{
            fontSize: "23px",
            fontWeight: "600",
            display: "inline-block",
            width: "170px",
            height: "50px",
            padding: "10px 20px",
            backgroundColor: "#fff",
            color: "#6d4c41",
            textDecoration: "none",
            borderRadius: "30px",
          }}
        >
          View Menu
        </a>
      </div>
    </div>
  );
};

export default Header;
