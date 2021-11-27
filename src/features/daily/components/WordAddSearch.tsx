import { FC, useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/hooks';
import { Word } from '../../../app/types';
import { searchWordClear } from '../dailySlice';

export const WordAddSearch: FC<{ onSubmit: (word: Word) => void }> = ({
  onSubmit,
}) => {
  const dispatch = useAppDispatch();
  const words = useSelector(
    (state: RootStateOrAny) => state.dailies.search.words
  ) as Word[];

  useEffect(() => {
    return () => {
      // clear any search word when closing
      dispatch({ type: searchWordClear.type });
    };
  }, []);

  const handleClick = (word: Word) => onSubmit(word);

  return (
    <ul data-cy="searchWordList">
      {words.map(({ id, text, translation }) => {
        return (
          <li
            className="flex w-full my-4 px-4 py-4 text-gray-800 shadow-md bg-white cursor-pointer"
            key={id}
            onClick={() => handleClick({ id, text, translation })}
          >
            <span>{text}</span> - <span>{translation}</span>
          </li>
        );
      })}
    </ul>
  );
};
