import { FC } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/hooks';
import { IWord } from '../../../app/types';
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
    <ul>
      {words.map((w: IWord) => (
        <>
          <li>
            <span>{w.text}</span>
            <span> - </span>
            <span>{w.translation}</span>
          </li>

          <button onClick={() => handleRemove(w.id)}>remove</button>
        </>
      ))}
    </ul>
  );
};
