import React from "react";
import PaperComponent from "./PaperComponent";
export default {
  title: "Atoms/PaperComponent",
  component: PaperComponent,
};

const template = (args) => <PaperComponent {...args} />;

export const Paper = template.bind({});
Paper.args = {
  title: "some title",
  description: "some description  ",
};
