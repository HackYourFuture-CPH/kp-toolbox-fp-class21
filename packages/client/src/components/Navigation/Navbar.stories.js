import React from 'react';
import { Navbar } from './Navbar.component';

export default {
  title: 'NavbarLoginLogOutSwitch',
  component: Navbar.component,
};

const Template = (args) => <Navbar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  isLogedIn: false,
  userName: 'Magdalena',
};
