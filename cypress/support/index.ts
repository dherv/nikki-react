// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
/// <reference types="cypress" />

// Alternatively you can use CommonJS syntax:
import './commands';
// require('./commands')
import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: "ap-northeast-1",
    userPoolId: Cypress.env("userPoolId"),
    identityPoolId: Cypress.env("identityPoolId"),
    userPoolWebClientId: Cypress.env("appClientId"),
    // oauth: {
    //   domain: Cypress.env("domain"),
    //   scope: ["email", "profile", "aws.cognito.signin.user.admin", "openid"],
    //   redirectSignIn: Cypress.env("redirect"),
    //   redirectSignOut: Cypress.env("redirect"),
    //   responseType: "code",
    //   options: {
    //     AdvancedSecurityDataCollectionFlag: false,
    //   },
    // },
  },
});

const login = (username, password) => {
  return Auth.signIn(username, password)
    .then((user) => {
      console.log("===> user", user);

      let session = Auth.currentSession();

      console.log("===> session", session);
    })
    .catch((err) => console.log("===> err", err));
};
Cypress.Commands.add("login", login);

declare global {
  namespace Cypress {
    interface Chainable {
      login: typeof login;
    }
  }
}
