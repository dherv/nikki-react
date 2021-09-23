import React, { FC } from 'react';

export const Switch: FC<{
  isLogin: boolean;
  handleSwitch: () => void;
}> = React.memo(({ isLogin, handleSwitch }) => {
  console.log(isLogin, handleSwitch);
  const text = isLogin ? "need an account ?" : "already have an account ?";
  const buttonText = isLogin ? "Register" : "Login";
  const paragraph = <p className="font-bold  mr-4 items-center">{text}</p>;
  const button = (
    <button className="border-b-2 border-green-400" onClick={handleSwitch}>
      {buttonText}
    </button>
  );
  console.log("render switch");

  return (
    <div className="mt-8 flex">
      {paragraph}
      {button}
    </div>
  );
});
Switch.whyDidYouRender = true;
