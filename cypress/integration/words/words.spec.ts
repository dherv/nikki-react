/// <reference types="cypress" />
import { wordList } from '../../../src/mocks/index';

describe("word page", () => {
  before(() => {
    cy.intercept("POST", "http://localhost:4000/", (req) => {
      req.reply({
        data: {
          words: wordList,
        },
      });
    }).as("FetchWords");
    cy.visit("http://localhost:3000/words");
    cy.wait("@FetchWords");
  });

  it("shows the list of words", () => {
    cy.contains(/こんにちは/);
  });

  // TODO: move remove list item to cypress command
  // find better way to select icon - instead of :nth-child(2) >
  it("should remove a word from the list on click x icon", () => {
    cy.intercept("POST", "http://localhost:4000/", (req) => {
      req.reply({
        data: {
          deleteWord: "35",
        },
      });
    }).as("deleteWord");
    cy.get("[data-cy=wordList] li").should("have.length", 2);
    cy.get(`[data-cy=wordList] :nth-child(2) > [data-cy="removeIcon"]`).click();
    cy.get("[data-cy=wordList] li").should("have.length", 1);
    cy.wait("@deleteWord");
  });
});
