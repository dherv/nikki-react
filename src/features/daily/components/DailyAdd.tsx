import { ChangeEvent, FC, KeyboardEvent, MouseEvent } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/hooks';
import { Button } from '../../../components/base/Button';
import { addDailyRequest, formAddText, selectedWord } from '../dailySlice';

export const DailyAdd: FC = () => {
  const dispatch = useAppDispatch();
  const value = useSelector((state: RootStateOrAny) => state.dailies.form.text);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({
      type: addDailyRequest.type,
    });
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: formAddText.type, payload: event.target.value });
  };

  const handleMouseUp = () => {
    const selection = window.getSelection()?.toString();
    if (selection && selection?.length > 0) {
      dispatch({ type: selectedWord.type, payload: selection });
    }
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    const selection = window.getSelection()?.toString();
    if (selection && selection?.length > 0) {
      dispatch({ type: selectedWord.type, payload: selection });
    }
  };

  return (
    <form className="w-full	">
      <textarea
        rows={10}
        id="daily"
        name="daily"
        aria-label="daily"
        className="w-full p-4 my-4 text-gray-700 rounded shadow-lg resize-none focus:outline-none"
        onChange={handleChange}
        onMouseUp={handleMouseUp}
        onKeyUp={handleKeyUp}
        value={value}
      ></textarea>
      <Button onClick={handleClick}>submit</Button>
    </form>
  );
};
