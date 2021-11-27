/// <reference types="cypress" />

describe("dailies page", () => {
  before(() => {
    cy.visit("http://localhost:3000/home");
  });

  it("can highlight text in the text editor ", () => {
    // simulate selection with selectall and click
    cy.get("#daily").type("テスト{selectall}");
    cy.get("#daily").click();
  });

  it("should display the selected word in the sidebar", () => {
    cy.findByRole("complementary").within(() => cy.contains("テスト"));
  });

  it("can add translation", () => {
    cy.findByPlaceholderText("word translation").type("translation");
    cy.findByDisplayValue("translation").should("exist");
  });
  it("can search if the word already exist", () => {
    cy.intercept("POST", "http://localhost:4000/", (req) => {
      req.reply({
        data: {
          words: [
            {
              __typename: "Word",
              id: "1",
              text: "テスト",
              translation: "test",
            },
          ],
        },
      });
    }).as("SearchWords");

    cy.findByRole("button", { name: "search" }).click();
    cy.get("[data-cy=searchWordList]").contains("テスト - test");
    cy.wait("@SearchWords");
  });

  it("can add the word to the current daily word list", () => {
    cy.findByRole("complementary")
      .findByRole("button", { name: "add" })
      .click();

    cy.get("[data-cy=dailyWordList]").contains("テスト - translation");
  });

  it("should add a searched word to daily word list on click", () => {
    cy.get("[data-cy=searchWordList]").contains("テスト - test").click();
    cy.get("[data-cy=dailyWordList]").contains("テスト - test");
  });

  // TODO: move remove list item to cypress command
  // find better way to select icon - instead of :nth-child(2) >
  it("should remove a word from the daily word list on click x icon", () => {
    cy.get(
      `[data-cy=dailyWordList] :nth-child(2) > [data-cy="removeIcon"]`
    ).click();
    cy.get("[data-cy=dailyWordList]").should(
      "not.contain.text",
      "テスト - test"
    );
  });
});
