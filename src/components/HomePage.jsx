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

const HomePage = () => {
  const { fullActivityList, getListToUse } = useActivityContext();
  const [pageNumber, setPageNumber] = useState(0);
  const [activityIndex, setActivityIndex] = useState(0);
  const { type } = useParams();

  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  useEffect(() => {
    getListToUse(type);
    setPageNumber(0);
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
            return <ActivityCard key={a.address} activity={a} />;
          })}
      </ContentWrap>
      <DesktopWrapper>
        <PagesWrap>
          <ActionButton
            disabled={pageNumber === 0}
            onClick={() => {
              setPageNumber(pageNumber - 1);
              setActivityIndex(activityIndex - 6);
            }}
          >
            PREV
          </ActionButton>
          {/* HANDLE THESE CLICKS AND PAGINATION */}
          {[1, 2, 3].map((a) => {
            return (
              <PageNumber
                onClick={() => {
                  setPageNumber(pageNumber + a - 1);
                  setActivityIndex(pageNumber + ((a - 1) * 6))
                }}
              >
                {pageNumber + a}
              </PageNumber>
            );
          })}
          <ActionButton
            disabled={activityIndex >= fullActivityList.length - 6}
            onClick={() => {
              setPageNumber(pageNumber + 1);
              setActivityIndex(activityIndex + 6);
            }}
          >
            NEXT
          </ActionButton>
        </PagesWrap>
        {showFeedbackModal && <FeedbackModal setOpen={setShowFeedbackModal} />}
        <FeedbackButton onClick={() => setShowFeedbackModal(true)}>
          Give Feedback
        </FeedbackButton>
      </DesktopWrapper>
    </div>
  );
};
export default HomePage;
