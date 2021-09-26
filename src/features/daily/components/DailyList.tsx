import { FC, useEffect } from 'react';
import { RootStateOrAny } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Daily } from '../../../types/types';
import { fetchDailiesRequest } from '../dailySlice';

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

  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="w-3/4">
      <h2 className="mr-auto my-2 font-bold text-md text-gray-800">
        Your Latest
      </h2>
      <ul>
        {dailies.map((d: Daily) => (
          <li
            className="w-full	my-4 px-2 py-4 text-gray-800 shadow-md bg-white"
            key={d.id}
          >
            {d.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
