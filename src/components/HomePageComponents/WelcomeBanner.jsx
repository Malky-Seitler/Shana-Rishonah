import React from "react";
import Lottie from "lottie-react";
import HomePageAnimation from "../lottie/HomePageAnimation.json";
import { FlexColumnCenter } from "../Pages/Trips/StyledComponents";
import {
  HomePageSubtitleText,
  HomePageWelcomeText,
} from "./HomePageStyledComponents";

const WelcomeBanner = () => {
  return (
    <FlexColumnCenter>
      <div style={{ width: "25%" }}>
        <Lottie animationData={HomePageAnimation} loop={true} />
      </div>
      <HomePageWelcomeText>Welcome to ShanaRishonah.com</HomePageWelcomeText>
      <HomePageSubtitleText>
        Your ultimate destination for everything Shana Rishonah!
      </HomePageSubtitleText>
    </FlexColumnCenter>
  );
};
export default WelcomeBanner;
