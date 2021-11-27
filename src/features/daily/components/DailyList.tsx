import { FC, useEffect } from 'react';
import { RootStateOrAny } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { ListItem } from '../../../components/base/ListItem';
import { Daily } from '../../../types/types';
import { deleteDailyRequest, fetchDailiesRequest } from '../dailySlice';

export const DailyList: FC = () => {
  const dispatch = useAppDispatch();
  const dailies = useAppSelector((state: RootStateOrAny) => state.dailies.data);
  const loading = useAppSelector(
    (state: RootStateOrAny) => state.dailies.loading
  );
  const error = useAppSelector((state: RootStateOrAny) => state.dailies.error);

  useEffect(() => {
    dispatch({ type: fetchDailiesRequest.type });
  }, [dispatch]);

  const handleRemove = (id: string) => {
    dispatch({ type: deleteDailyRequest.type, payload: id });
  };

  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;
  return (
    <ul data-cy="dailyList">
      {dailies.map((d: Daily) => (
        <ListItem
          key={d.id}
          id={d.id}
          text={d.text}
          onClickDelete={handleRemove}
        />
      ))}
    </ul>
  );
};
