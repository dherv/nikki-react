import React from 'react';
import { Meta } from '@storybook/react';
import { Login } from './Login';

export default {
  component: Login,
  title: "Auth/Login",
} as Meta;

export const Primary: React.VFC = () => (
  <Login onLogin={() => console.info("login")} error={null}></Login>
);
