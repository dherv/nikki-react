/// <reference types="cypress" />
import { dailyList } from '../../../src/mocks/index';

describe("dailies page", () => {
  before(() => {
    cy.intercept("POST", "http://localhost:4000/", (req) => {
      req.reply({
        data: {
          dailies: dailyList,
        },
      });
    }).as("FetchDailies");
    cy.visit("http://localhost:3000/dailies");
    cy.wait("@FetchDailies");
  });

  it("shows the list of dailies", () => {
    cy.contains(/test/);
  });

  // TODO: move remove list item to cypress command
  // find better way to select icon - instead of :nth-child(2) >
  it("should remove a daily from the list on click x icon", () => {
    cy.intercept("POST", "http://localhost:4000/", (req) => {
      req.reply({
        data: {
          deleteDaily: "1",
        },
      });
    }).as("deleteDaily");
    cy.get("[data-cy=dailyList] li").should("have.length", 2);
    cy.get(
      `[data-cy=dailyList] :nth-child(2) > [data-cy="removeIcon"]`
    ).click();
    cy.get("[data-cy=dailyList] li").should("have.length", 1);
    cy.wait("@deleteDaily");
  });
});
