import { FC } from 'react';
import { DailyForm } from '../../features/daily/components/DailyForm';
import { Template } from '../templates/Template';

export const PageHome: FC = () => {
  return (
    <Template>
      <DailyForm />
    </Template>
  );
};
