import { FC } from 'react';
import { Word } from '../../../app/types';
import { ListItem } from '../../../components/base/ListItem';

export const DailyAddWordList: FC<{
  words?: Word[];
  onRemove: (id: string) => void;
}> = ({ words, onRemove }) => {
  const handleRemove = (id: string) => {
    onRemove(id);
  };
  // TODO: move to a list on inputs instead so we can modify afterwards - mean we can modify existing words ? or existing inputs are readonly - or add edit on modal only
  return (
    <ul data-cy="dailyWordList">
      {words?.map((w: Word, index: number) => (
        <ListItem
          id={w.id ?? index}
          key={w.id ?? index}
          text={`${w.text} - ${w.translation}`}
          onClickDelete={handleRemove}
        />
      ))}
    </ul>
  );
};
