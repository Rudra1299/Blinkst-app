import React from "react";

import ButtonComponent from "./Button";
import { PrimaryButtonTheme } from "../../../themes/theme";

export default {
  title: "Atoms/Button",
  component: ButtonComponent,
};

const ButtonTemplate = (args) => (
  <ButtonComponent {...args}>{args.children}</ButtonComponent>
);

export const primaryButton = ButtonTemplate.bind({});
primaryButton.args = {
  variant: "contained",
  theme: PrimaryButtonTheme,
  children: "primary button",
};

export const SecondaryButton = ButtonTemplate.bind({});
SecondaryButton.args = {
  variant: "outlined",
  children: "primary button",
};
