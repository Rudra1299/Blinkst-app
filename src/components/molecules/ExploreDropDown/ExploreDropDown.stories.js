import React from "react";
import { BrowserRouter } from "react-router-dom";
import ExploreDropDown from "./ExploreDropDown";

export default {
  title: "Molecules/ExploreDropDown",
  Component: ExploreDropDown,
};

const template = (args) => (
  <BrowserRouter>
    <ExploreDropDown {...args} />
  </BrowserRouter>
);
export const ExploreDropDownBox = template.bind({});
ExploreDropDownBox.args = {};
