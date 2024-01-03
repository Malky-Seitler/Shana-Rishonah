import React, { useEffect } from "react";
import ActivityCard from "./ActivityCard";
import {
  ActionButton,
  ActivityCardContainer,
  ContentWrap,
  CurrentPageNumber,
  FeedbackButton,
  HomePageSectionWrap,
  HomePageText,
  HomePageTitleType,
  PageNumber,
  PagesWrap,
} from "./StyledComponents";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useActivityContext } from "../ActivityContext";
import FeedbackModal from "./FeedbackModal";
import WelcomeBanner from "./HomePageComponents/WelcomeBanner";
import { Icon } from "semantic-ui-react";
import Lottie from "lottie-react";
import Target from "./lottie/Target.json";
import { DesktopWrapper, MobileWrapper } from "./layout/StyledComponents";
import Pagination from "./Pagination";

const HomePage = () => {
  const { fullActivityList, getListToUse } = useActivityContext();

  const [activityIndex, setActivityIndex] = useState(0);
  const { type } = useParams();

  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  useEffect(() => {
    getListToUse(type);
    setActivityIndex(0);
  }, [type]);

  return (
    <div style={{ width: "100%" }}>
      <DesktopWrapper>
        <div
          style={{
            marginTop: 24,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <WelcomeBanner />
            <div style={{ display: "flex", width: "75%" }}>
              <HomePageSectionWrap>
                <HomePageTitleType>Our Mission</HomePageTitleType>
                <HomePageText>
                  We believe that Shana Rishonah is an incredibly special year
                  in your life—an opportunity to cherish uninterrupted moments
                  with your newfound spouse while embarking on the adventure of
                  building a life together. However, let's be honest; Those long
                  nights can get somewhat... boring. At ShanaRishonah.com, our
                  mission is to make your special year even more magical. We've
                  curated a delightful array of places to explore, engaging home
                  and outdoor activities, and enchanting date night ideas
                  tailor-made for you and your beloved.
                </HomePageText>
              </HomePageSectionWrap>

              <HomePageSectionWrap>
                <HomePageTitleType>Your Part</HomePageTitleType>
                <HomePageText>
                  Are you aware of an amazing hangout spot that's not yet
                  featured on our website? Do you have valuable insights and
                  advice for newlyweds, the kind of wisdom you wish you had
                  known before? We're eager to hear from you! Feel free to get
                  in touch with us through our{" "}
                  <Link
                    style={{
                      color: "#15AAAA",
                      marginTop: 2,
                      cursor: "pointer",
                    }}
                    to="/contact"
                  >
                    contact page
                  </Link>{" "}
                  or just click the feedback button below. Your input is highly
                  valued!
                </HomePageText>

                <FeedbackButton onClick={() => setShowFeedbackModal(true)}>
                  Give Feedback
                </FeedbackButton>
              </HomePageSectionWrap>

              <HomePageSectionWrap>
                <HomePageTitleType>Our Future</HomePageTitleType>
                <HomePageText>
                  Our website is a dynamic hub, continually evolving to offer
                  not only exciting activities but also invaluable insights for
                  navigating this new chapter of your life. Stay tuned for tips
                  and tricks on managing this exciting phase, thoughtful gift
                  and party ideas, and so much more! Keep checking back to
                  uncover the latest and greatest additions!
                </HomePageText>
              </HomePageSectionWrap>
            </div>
          </div>
        </div>
        {showFeedbackModal && <FeedbackModal setOpen={setShowFeedbackModal} />}
      </DesktopWrapper>
      <MobileWrapper>SORRY WERE NOT UP ON MOBILE SCREENS YET</MobileWrapper>
    </div>
    // <div>
    //   <ContentWrap>
    //     {fullActivityList
    //       .slice(
    //         activityIndex,
    //         activityIndex + 6 > fullActivityList.length
    //           ? fullActivityList.length
    //           : activityIndex + 6
    //       )
    //       .map((a) => {
    //         return <ActivityCard activity={a} />;
    //       })}
    //   </ContentWrap>
    //   {/* <DesktopWrapper> */}
    //   <Pagination
    //     activityIndex={activityIndex}
    //     setActivityIndex={setActivityIndex}
    //     fullActivityList={fullActivityList}
    //   />

    // </div>
  );
};
export default HomePage;
