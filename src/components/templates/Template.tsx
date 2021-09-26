import { FC, useState } from 'react';
import styled from 'styled-components';
import { Aside } from '../base/Aside';
import { Header } from '../base/Header';

const StyledMain = styled.main<{ show: boolean }>`
  width: ${({ show }) => (show ? "calc(100% - 300px)" : "100%")};
  max-width: ${({ show }) => (show ? "calc(100% - 300px)" : "100%")};
  transition: all 0.3s linear;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Template: FC = ({ children }) => {
  // TODO: dispatch show
  const [show, setShow] = useState(false);

  return (
    <div className="p-4 h-screen bg-gray-50">
      <Header onClick={() => setShow((prev) => !prev)} />
      <div className="flex overflow-auto">
        <StyledMain className="p-4 mt-8" show={show}>
          {children}
        </StyledMain>
        <Aside onClick={() => setShow(false)} show={show} />
      </div>
    </div>
  );
};
