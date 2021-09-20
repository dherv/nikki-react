import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Main } from './components/Main';
import { Auth } from './features/auth/Auth';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Main}></Route>
        <Route exact path="/auth" component={Auth}></Route>
        <Route exact path="/">
          {localStorage.getItem("isAuth") ? (
            <Redirect to="/home" />
          ) : (
            <Redirect to="/home" />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
