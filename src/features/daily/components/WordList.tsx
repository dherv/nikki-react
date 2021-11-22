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

  useEffect(() => {
    dispatch({ type: fetchWordsRequest.type });
  }, [dispatch]);

  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;
  return (
    <ul>
      {words.map((w: Word) => (
        <ListItem
          key={w.id}
          text={w.text}
          onClickDelete={() =>
            dispatch({ type: deleteWordRequest.type, payload: w.id })
          }
        />
      ))}
    </ul>
  );
};
