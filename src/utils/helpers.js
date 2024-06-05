import Header from "../components/Pages/Trips/Header.png";

export const getImage = async (imgUrl) => {
  try {
    const img = await import(`../components/pictures/${imgUrl}.jpg`);
    if (img) {
      return img.default;
    } else {
      return Header;
    }
  } catch (e) {
    return Header;
  }
};
export const cleanNameForPicture = (name) => {
  return name.replace(/\s/g, "").toLowerCase();
};
