import { FC } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/hooks';
import { IWord } from '../../../app/types';
import { ListItem } from '../../../components/base/ListItem';
import { formRemoveWord } from '../dailySlice';

export const DailyWordGrammarList: FC = () => {
  const dispatch = useAppDispatch();
  const words = useSelector(
    (state: RootStateOrAny) => state.dailies.form.words
  );

  const handleRemove = (id: string) => {
    dispatch({ type: formRemoveWord.type, payload: id });
  };

  return (
    <ul data-cy="dailyWordList">
      {words.map((w: IWord) => (
        <ListItem
          id={w.id}
          text={`${w.text} - ${w.translation}`}
          onClickDelete={handleRemove}
        />
      ))}
    </ul>
  );
};
