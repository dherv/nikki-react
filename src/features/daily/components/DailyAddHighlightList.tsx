import { FC } from 'react';
import { DailyAddHighlight } from './DailyAddHighlight';

export const DailyAddHighlightList: FC = () => {
  return <ul>{false ? <DailyAddHighlight /> : null}</ul>;
};
