import { useState } from 'react';
import { useHistory } from 'react-router';
import { ChangeEvent, FC } from 'react-router/node_modules/@types/react';
import { Button } from '../../components/Button';
import { TemplateAuth } from '../../components/templates/TemplateAuth';
import { confirm } from '../../lib/auth';

export interface ConfirmationData {
  username: string;
  code: string;
}
export const Confirm: FC = () => {
  const [form, setForm] = useState<ConfirmationData>({
    username: "",
    code: "",
  });
  const history = useHistory();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    // adding target.value right in the setForm does not work in testing
    //　https://github.com/testing-library/user-event/issues/533
    const value = target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleClick = () => confirm(form).then(() => history.push("/auth"));

  return (
    <TemplateAuth>
      <form
        className="block w-full p-8 bg-white shadow-md rounded-lg"
        autoComplete="off"
      >
        <h1 className="text-grey-800 mt-6 mb-12 font-bold text-4xl">
          Confirm code
        </h1>
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
          <label className="block mb-2 text-grey-400 font-bold" htmlFor="code">
            code
          </label>
          <input
            id="code"
            name="code"
            className="block w-full px-4 py-2 outline-none border-2 rounded-sm bg-green-200 border-green-400"
            value={form.code}
            onChange={handleChange}
          ></input>
        </div>
        <Button className="mt-12" onClick={handleClick}>
          confirm
        </Button>
      </form>
    </TemplateAuth>
  );
};
