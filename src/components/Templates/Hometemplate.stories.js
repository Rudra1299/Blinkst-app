import React from "react";
import Hometemplate from "./Hometemplate";

export default {
  title: "Organisms/Hometemplate",
  component: Hometemplate,
};

const BannerComp = () => {
  return (
    <>
      <p>This is banner</p>
    </>
  );
};

const template = (args) => <Hometemplate {...args} />;
export const HometemplateComponent = template.bind({});
HometemplateComponent.args = {
  banner: <BannerComp />,
  content: <BannerComp />,
};
