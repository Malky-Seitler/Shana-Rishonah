import React, { useEffect } from "react";
import ActivityCard from "./ActivityCard";
import {
  ActionButton,
  ContentWrap,
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

const FilteredPage = () => {
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
      <ContentWrap>
        {fullActivityList
          .slice(
            activityIndex,
            activityIndex + 6 > fullActivityList.length
              ? fullActivityList.length
              : activityIndex + 6
          )
          .map((a) => {
            return <ActivityCard activity={a} />;
          })}
      </ContentWrap>
      <Pagination
        activityIndex={activityIndex}
        setActivityIndex={setActivityIndex}
        fullActivityList={fullActivityList}
      />
      {showFeedbackModal && <FeedbackModal setOpen={setShowFeedbackModal} />}
      <FeedbackButton onClick={() => setShowFeedbackModal(true)}>
        Give Feedback
      </FeedbackButton>
    </div>
  );
};
export default FilteredPage;
