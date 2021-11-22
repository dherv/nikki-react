import { FC } from 'react';
import { DailyList } from '../../features/daily/components/DailyList';
import { Template } from '../templates/Template';

export const PageDailies: FC = () => {
  return (
    <Template>
      <h2 className="mr-auto my-2 font-bold text-md text-gray-800">
        Your Latest
      </h2>
      <DailyList />
    </Template>
  );
};
