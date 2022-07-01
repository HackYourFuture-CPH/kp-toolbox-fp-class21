import React from 'react';

import { MobileNavigation } from './MobileNavigation.component';

export default {
  title: 'Mobile Navigation Menu',
  component: MobileNavigation.component,
};
const TemplateMobileNavigataion = () => <MobileNavigation />;

export const mobileNavigataionOpened = TemplateMobileNavigataion.bind({});
