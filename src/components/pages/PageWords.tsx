import { FC } from 'react';
import { WordList } from '../../features/daily/components/WordList';
import { Template } from '../templates/Template';

export const PageWords: FC = () => {
  return (
    <Template>
      <h2 className="mr-auto my-2 font-bold text-md text-gray-800">
        Your Latest
      </h2>
      <WordList />
    </Template>
  );
};
