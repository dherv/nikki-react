import React from 'react';
import { Meta } from '@storybook/react';
import { DailyList } from './DailyList';

export default {
  component: DailyList,
  title: "Daily/List",
} as Meta;

export const Primary: React.VFC = () => <DailyList></DailyList>;
