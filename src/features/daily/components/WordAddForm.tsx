import { ChangeEvent, FC, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../../../app/hooks';
import { WordBase } from '../../../app/types';
import { Button } from '../../../components/base/Button';
import { Input } from '../../../components/base/Input';
import { Word } from '../../../types/types';
import { dailySearchWordRequest } from '../dailySlice';

export const WordAddForm: FC<{
  text: string;
  onSubmit: (word: Word) => void;
}> = ({ text, onSubmit }) => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState<WordBase>({
    text: "",
    translation: "",
  });

  useEffect(() => {
    setForm((form: WordBase) => ({ ...form, text }));
  }, [text]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = () => onSubmit({ id: uuidv4(), ...form });

  // TODO: add test for search functionality
  const handleClickSearch = () =>
    dispatch({
      type: dailySearchWordRequest.type,
      payload: form,
    });

  const isDisabled = text !== "";
  return (
    <form>
      <Input
        placeholder="word"
        value={form.text}
        name="text"
        disabled={isDisabled}
        onChange={handleChange}
      />
      <Input
        placeholder="translation"
        value={form.translation}
        name="translation"
        onChange={handleChange}
      />

      <div className="flex my-2">
        <Button className="mr-2" onClick={handleSubmit}>
          add
        </Button>
        <Button onClick={handleClickSearch}>search</Button>
      </div>
    </form>
  );
};
