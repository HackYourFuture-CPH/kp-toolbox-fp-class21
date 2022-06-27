import React from 'react';
import { WelcomeBox } from './WelcomeBox';

export default {
  title: 'Components/WelcomeBox/WelcomeBox',
  component: WelcomeBox,
};

export const Primary = (args) => <WelcomeBox {...args} />;
