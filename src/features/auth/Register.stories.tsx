import React from 'react';
import { Meta } from '@storybook/react';
import { Register } from './Register';

export default {
  component: Register,
  title: "Auth/Register",
} as Meta;

export const Primary: React.VFC = () => (
  <Register onRegister={() => console.info("register")} error={null}></Register>
);
