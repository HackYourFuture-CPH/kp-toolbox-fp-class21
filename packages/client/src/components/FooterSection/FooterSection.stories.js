import React from 'react';
import { FooterSection } from './FooterSection.component';

export default {
  title: 'Footer/FooterSection',
  component: FooterSection.component,
};

const Template = (args) => <FooterSection {...args} />;
export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};