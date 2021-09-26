import { FC } from 'react';
import styled from 'styled-components';
import { XIcon } from '@heroicons/react/solid';
import { DailyAddWord } from '../../features/daily/components/DailyAddWord';
import {
  DailyWordGrammarSearchList,
} from '../../features/daily/components/DailyWordGrammarSearchList';

const StyledAside = styled.aside<{ show: boolean }>`
  position: fixed;
  right: ${({ show }) => (show ? 0 : -300)}px;
  width: 300;
  top: 0;
  bottom: 0;
  background: #fff;
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
`;

export const Aside: FC<{ onClick: () => void; show: boolean }> = ({
  onClick,
  show,
}) => {
  return (
    <StyledAside show={show} className="p-4">
      <XIcon
        role="icon"
        aria-label="close icon"
        onClick={onClick}
        className="h-5 w-5 cursor-pointer ml-auto"
      />
      <DailyAddWord />
      <DailyWordGrammarSearchList />
    </StyledAside>
  );
};
