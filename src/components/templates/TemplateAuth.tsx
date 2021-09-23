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
        className="p-4 bg-gray-50 flex justify-center items-center"
        style={{ height: "calc(100vh - 28px - 32px)" }}
      >
        <div className="w-full max-w-md h-3/5 flex flex-col justify-start">
          {children}
        </div>
      </div>
    </div>
  );
};
