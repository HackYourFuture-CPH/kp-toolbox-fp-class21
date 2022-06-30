import { TimeFrame } from './TimeFrame.component';
import React from 'react';

export default {
  /* 👇 The title prop is optional. */
  title: 'Components/FilteringArea/TimeFrame',
  component: TimeFrame.component,
};

// 👇 Each story then reuses that template
export const Horizontal = () => <TimeFrame />;
