import { FC } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/hooks';
import { IWord } from '../../../app/types';
import { formAddWord } from '../dailySlice';

export const DailyWordGrammarSearchList: FC = () => {
  const dispatch = useAppDispatch();
  const words = useSelector(
    (state: RootStateOrAny) => state.dailies.search.words
  );

  const handleClick = (word: IWord) => {
    dispatch({ type: formAddWord.type, payload: word });
  };

  return (
    <ul data-cy="searchWordList">
      {words.map((w: IWord) => {
        const { id, text, translation } = w;
        return (
          <li onClick={() => handleClick({ id, text, translation })}>
            <span>{w.text}</span> - <span>{w.translation}</span>
          </li>
        );
      })}
    </ul>
  );
};
