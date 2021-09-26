import { FC } from 'react';
import {
  DailyAddHighlightList,
} from '../../features/daily/components/DailyAddHighlightList';
import { DailyAddWord } from '../../features/daily/components/DailyAddWord';
import {
  DailyWordGrammarSearchList,
} from '../../features/daily/components/DailyWordGrammarSearchList';

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

export const Aside: FC<{ onClick: () => void; show: boolean }> = ({
  onClick,
  show,
}) => {
  return (
    <aside style={show ? slideInStyle : slideOutStyle} className="p-4">
      <button onClick={onClick}>close</button>
      <DailyAddHighlightList />
      <DailyAddWord />
      <DailyWordGrammarSearchList />
    </aside>
  );
};
