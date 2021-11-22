/// <reference types="cypress" />

describe("login", () => {
  beforeEach(() => cy.visit("localhost:3000/auth"));

  it("should display the login form", () => {
    cy.get("form").contains("login");
    cy.get("form").contains("username");
    cy.get("form").contains("password");
  });

  // it("should switch to register", () => {
  //   cy.contains("Register").click();
  //   cy.contains("already have an account ?");
  // });

  it("should log the user and move to home page", () => {
    cy.intercept("POST", "https://cognito-idp.ap-northeast-1.amazonaws.com/", {
      body: "login called",
      statusCode: 200,
    }).as("cognito_login");

    cy.get("form").find(`input[name="username"]`).type("username");
    cy.get("form").find(`input[name="password"]`).type("password");
    cy.get("form")
      .find("button")
      .click()
      .then(() => {
        cy.wait("@cognito_login", { timeout: 15000 })
          .its("response.body")
          .should("include", "login called");
      });

    // TODO: test cognito function once Amplify added. Redirection does not happend because it fails on the onFailure callback
  });
});
describe("register", () => {
  before(() => cy.visit("localhost:3000/auth"));
  it("should call register", () => {
    cy.intercept("POST", "https://cognito-idp.ap-northeast-1.amazonaws.com/", {
      body: "register called",
      statusCode: 200,
    }).as("cognito_register");

    cy.contains("Register").click();
    cy.get("form").find(`input[name="username"]`).type("username");
    cy.get("form").find(`input[name="password"]`).type("password");
    cy.get("form").find(`input[name="email"]`).type("email");
    cy.get("form").find("button").click();

    cy.wait("@cognito_register")
      .its("response.body")
      .should("include", "register called")
      .then(() => cy.url().should("eq", "http://localhost:3000/confirm"));
  });
});
describe("confirm", () => {
  before(() => cy.visit("localhost:3000/confirm"));
  it("should call confirm", () => {
    cy.intercept("POST", "https://cognito-idp.ap-northeast-1.amazonaws.com/", {
      statusCode: 200,
      body: "confirm called",
    }).as("cognito_confirm");

    cy.get("form").find(`input[name="username"]`).type("username");
    cy.get("form").find(`input[name="code"]`).type("123456");
    cy.get("form").find("button").click();

    cy.wait("@cognito_confirm")
      .its("response.body")
      .should("include", "confirm called")
      .then(() => cy.url().should("eq", "http://localhost:3000/auth"));
  });
});
