import { ChangeEvent, FC } from 'react';

export const Input: FC<{
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}> = ({ name, value, placeholder, onChange }) => {
  const inputId = `input_${name}`;
  return (
    <>
      <label htmlFor={inputId} className="hidden"></label>
      <input
        id={inputId}
        className="w-full my-2 mr-2 px-4 py-2 text-gray-600 shadow-md"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </>
  );
};
