import { FC, MouseEvent } from 'react';

export const Button: FC<{
  className?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}> = ({ children, className, onClick }) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick(event);
  };
  return (
    <button className={`btn ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};
