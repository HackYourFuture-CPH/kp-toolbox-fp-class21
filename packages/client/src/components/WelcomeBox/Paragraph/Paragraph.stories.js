import React from 'react';
import { Paragraph } from './Paragraph.component';

export default {
  title: 'Welcome/Paragraph',
  component: Paragraph.component,
};

export const paragraph = (args) => <Paragraph {...args} />;

paragraph.args = {
  label: 'paragraph',
};
