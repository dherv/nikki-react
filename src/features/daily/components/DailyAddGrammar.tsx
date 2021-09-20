import { FC } from 'react';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

export const DailyAddGrammar: FC = () => {
  const handleChange = () => {};
  const handleClick = () => {};
  return (
    <form>
      <h5>add grammar</h5>

      <Input
        placeholder="grammar"
        value="word"
        name="grammar_translation"
        onChange={handleChange}
      />
      <Input
        placeholder="grammar translation"
        value="grammar_translation"
        name="grammar_translation"
        onChange={handleChange}
      />

      <Button onClick={handleClick}>add</Button>
    </form>
  );
};
