import React from 'react';
import { Meta } from '@storybook/react';
import { Auth } from './Auth';

export default {
  component: Auth,
  title: "Auth/Auth",
} as Meta;

export const Primary: React.VFC = () => <Auth></Auth>;
