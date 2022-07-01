import React from 'react';

import { MobileNavigation } from './MobileNavigation.component';

export default {
  title: 'Mobile Navigation Menu',
  component: MobileNavigation.component,
};
const TemplateMobileNavigataion = (args) => <MobileNavigation {...args} />;

export const mobileNavigataionOpened = TemplateMobileNavigataion.bind({});
mobileNavigataionOpened.args = {
  isOpenStory: true,
};
