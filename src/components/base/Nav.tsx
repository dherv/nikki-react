import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

export const Nav: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (route: string) => history.push(route);

  return (
    <nav className="">
      <ul className="flex">
        <li
          className="mx-2 font-thin cursor-pointer border-b hover:border-indigo-400"
          onClick={() => handleClick("/dailies")}
        >
          dailies
        </li>
        <li
          className="mx-2 font-thin cursor-pointer border-b hover:border-indigo-400"
          onClick={() => handleClick("/home")}
        >
          add
        </li>
        <li
          className="ml-2 font-thin cursor-pointer border-b hover:border-indigo-400"
          onClick={() => handleClick("/words")}
        >
          words
        </li>
      </ul>
    </nav>
  );
};
