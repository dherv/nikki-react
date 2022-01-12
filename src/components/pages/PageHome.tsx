import { FC } from 'react';
import { DailyAdd } from '../../features/daily/components/DailyAdd';
import { Template } from '../templates/Template';

export const PageHome: FC = () => {
  return (
    <Template>
      <DailyAdd />
    </Template>
  );
};
