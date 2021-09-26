import { FC, useState } from 'react';
import { DailyForm } from '../../features/daily/components/DailyForm';
import { DailyList } from '../../features/daily/components/DailyList';
import { Button } from '../base/Button';
import { Template } from '../templates/Template';

export const PageHome: FC = () => {
  const [isList, setIsList] = useState(false);
  const current = isList ? "Add Daily" : "Daily List";

  return (
    <Template>
      <Button className="" onClick={() => setIsList((prev) => !prev)}>
        {current}
      </Button>
      {isList ? <DailyList /> : <DailyForm />}
    </Template>
  );
};
