import React, { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard";
import { ContentWrap } from "./StyledComponents";
import { useParams } from "react-router-dom";
import LightAd from "./ads/lightsad.png";
import { useActivityContext } from "../ActivityContext";
import { Container } from "reactstrap";
import { Loader } from "semantic-ui-react";
import AdCard from "./AdCard";

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
    return <Loader size="large" active />;
  }

  return (
    <div>
      <Container>
        <div>
          {/* <div>
            <img src={LightAd} style={{ width: "100%", height: "100px" }} />
          </div> */}
          <ContentWrap>
            <AdCard activity={{ img: LightAd }} />

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
