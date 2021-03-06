import React from 'react';
import { Paragraph } from './Paragraph.component';

export default {
  title: 'Components/WelcomeBox/Paragraph',
  component: Paragraph,
};

export const paragraph = (args) => <Paragraph {...args} />;

paragraph.args = {
  label: 'paragraph',
};
