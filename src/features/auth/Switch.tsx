import { FC } from 'react';

export const Switch: FC<{
  isLogin: boolean;
  handleSwitch: () => void;
}> = ({ isLogin, handleSwitch }) => {
  const text = isLogin ? "need an account ?" : "already have an account ?";
  const buttonText = isLogin ? "Register" : "Login";
  const paragraph = <p className="font-bold  mr-4 items-center">{text}</p>;
  const button = (
    <button className="border-b-2 border-green-400" onClick={handleSwitch}>
      {buttonText}
    </button>
  );

  return (
    <div className="mt-8 flex">
      {paragraph}
      {button}
    </div>
  );
};

// TODO: remove - keep as example for now - does not log when React.memo wraps the component
Switch.whyDidYouRender = true;
