import './App.css';
import { FC } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { PageDailies } from './components/pages/PageDailies';
import { PageHome } from './components/pages/PageHome';
import { PageWords } from './components/pages/PageWords';
import { Auth } from './features/auth/Auth';
import { Confirm } from './features/auth/Confirm';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        {/* 
           TODO: move to AuthCognito Bit for reuse
           Token can be stored in different places or can be null
           storeCallback=() => { ... store somewhere localStorage/session/redux/saga/promise and handle auth process to switch to private route }
           

            TODO: provide a way to pass function if using api instead of cognito / could use a Design pattern like Template
            <Auth routeToRedirect="/home" store="storeCallback" appName="Nikki" pageColor="" btnColor="" inputColor="" api={login: ()=> void, register: () => void ...}/>
         */}

        <Route exact path="/home" component={PageHome}></Route>
        <Route exact path="/dailies" component={PageDailies}></Route>
        <Route exact path="/words" component={PageWords}></Route>
        <Route exact path="/auth" component={Auth}></Route>
        <Route exact path="/confirm" component={Confirm} />
        <Route exact path="/">
          {localStorage.getItem("isAuth") ? (
            <Redirect to="/home" />
          ) : (
            <Redirect to="/auth" />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
