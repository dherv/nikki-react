import { FC } from 'react';

export const Header: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <header>
      <nav className="flex">
        <h1 className="text-lg font-bold">Nikki</h1>
        <button onClick={onClick}>show</button>
      </nav>
    </header>
  );
};
