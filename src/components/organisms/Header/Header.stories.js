import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

export default {
  title: "Organisms/Header",
  component: Header,
};

const template = (args) => (
  <BrowserRouter>
    <Header {...args} />
  </BrowserRouter>
);
export const HeaderComponent = template.bind({});
HeaderComponent.args = {};
