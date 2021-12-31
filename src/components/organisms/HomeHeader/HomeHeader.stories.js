import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomeHeader from "./HomeHeader";

export default {
  title: "Organisms/HomeHeader",
  component: HomeHeader,
};

const template = (args) => (
  <BrowserRouter>
    <HomeHeader {...args} />
  </BrowserRouter>
);

export const HomeHeaderComponent = template.bind({});
HomeHeaderComponent.args = {};
