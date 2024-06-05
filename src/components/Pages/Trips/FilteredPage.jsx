import React, { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useActivityContext } from "./ActivityContext";
import ParentPage from "../../layout/ParentPage";

const FilteredPage = () => {
  const { type } = useParams();
  const [loading, setLoading] = useState(true);
  const { getListToUse, filteredList, setFilteredList } = useActivityContext();

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

  if (loading) {
    return <Loader size="large" active />;
  }
  if (filteredList?.length === 0) {
    return;
  }

  return (
    <ParentPage>
      {filteredList?.map((a) => {
        return <ActivityCard activity={a} />;
      })}
    </ParentPage>
  );
};
export default FilteredPage;
