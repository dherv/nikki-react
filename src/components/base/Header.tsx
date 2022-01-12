import { FC } from 'react';
import { Nav } from './Nav';

export const Header: FC = () => {
  return (
    <header className="flex justify-between">
      <h1 className="text-lg font-bold">Nikki</h1>
      <Nav />
    </header>
  );
};
