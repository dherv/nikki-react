import { FC } from 'react';
import { DailyAddHighlight } from './DailyAddHighlight';

export const DailyAddHighlightList: FC = () => {
  const isOn = false;
  return <ul>{isOn ? <DailyAddHighlight /> : null}</ul>;
};
