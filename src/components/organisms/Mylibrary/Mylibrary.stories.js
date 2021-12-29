import React from "react";
import Mylibrary from "./Mylibrary";

export default {
  title: "Organisms/Mylibrary",
  component: Mylibrary,
};

const template = (args) => <Mylibrary {...args} />;
export const MyLibraryComponent = template.bind({});
MyLibraryComponent.args = {};
