import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TemplateAuth } from '../../components/templates/TemplateAuth';
import { CognitoCode, login, register, RegisterData } from '../../lib/auth';
import { User } from '../../types/types';
import { Login } from './Login';
import { Register } from './Register';
import { Switch } from './Switch';

export const Auth = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const redirectToConfirm = () => {
    history.push("/confirm");
  };

  const handleLogin = (form: User) => {
    return login(form)
      .then(() => history.push("/home"))
      .catch((err) => {
        // TODO: add message before transition and fill in the username
        if (err.code === CognitoCode.UserNotConfirmedException) {
          redirectToConfirm();
        }
        // regular code handling
        if (Object.values(CognitoCode).includes(err.code as CognitoCode)) {
          setError(err.message);
        }
      });
  };

  const handleRegister = (form: RegisterData) => {
    // TODO: add message before transition and fill in the username
    return register(form)
      .then(() => redirectToConfirm())
      .catch((err) => {
        // regular code handling
        if (Object.values(CognitoCode).includes(err.code as CognitoCode)) {
          setError(err.message);
        }
      });
  };

  // prevent re-rendering switch component Auth rerender (ex: when error triggered)
  const handleSwitch = useCallback(() => {
    setError(null);
    setIsLogin((prev) => !prev);
  }, [setError, setIsLogin]);

  // TODO: extract login component to push to Bit
  // TODO: add animation on appear

  const current = isLogin ? (
    <Login onLogin={handleLogin} error={error} />
  ) : (
    <Register onRegister={handleRegister} error={error} />
  );

  return (
    <TemplateAuth>
      {current}
      <Switch isLogin={isLogin} handleSwitch={handleSwitch} />
    </TemplateAuth>
  );
};
