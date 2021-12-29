import Icon from "./Icon";
import React from "react";
import search from "./searchIcon.png";
export default {
  title: "Atoms/Icon",
  component: Icon,
};

const IconTemplate = (args) => <Icon {...args} />;

export const Icon1 = IconTemplate.bind({});
Icon1.args = {
  src: search,
  alt: "search",
  style: {
    width: "24px",
    heigth: "24px",
  },
};
