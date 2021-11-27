import { FC, useState } from 'react';
import { XCircleIcon } from '@heroicons/react/solid';

export const ListItem: FC<{
  id: string;
  text: string;
  onClickDelete: (id: string) => void;
}> = ({ id, text, onClickDelete }) => {
  const [showDelete, setShowDelete] = useState<boolean>(false);

  return (
    <li
      className="w-full	my-4 px-4 py-4 text-gray-800 shadow-md bg-white flex justify-between"
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <span>{text}</span>

      <XCircleIcon
        role="icon"
        onClick={() => onClickDelete(id)}
        aria-label="remove icon"
        data-cy="removeIcon"
        className="h-5 w-5 text-gray-700 cursor-pointer hover:text-red-400"
      />
    </li>
  );
};
