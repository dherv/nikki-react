import { FC } from 'react';

export const TemplateAuth: FC = ({ children }) => {
  return (
    <div className="p-4 h-screen bg-gray-50">
      <header>
        <nav className="flex">
          <h1 className="text-lg font-bold">Nikki</h1>
        </nav>
      </header>
      <div
        className="p-4 bg-gray-50 flex justify-center align-middle"
        style={{ height: "calc(100vh - 28px - 32px)" }}
      >
        {children}
      </div>
    </div>
  );
};
