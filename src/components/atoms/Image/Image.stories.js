import Image from "./Image";
import React from "react";
import search from "../Icon/searchIcon.png";
export default {
  title: "Atoms/Image",
  component: Image,
};

const ImageTemplate = (args) => <Image {...args} />;

export const Image1 = ImageTemplate.bind({});
Image1.args = {
  src: search,
  alt: "search",
  width: "20px",
  height: "20px",
};
