import { ParticipantsNr } from './ParticipantsNr.component';
import React from 'react';

export default {
  /* 👇 The title prop is optional. */
  title: 'Components/FilteringArea/ParticipantsNr',
  component: ParticipantsNr.component,
};

// 👇 Each story then reuses that template
export const Horizontal = () => <ParticipantsNr />;
