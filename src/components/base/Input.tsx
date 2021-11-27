import { ChangeEvent, FC } from 'react';

export const Input: FC<{
  name: string;
  value: string;
  placeholder: string;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}> = ({ name, value, placeholder, disabled = false, onChange }) => {
  return (
    <>
      <label htmlFor={name} className="hidden">
        {name}
      </label>
      <input
        id={name}
        className="w-full my-2 mr-2 px-4 py-2 text-gray-600 shadow-md"
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      ></input>
    </>
  );
};
