import React from 'react';
import { ToolDetailsPage } from './ToolDetailsPage.component';

export default {
  component: ToolDetailsPage.component,
  title: 'ToolDetailsPage',
};

const Template = (args) => <ToolDetailsPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  toolName: 'STINKY FISH',
};
