import React from "react";
import Lottie from "lottie-react";
import HomePageAnimation from "../lottie/HomePageAnimation.json";

const WelcomeBanner = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ width: "25%" }}>
        <Lottie animationData={HomePageAnimation} loop={true} />
      </div>
      <div style={{ fontSize: 48, marginBottom: 36 }}>
        Welcome to ShanaRishonah.com
      </div>
      <div style={{ fontSize: 32, marginBottom: 36, fontStyle: "italic" }}>
        Your ultimate destination for everything Shana Rishonah!
      </div>
    </div>
  );
};
export default WelcomeBanner;
