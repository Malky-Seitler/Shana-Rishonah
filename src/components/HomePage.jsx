import React, { useEffect } from "react";
import ActivityCard from "./ActivityCard";
import {
  ActionButton,
  ActivityCardContainer,
  ContentWrap,
  CurrentPageNumber,
  FeedbackButton,
  HomePageSectionWrap,
  HomePageTitleType,
  PageNumber,
  PagesWrap,
} from "./StyledComponents";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useActivityContext } from "../ActivityContext";
import FeedbackModal from "./FeedbackModal";
import WelcomeBanner from "./HomePageComponents/WelcomeBanner";
import Lottie from "lottie-react";
import SwayingHearts from "./lottie/SwayingHearts.json";
import Thought from "./lottie/Thought.json";
import TwoHearts from "./pictures/TwoHearts.png";

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
            paddingTop: 24,
          }}
        >
          <WelcomeBanner />
          <div
            style={{
              marginTop: 48,
              padding: 48,
              backgroundColor: "rgb(21, 170, 170)",
              height: 500,
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <HomePageSectionWrap>
              <HomePageTitleType
                style={{
                  fontSize: 56,
                  textDecoration: "underline",
                  marginBottom: 24,
                  lineHeight: 1,
                }}
              >
                Our mission
              </HomePageTitleType>
              <div style={{ fontSize: 28, lineHeight: 1 }}>
                We believe that Shana Rishonah is an incredibly special year in
                your life—an opportunity to cherish uninterrupted moments with
                your newfound spouse while embarking on the adventure of
                building a life together. However, let's be honest; Those long
                nights can get somewhat... boring. At ShanaRishonah.com, our
                mission is to make your special year even more magical. We've
                curated a delightful array of places to explore, engaging home
                and outdoor activities, and enchanting date night ideas
                tailor-made for you and your beloved.
              </div>
            </HomePageSectionWrap>
            <div style={{ width: "20%" }}>
              <img src={TwoHearts} width={100} height={100}/>
              <img src={TwoHearts} width={100} height={100}/>
              <img src={TwoHearts} width={100} height={100}/>
            </div>
          </div>
          <div
            style={{
              padding: 48,
              display: "flex",
              justifyContent: "space-between",
              height: 500,
              alignItems: "center",
            }}
          >
            <div style={{ width: "2%" }}>
              <Lottie animationData={Thought} loop={true} />
            </div>
            <HomePageSectionWrap>
              <HomePageTitleType
                style={{
                  fontSize: 56,
                  textDecoration: "underline",
                  marginBottom: 24,
                  lineHeight: 1,
                }}
              >
                It started as a dream...
              </HomePageTitleType>
              <div style={{ fontSize: 28, lineHeight: 1 }}>
                We were so excited to be married. But we were unprepared for
                those long evenings when we're all dressed up with nowhere to
                go, or those date-day dilemmas when we can't decide where to
                head out, or those times when we're just itching for some fun
                but can't figure out what to do. We were tired of spending hours
                searching for ideas online. And we knew our friends were too.
                And then we thought - what if we can all join together to create
                a list of ideas for each other...
              </div>
            </HomePageSectionWrap>
          </div>
          <div
            style={{
              padding: 48,
              backgroundColor: "rgb(21, 170, 170)",
              height: 500,
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <HomePageSectionWrap>
              <HomePageTitleType
                style={{
                  fontSize: 56,
                  textDecoration: "underline",
                  marginBottom: 24,
                  lineHeight: 1,
                }}
              >
                And so, the idea was born...
              </HomePageTitleType>
              <div style={{ fontSize: 28, lineHeight: 1 }}>
                What if there was a centralized place to get ideas? What if the
                next time we were itching for a night out, we could just click
                and voila – ideas galore, right at our fingertips! What if we
                could swap ideas with friends? What if we could all help each
                other out? And so, ShanaRishonah.com was born. We poured our
                hearts, countless hours of detective work, and a sprinkle of
                fairy dust into crafting a place where ideas can be shared and
                memories can be made...
              </div>
            </HomePageSectionWrap>
          </div>
          <div
            style={{
              padding: 48,
              display: "flex",
              justifyContent: "end",
              height: 500,
              alignItems: "center",
            }}
          >
            <HomePageSectionWrap>
              <HomePageTitleType
                style={{
                  fontSize: 56,
                  textDecoration: "underline",
                  marginBottom: 24,
                  lineHeight: 1,
                }}
              >
                And that is where YOU come in!
              </HomePageTitleType>
              <div style={{ fontSize: 28, lineHeight: 1 }}>
                Are you aware of an amazing hangout spot that's not yet featured
                on our website? Do you have valuable insights and advice for
                newlyweds, the kind of wisdom you wish you had known before?
                We're eager to hear from you! Feel free to get in touch with us
                through our{" "}
                <Link
                  style={{ color: "black", marginTop: 2, cursor: "pointer" }}
                  to="/contact"
                >
                  contact page
                </Link>{" "}
                or just click the feedback button below. Your input is highly
                valued!
              </div>
            </HomePageSectionWrap>
          </div>
          <div
            style={{
              padding: 48,
              backgroundColor: "rgb(21, 170, 170)",
              height: 500,
              display: "flex",
              alignItems: "center",
              color: "white",
            }}
          >
            <HomePageSectionWrap>
              <HomePageTitleType
                style={{
                  fontSize: 56,
                  textDecoration: "underline",
                  lineHeight: 1,
                }}
              >
                Our Future
              </HomePageTitleType>
              <div style={{ fontSize: 28, lineHeight: 1 }}>
                Our website is a dynamic hub, continually evolving to offer not
                only exciting activities but also invaluable insights for
                navigating this new chapter of your life. Stay tuned for tips
                and tricks on managing this exciting phase, thoughtful gift and
                party ideas, and so much more! Keep checking back to uncover the
                latest and greatest additions!
              </div>
            </HomePageSectionWrap>
          </div>
        </div>
      </div>
      {/* {showFeedbackModal && <FeedbackModal setOpen={setShowFeedbackModal} />}
      <FeedbackButton onClick={() => setShowFeedbackModal(true)}>
        Give Feedback
      </FeedbackButton> */}
      {/* </DesktopWrapper> */}
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
