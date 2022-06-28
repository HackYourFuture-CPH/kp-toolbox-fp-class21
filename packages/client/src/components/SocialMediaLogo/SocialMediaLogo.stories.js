import React from "react";
import { SocialMediaLogo } from "./SocialMediaLogo.component";

export default {
  title: 'Footer/SocialMediaLogo',
  component: SocialMediaLogo.component,
};

const Template = (args) => <SocialMediaLogo {...args} />;

export const Primary = Template.bind({});