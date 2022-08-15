import React from 'react';
import { ContactUs } from './ContactUs.component';

export default {
  title: 'ContactForm',
  component: ContactUs.component,
};

const Template = (args) => <ContactUs {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  isFilled: false,
  isSubmit: false,
};
