import React from 'react';
import { Disclaimer } from './Disclaimer.component';

export default {
  title: 'Footer/Disclaimer',
  component: Disclaimer,
};

const Template = (args) => <Disclaimer {...args} />;

export const Primary = Template.bind({});