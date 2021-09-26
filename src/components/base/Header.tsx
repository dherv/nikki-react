import { FC } from 'react';
import { MenuAlt3Icon } from '@heroicons/react/solid';

export const Header: FC<{ show: boolean; onClick: () => void }> = ({
  show,
  onClick,
}) => {
  const icon = show ? null : (
    <MenuAlt3Icon
      role="icon"
      aria-label="menu icon"
      onClick={onClick}
      className="h-5 w-5 cursor-pointer"
    />
  );
  return (
    <header>
      <nav className="flex justify-between">
        <h1 className="text-lg font-bold">Nikki</h1>
        {icon}
      </nav>
    </header>
  );
};
