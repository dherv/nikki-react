import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { Word } from '../../../app/types';
import { addDailyRequest } from '../dailySlice';
import { DailyAddTextForm } from './DailyAddTextForm';
import { DailyAddWordList } from './DailyAddWordList';
import { WordAdd } from './WordAdd';

export const DailyAdd: FC = () => {
  const dispatch = useAppDispatch();
  const [dailyText, setDailyText] = useState<string>();
  const [words, setWords] = useState<Word[]>();
  const [selectedWord, setSelectedWord] = useState<string>("");
  const [error, setError] = useState<string>();

  // move to form custom hook
  const validate = () => {
    if (!dailyText) {
      setError("please enter a daily text");
      return false;
    }
    return true;
  };

  // reset will reset the selectedWord which in turn close the modal
  const reset = () => setSelectedWord("");

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    validate();
    if (dailyText) {
      const dailyRequest = {
        text: dailyText,
        translation: "",
        words: words,
      };
      dispatch(addDailyRequest(dailyRequest));
    }
    reset();
  };

  // Textarea
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (error && event.target.value !== "") {
      setError("");
    }
    setDailyText(event.target.value);
  };

  const handleSelection = () => {
    const selection = window.getSelection()?.toString();
    if (selection) setSelectedWord(selection);
  };

  const handleAddWord = (word: Word) => {
    const newWords = words ? [...words, word] : [word];
    setWords(newWords);
    reset();
  };

  const handleRemoveWord = (id: string) => {
    const newWords = words?.filter((w) => w.id !== id);
    setWords(newWords);
  };

  const shouldShowModal = selectedWord !== "";
  return (
    <>
      <h2 className="mr-auto my-2 title">Add today's daily</h2>
      <DailyAddTextForm
        value={dailyText}
        error={error}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onSelection={handleSelection}
      />
      <DailyAddWordList
        words={words}
        onRemove={handleRemoveWord}
      ></DailyAddWordList>
      <WordAdd
        show={shouldShowModal}
        onSubmit={handleAddWord}
        onClose={reset}
        text={selectedWord}
      />
    </>
  );
};
