import React from 'react';
import { CategoryDoubleContainer } from './CategoryDoubleContainer';

export default {
  title: 'Components/FilteringArea/CategoryDoubleContainer',
  component: CategoryDoubleContainer,
};

export const categoryDoubleContainer = (args) => (
  <CategoryDoubleContainer {...args} />
);

categoryDoubleContainer.args = {
  label: 'categoryDoubleContainer',
};
