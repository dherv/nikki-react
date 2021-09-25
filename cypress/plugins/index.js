/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// plugins/index.js
import dotenv from "dotenv";
dotenv.config({ path: "../../.env.local" });

// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  config.env.userPoolId = process.env.REACT_APP_COGNITO_USER_POOL_ID;
  config.env.appClientId = process.env.REACT_APP_COGNITO_CLIENT_ID;
  config.env.identityPoolId = process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID;

  // do not forget to return the changed config object!
  return config;
};
