import { ChangeEvent, FC, useEffect, useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useAppDispatch } from '../../../app/hooks';
import { Button } from '../../../components/base/Button';
import { Input } from '../../../components/base/Input';
import { dailySearchWordRequest, formAddWord } from '../dailySlice';

type Form = {
  text: string;
  translation: string;
};

export const DailyAddWord: FC = () => {
  const dispatch = useAppDispatch();
  const selectedWord = useSelector(
    (state: RootStateOrAny) => state.dailies.selectedWord
  );
  const [form, setForm] = useState({
    text: "",
    translation: "",
  } as Form);

  useEffect(() => {
    setForm((form: Form) => ({ ...form, text: selectedWord }));
  }, [selectedWord]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleClick = () =>
    selectedWord && dispatch({ type: formAddWord.type, payload: form });

  const handleClickSearch = () =>
    selectedWord &&
    dispatch({
      type: dailySearchWordRequest.type,
      payload: { text: selectedWord, translation: form.translation },
    });

  return (
    <form>
      <h5 className="title">add word</h5>
      <p>{selectedWord}</p>
      <Input
        placeholder="word translation"
        value={form.translation}
        name="translation"
        onChange={handleChange}
      />

      <div className="flex my-2 justify-evenly">
        <Button onClick={handleClick}>add</Button>
        <Button onClick={handleClickSearch}>search</Button>
      </div>
    </form>
  );
};
