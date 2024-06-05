import React, { useEffect, useState } from "react";
import { Resources } from "./resources";
import { ContentWrap } from "../Trips/StyledComponents";
import { Container } from "reactstrap";
import AdCard from "../../AdCard";
import Header from "../Trips/Header.png";
import ResourceCard from "./ResourceCard";
import { Loader } from "semantic-ui-react";
import ParentPage from "../../layout/ParentPage";

const ResourcesPage = () => {
  const [resourcesList, setResourcesList] = useState([]);
  const getImage = async (resource) => {
    try {
      const img = await import(
        `../../pictures/resources/${resource.name
          .replace(/\s/g, "")
          .toLowerCase()}.jpg`
      );

      if (img) {
        return img.default;
      } else {
        return Header;
      }
    } catch (e) {
      return Header;
    }
  };
  const getResourcesList = async () => {
    const returnlist = [];
    for (const resource of Resources) {
      resource.img = await getImage(resource);
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
