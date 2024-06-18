import React, { useEffect, useState } from "react";
import { CookbooksList } from "./cookbooks";
import CookbookCard from "./CookbookCard";
import ParentPage from "../../../layout/ParentPage";
import { cleanNameForPicture, getImage } from "../../../../utils/helpers";
import { Loader } from "semantic-ui-react";

const CookbooksPage = () => {
  const [cookbooksList, setCookbooksList] = useState([]);

  const getCookbookList = async () => {
    const returnlist = [];
    for (const cookbook of CookbooksList) {
      cookbook.img = await getImage(
        `cookbooks/${cleanNameForPicture(cookbook.name)}`
      );
      returnlist.push(cookbook);
    }
    setCookbooksList(returnlist);
  };
  useEffect(() => {
    getCookbookList();
  }, []);
  if (cookbooksList.length === 0) {
    return <Loader size="large" active />;
  }
  return (
    <ParentPage>
      {cookbooksList.map((c) => (
        <CookbookCard cookbook={c} />
      ))}
      <span style={{ fontStyle: "italic", fontSize: 9 }}>
        As an Associate by Amazon I may earn from qualifying purchases.
      </span>
    </ParentPage>
  );
};
export default CookbooksPage;
