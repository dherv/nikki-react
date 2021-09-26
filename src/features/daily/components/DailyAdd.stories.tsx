import React from 'react';
import { Provider } from 'react-redux';
import { Meta } from '@storybook/react';
import { store } from '../../../app/store';
import { DailyAdd } from './DailyAdd';

export default {
  component: DailyAdd,
  title: "Daily/List",
} as Meta;

export const Primary: React.VFC = () => (
  <Provider store={store}>
    <DailyAdd></DailyAdd>
  </Provider>
);
