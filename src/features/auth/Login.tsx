import React, { useState } from 'react';
import { ChangeEvent, FC } from 'react-router/node_modules/@types/react';
import { Button } from '../../components/Button';
import { User } from '../../types/types';

export const Login: FC<{
  onLogin: (form: User) => void;
  error: string | null;
}> = ({ onLogin, error }) => {
  const [form, setForm] = useState<User>({ username: "", password: "" });

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    // adding target.value right in the setForm does not work in testing
    // https://github.com/testing-library/user-event/issues/533
    const value = target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleClick = () => onLogin(form);

  console.log("render login");
  return (
    <form
      className="block w-full p-8 bg-white shadow-md rounded-lg"
      autoComplete="off"
    >
      <h1 className="text-grey-800 mt-6 mb-12 font-bold text-4xl">Login</h1>
      <div className="w-full my-4">
        <label
          className="block mb-2 text-grey-400 font-bold"
          htmlFor="username"
        >
          username
        </label>
        <input
          id="username"
          name="username"
          className="block w-full px-4 py-2 outline-none border-2 rounded-sm bg-green-200 border-green-400"
          value={form.username}
          onChange={handleChange}
        ></input>
      </div>
      <div className="w-full my-4">
        <label
          className="block mb-2 text-grey-400 font-bold"
          htmlFor="password"
        >
          password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="block w-full px-4 py-2 outline-none border-2 rounded-sm bg-gray-50 border-grey-100"
          value={form.password}
          onChange={handleChange}
        ></input>
      </div>
      {error ? <p style={{ color: "red" }}>{error}</p> : null}

      <Button className="mt-12" onClick={handleClick}>
        login
      </Button>
    </form>
  );
};
