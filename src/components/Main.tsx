import { useState } from 'react';
import styled from 'styled-components';
import {
  DailyAddHighlightList,
} from '../features/daily/components/DailyAddHighlightList';
import { DailyAddWord } from '../features/daily/components/DailyAddWord';
import { DailyForm } from '../features/daily/components/DailyForm';
import { DailyList } from '../features/daily/components/DailyList';
import {
  DailyWordGrammarSearchList,
} from '../features/daily/components/DailyWordGrammarSearchList';
import { Button } from './Button';

const slideInStyle: any = {
  position: "fixed",
  right: 0,
  top: 0,
  bottom: 0,
  background: "white",
  width: 300,

  transition: "all 0.3s linear",
  "-webkit-transition": "all 0.3s linear",
};

const slideOutStyle: any = {
  position: "fixed",

  right: -300,
  width: 300,
  top: 0,
  bottom: 0,
  background: "white",

  transition: "all 0.3s linear",
  "-webkit-transition": "all 0.3s linear",
};

const StyledMain = styled.main<{ show: boolean }>`
  width: ${({ show }) => (show ? "calc(100% - 300px)" : "100%")};
  max-width: ${({ show }) => (show ? "calc(100% - 300px)" : "100%")};
  transition: all 0.3s linear;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Main = () => {
  const [show, setShow] = useState(false);
  const [isList, setIsList] = useState(false);
  const current = isList ? "Add Daily" : "Daily List";
  return (
    <div className="p-4 h-screen bg-gray-50">
      <header>
        <nav className="flex">
          <h1 className="text-lg font-bold">Nikki</h1>
          <i onClick={() => setShow((prev) => !prev)}>show</i>
        </nav>
      </header>
      <div className="flex overflow-auto">
        <StyledMain className="p-4 mt-8" show={show}>
          <Button className="" onClick={() => setIsList((prev) => !prev)}>
            {current}
          </Button>
          <div className="mt-8">{isList ? <DailyList /> : <DailyForm />}</div>
        </StyledMain>
        <aside style={show ? slideInStyle : slideOutStyle} className="p-4">
          <i onClick={() => setShow(false)}>close</i>
          <DailyAddHighlightList />
          <DailyAddWord />
          <DailyWordGrammarSearchList />
        </aside>
      </div>
    </div>
  );
};
