import React from 'react';
import { Meta } from '@storybook/react';
import { Confirm } from './Confirm';

export default {
  component: Confirm,
  title: "Auth/Confirm",
} as Meta;

export const Primary: React.VFC<{}> = () => <Confirm></Confirm>;
