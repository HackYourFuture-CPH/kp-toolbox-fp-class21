import { Heading } from './Heading.component';
import React from 'react';

export default {
  /* 👇 The title prop is optional. */
  title: 'Components/WelcomeBox/Heading',
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <Heading {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  title: 'Hello and welcome to the KAOSPILOT toolbox !',
};
