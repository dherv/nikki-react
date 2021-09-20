import { FC } from 'react';

export const Template: FC = ({ children }) => {
  return <div className="p-4 h-screen bg-gray-50">{children}</div>;
};
