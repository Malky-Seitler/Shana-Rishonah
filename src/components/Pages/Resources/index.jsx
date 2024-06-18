import React, { useEffect, useState } from "react";
import { Resources } from "./resources";
import Header from "../Trips/Header.png";
import ResourceCard from "./ResourceCard";
import { Loader } from "semantic-ui-react";
import ParentPage from "../../layout/ParentPage";
import { cleanNameForPicture, getImage } from "../../../utils/helpers";

const ResourcesPage = () => {
  const [resourcesList, setResourcesList] = useState([]);

  const getResourcesList = async () => {
    const returnlist = [];
    for (const resource of Resources) {
      resource.img = await getImage(
        `resources/${cleanNameForPicture(resource.name)}`
      );
      returnlist.push(resource);
    }
    setResourcesList(returnlist);
  };
  useEffect(() => {
    getResourcesList();
  }, []);
  if (resourcesList.length === 0) {
    return <Loader size="large" active />;
  }
  return (
    <ParentPage>
      {resourcesList.map((r) => (
        <ResourceCard resource={r} />
      ))}
    </ParentPage>
  );
};
export default ResourcesPage;
