import React from 'react';
import { MessageHasBeenSent } from './MessageHasBeenSent.component';

export default {
  title: 'MessageHasBeenSent',
  component: MessageHasBeenSent.component,
};

const Template = (args) => <MessageHasBeenSent {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
