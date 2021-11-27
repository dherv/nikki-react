import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { ListItem } from '../../../components/base/ListItem';
import { Word } from '../../../types/types';
import {
  deleteWordRequest,
  fetchWordsRequest,
  wordsErrorSelector,
  wordsLoadingSelector,
  wordsSelector,
} from '../dailySlice';

export const WordList: FC = () => {
  const dispatch = useAppDispatch();
  const words = useAppSelector(wordsSelector);
  const loading = useAppSelector(wordsLoadingSelector);
  const error = useAppSelector(wordsErrorSelector);

  // TODO: can we cache this instead of fetching on every page load - react query instead / apollo client query ?
  useEffect(() => {
    dispatch({ type: fetchWordsRequest.type });
  }, [dispatch]);

  const handleRemove = (id: string) => {
    dispatch({ type: deleteWordRequest.type, payload: id });
  };

  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;
  return (
    <ul data-cy="wordList">
      {words.map((w: Word) => (
        <ListItem
          key={w.id}
          id={w.id}
          text={w.text}
          onClickDelete={handleRemove}
        />
      ))}
    </ul>
  );
};
