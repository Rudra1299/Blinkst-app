import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";

export default {
  title: "Papes/HomePage",
  component: HomePage,
};

const template = (args) => (
  <BrowserRouter>
    <HomePage {...args} />
  </BrowserRouter>
);
export const HomePageDisplay = template.bind({});
HomePageDisplay.args = {};
