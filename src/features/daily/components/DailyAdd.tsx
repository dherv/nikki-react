import { ChangeEvent, FC, MouseEvent } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { Button } from '../../../components/Button';
import { addDailyRequest, formAddText, selectedWord } from '../dailySlice';

export const DailyAdd: FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({
      type: addDailyRequest.type,
    });
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: formAddText.type, payload: event.target.value });
  };

  const handleMouseUp = (event: MouseEvent) => {
    const selection = window.getSelection()?.toString();
    if (selection && selection?.length > 0) {
      dispatch({ type: selectedWord.type, payload: selection });
    }
  };

  return (
    <form className="w-full	">
      <textarea
        rows={10}
        className="w-full p-4 my-4 text-gray-700 rounded shadow-lg resize-none focus:outline-none"
        onChange={handleChange}
        onMouseUp={handleMouseUp}
      ></textarea>
      <Button onClick={handleClick}>submit</Button>
    </form>
  );
};
