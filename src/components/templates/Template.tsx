import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { dailySelectedWord } from '../../features/daily/dailySlice';
import { Aside } from '../base/Aside';
import { Header } from '../base/Header';

const StyledMain = styled.main<{ show: boolean }>`
  width: 100%;
  max-width: 100%;
  transition: all 0.3s linear;
  @media (min-width: 768px) {
    width: ${({ show }) => (show ? "calc(100% - 300px)" : "100%")};
    max-width: 50%;
    margin-left: 15%;
    margin-top: 5vh;
  }
`;

export const Template: FC = ({ children }) => {
  // TODO: dispatch show
  const [show, setShow] = useState(false);
  const selectedWord = useSelector(dailySelectedWord);

  useEffect(() => {
    // if selected word open sidebar
    if (selectedWord) setShow(selectedWord);
  }, [selectedWord]);

  return (
    <div className="p-4 h-screen bg-gray-50">
      <Header onClick={() => setShow((prev) => !prev)} show={show} />
      <div className="flex overflow-auto">
        <StyledMain className="p-4 mt-8" show={show}>
          {children}
        </StyledMain>
        <Aside onClick={() => setShow(false)} show={show} />
      </div>
    </div>
  );
};
