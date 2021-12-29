import React from "react";
import TypographyComponent from "./TypographyComponent";

export default {
  title: "Atoms/Typography",
  Component: TypographyComponent,
};

const template = (args) => (
  <TypographyComponent {...args}>{args.children}</TypographyComponent>
);
export const TypeHeader = template.bind({});
TypeHeader.args = {
  variant: "header",
  children: "This is a typography text",
};

export const TypeTitle = template.bind({});
TypeTitle.args = {
  ...TypeHeader.args,
  variant: "title",
};
