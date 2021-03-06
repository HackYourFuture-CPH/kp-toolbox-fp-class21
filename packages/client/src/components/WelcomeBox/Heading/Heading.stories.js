import { Heading } from './Heading.component';
import React from 'react';

export default {
  /* ๐ The title prop is optional. */
  title: 'Components/WelcomeBox/Heading',
};

// ๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Heading {...args} />;

// ๐ Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  title: 'Hello and welcome to the KAOSPILOT toolbox !',
};
