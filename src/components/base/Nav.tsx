import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { selectedWord } from '../../features/daily/dailySlice';

export const Nav: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (route: string) => {
    // clear selected word on navigation
    dispatch({ type: selectedWord.type, payload: "" });
    history.push(route);
  };
  return (
    <nav className="border-t border-b p-4">
      <ul>
        <li onClick={() => handleClick("/dailies")}>dailies</li>
        <li onClick={() => handleClick("/home")}>add</li>
        <li onClick={() => handleClick("/words")}>words</li>
      </ul>
    </nav>
  );
};
