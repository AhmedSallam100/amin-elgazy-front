import React, { useState, useEffect } from "react";
import "./scroll-to-top.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [borderSize, setBorderSize] = useState(0);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    setIsVisible(scrolled > 200);
    setBorderSize(Math.min(scrolled / 5, 20)); // Limit the border size to 20px
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      style={{ boxShadow: `0 0 0 ${borderSize}px rgba(255, 255, 255, 0.5)` }}
    >
      <i className="uil uil-angle-double-up"></i>
    </div>
  );
};

export default ScrollToTop;
