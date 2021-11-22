import { FC, useState } from 'react';

export const ListItem: FC<{ text: string; onClickDelete: () => void }> = ({
  text,
  onClickDelete,
}) => {
  const [showDelete, setShowDelete] = useState<boolean>(false);
  return (
    <li
      className="w-full	my-4 px-2 py-4 text-gray-800 shadow-md bg-white flex justify-between"
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <span>{text}</span>
      <button onClick={onClickDelete}>X</button>
    </li>
  );
};
