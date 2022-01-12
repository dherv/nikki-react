import { FC } from 'react';
import { Word } from '../../../app/types';
import { Modal } from '../../../components/base/Modal';
import { WordAddForm } from './WordAddForm';
import { WordAddSearch } from './WordAddSearch';

export const WordAdd: FC<{
  show: boolean;
  text: string;
  onSubmit: (word: Word) => void;
  onClose: () => void;
}> = ({ show, text, onSubmit, onClose }) => {
  return (
    <Modal show={show} title="add word" onClose={onClose}>
      <WordAddForm text={text} onSubmit={onSubmit} />
      <WordAddSearch onSubmit={onSubmit} />
    </Modal>
  );
};
