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
  const { type } = useParams();

  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  useEffect(() => {
    getListToUse(type);
  }, [type]);

  return (
    <div>
      <ContentWrap>
        {fullActivityList
          .slice(
            pageNumber,
            pageNumber + 6 > fullActivityList.length
              ? fullActivityList.length
              : pageNumber + 6
          )
          .map((a) => {
            return <ActivityCard key={a.address} activity={a} />;
          })}
      </ContentWrap>
      <DesktopWrapper>
        <PagesWrap>
          <ActionButton
            disabled={pageNumber < 6}
            onClick={() => setPageNumber(pageNumber - 6)}
          >
            PREV
          </ActionButton>
          {/* HANDLE THESE CLICKS AND PAGINATION */}
          <PageNumber>{pageNumber + 1}</PageNumber>
          <PageNumber>{pageNumber + 2}</PageNumber>
          <PageNumber>{pageNumber + 3}</PageNumber>
          <ActionButton
            disabled={pageNumber >= fullActivityList.length - 6}
            onClick={() => setPageNumber(pageNumber + 6)}
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
