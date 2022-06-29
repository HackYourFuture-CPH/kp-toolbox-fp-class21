import React from 'react';
import { Footer } from './Footer.component';

export default {
  title: 'Example/Footer',
  component: Footer.component,
};

const Template = (args) => <Footer {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  title: 'Footer',
};

