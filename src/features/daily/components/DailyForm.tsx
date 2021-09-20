import { FC } from 'react';
import { DailyAdd } from './DailyAdd';
import { DailyWordGrammarList } from './DailyWordGrammarList';

export const DailyForm: FC = () => {
  return (
    <>
      <h2 className="mr-auto my-2 title">Add today's daily</h2>
      <DailyAdd></DailyAdd>
      <DailyWordGrammarList></DailyWordGrammarList>
    </>
  );
};
