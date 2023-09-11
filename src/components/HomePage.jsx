import React, { useEffect } from "react";
import ActivityCard from "./ActivityCard";
import {
  ActionButton,
  ContentWrap,
  CurrentPageNumber,
  FeedbackButton,
  PageNumber,
  PagesWrap,
} from "./StyledComponents";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ContactButton, DesktopWrapper } from "./layout/StyledComponents";
import { useActivityContext } from "../ActivityContext";
import FeedbackModal from "./FeedbackModal";
import Pagination from "./Pagination";
import { Activities } from "./Trips";

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
    <div>
      <div>
        Welcome to ShanaRishonah.com, your ultimate destination for everything
        Shana Rishonah! We understand that Shana Rishonah is an incredibly
        special year in your life—an opportunity to cherish uninterrupted
        moments with your newfound spouse while embarking on the adventure of
        building a life together. However, let's be honest; it can sometimes
        feel a bit... boring, right? Wondering how to make the most of all
        that precious time? Well, look no further than ShanaRishonah.com! We've
        curated a delightful array of places to explore, engaging home and
        outdoor activities, and enchanting date night ideas tailor-made for you
        and your beloved. But wait, there's more! Our website is a dynamic hub,
        continually evolving to offer not only exciting activities but also
        invaluable insights for navigating this new chapter of your life. Stay
        tuned for tips and tricks on managing this exciting phase, thoughtful
        gift and party ideas, and so much more! Keep checking back to uncover
        the latest and greatest additions—we're here to make your Shana Rishonah
        journey as exciting and adorable as it can be! 💖
      </div>
      {showFeedbackModal && <FeedbackModal setOpen={setShowFeedbackModal} />}
      <FeedbackButton onClick={() => setShowFeedbackModal(true)}>
        Give Feedback
      </FeedbackButton>
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
