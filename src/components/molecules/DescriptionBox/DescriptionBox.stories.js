import React from "react";
import MyLibraryDescriptionBox from "./MyLibraryDescriptionBox";

export default {
  title: "Molecules/DescriptionBox",
  component: MyLibraryDescriptionBox,
};

const template = (args) => <MyLibraryDescriptionBox {...args} />;
export const MylibaryUpgradeCard = template.bind({});
MylibaryUpgradeCard.args = {};
