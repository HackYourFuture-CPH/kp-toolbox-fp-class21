import React from 'react';
import { Inbox } from './Inbox.component';

export default {
  title: 'InboxAdmin',
  component: Inbox.component,
};

const Template = (args) => <Inbox {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
