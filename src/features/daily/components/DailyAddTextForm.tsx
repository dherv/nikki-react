import { ChangeEvent, FC, MouseEvent } from 'react';
import { Button } from '../../../components/base/Button';

export const DailyAddTextForm: FC<{
  value?: string;
  error?: string;
  onSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSelection: () => void;
}> = ({ value, error, onSubmit, onChange, onSelection }) => {
  return (
    <form className="w-full">
      <textarea
        rows={10}
        id="daily"
        name="daily"
        aria-label="daily"
        className="w-full p-4 my-4 text-gray-700 rounded shadow-lg resize-none focus:outline-none"
        onChange={onChange}
        onMouseUp={onSelection}
        onKeyUp={onSelection}
        value={value}
      ></textarea>
      <p className="text-pink-600">{error}</p>
      <Button onClick={onSubmit}>submit</Button>
    </form>
  );
};
