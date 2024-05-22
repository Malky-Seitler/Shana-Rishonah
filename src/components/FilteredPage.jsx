import React, { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard";
import { ContentWrap } from "./StyledComponents";
import { useParams } from "react-router-dom";
import LightAd from "./ads/lightsad.png";
import { useActivityContext } from "../ActivityContext";
import { Container } from "reactstrap";
import { Loader } from "semantic-ui-react";

const FilteredPage = () => {
  const { type } = useParams();
  const [loading, setLoading] = useState(true);
  const { getListToUse, showSearch, filteredList, setFilteredList } =
    useActivityContext();

  const getList = async () => {
    setLoading(true);
    await getListToUse(type).then((data) => {
      setFilteredList(data);
    });
    setLoading(false);
  };

  useEffect(() => {
    if (type) {
      getList();
    }
  }, [type]);

  if (filteredList?.length === 0) {
    return;
  }
  if (loading) {
    return <Loader active />;
  }
  return (
    <div>
      <div>
        <img src={LightAd} />
      </div>
      <Container style={{ paddingRight: 24, paddingLeft: 24 }}>
        <div>
          <ContentWrap>
            {filteredList?.map((a) => {
              return <ActivityCard activity={a} />;
            })}
          </ContentWrap>
        </div>
      </Container>
    </div>
  );
};
export default FilteredPage;
