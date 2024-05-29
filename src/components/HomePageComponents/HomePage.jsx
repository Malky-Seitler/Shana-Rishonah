import React from "react";
import { FeedbackButton, FlexColumnCenter } from "../StyledComponents";
import { Link } from "react-router-dom";
import { useState } from "react";
import FeedbackModal from "../FeedbackModal";
import WelcomeBanner from "./WelcomeBanner";
import {
  HomePageCardWrapper,
  HomePageSectionWrap,
  HomePageText,
  HomePageTitleType,
} from "./HomePageStyledComponents";

//color pallate :
// #ffaed7 pink
// #bdf700 green
// #15AAAA blue

const HomePage = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  return (
    <div style={{ width: "100%", padding: 36 }}>
      <div
        style={{
          width: "100%",
        }}
      >
        <FlexColumnCenter>
          <WelcomeBanner />
          <HomePageCardWrapper>
            <HomePageSectionWrap>
              <HomePageTitleType>Our Mission</HomePageTitleType>
              <HomePageText>
                We believe that Shana Rishonah is an incredibly special year in
                your life—an opportunity to cherish uninterrupted moments with
                your newfound spouse while embarking on the adventure of
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
                Are you aware of an amazing hangout spot that's not yet featured
                on our website? Do you have valuable insights and advice for
                newlyweds, the kind of wisdom you wish you had known before?
                We're eager to hear from you! Feel free to get in touch with us
                through our{" "}
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
                Our website is a dynamic hub, continually evolving to offer not
                only exciting activities but also invaluable insights for
                navigating this new chapter of your life. Stay tuned for tips
                and tricks on managing this exciting phase, thoughtful gift and
                party ideas, and so much more! Keep checking back to uncover the
                latest and greatest additions!
              </HomePageText>
            </HomePageSectionWrap>
          </HomePageCardWrapper>
        </FlexColumnCenter>
      </div>
      {showFeedbackModal && <FeedbackModal setOpen={setShowFeedbackModal} />}{" "}
    </div>
  );
};
export default HomePage;
