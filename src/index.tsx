import './index.css';
import './mocks/browser';
import './wdyr';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo-client';
import App from './App';
import { store } from './app/store';
import * as serviceWorker from './serviceWorker';

// if (process.env.NODE_ENV === "development") {
//   import("./mocks/browser").then(({ worker }) => worker.start());
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
