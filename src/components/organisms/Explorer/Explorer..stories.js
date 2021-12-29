import React from "react";
import Explorer from "./Explorer";

export default {
  title: "Organisms/Explorer",
  component: Explorer,
};

const template = (args) => <Explorer {...args} />;
export const ExplorerComponent = template.bind({});
ExplorerComponent.args = {};
