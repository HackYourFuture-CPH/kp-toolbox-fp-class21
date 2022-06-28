import React from "react";
import { MainLogo } from "./MainLogo.component";

export default {
  title: "Footer/Mainlogo",
  component: MainLogo.component,
};

const Template = (args) => <MainLogo {...args} />;

export const Primary = Template.bind({});