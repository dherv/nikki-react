import React from 'react';
import { Provider } from 'react-redux';
import { Meta } from '@storybook/react';
import { store } from '../../../app/store';
import { DailyList } from './DailyList';

export default {
  component: DailyList,
  title: "Daily/List",
} as Meta;

export const Primary: React.VFC = () => (
  <Provider store={store}>
    <DailyList></DailyList>
  </Provider>
);
