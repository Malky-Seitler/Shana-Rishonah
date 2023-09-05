import React, { useState } from "react";
import {
  ActionButton,
  Circle,
  ContentWrap,
  CurrentPageNumber,
  FeedbackButton,
  PageNumber,
  PagesWrap,
} from "./StyledComponents";

const Pagination = ({ activityIndex, setActivityIndex, fullActivityList }) => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <PagesWrap>
      <ActionButton
        disabled={pageNumber === 1}
        onClick={() => {
          setPageNumber(pageNumber - 1);
          setActivityIndex(activityIndex - 6);
        }}
      >
        PREV
      </ActionButton>
      {pageNumber > 1 && (
        <PageNumber
          onClick={() => {
            setPageNumber(pageNumber - 1);
            setActivityIndex(activityIndex - 6);
          }}
        >
          {pageNumber - 1}
        </PageNumber>
      )}

      <Circle>{pageNumber}</Circle>
      {activityIndex < fullActivityList.length - 6 && (
        <PageNumber
          onClick={() => {
            setPageNumber(pageNumber + 1);
            setActivityIndex(activityIndex + 6);
          }}
        >
          {pageNumber + 1}
        </PageNumber>
      )}

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
  );
};
export default Pagination;
