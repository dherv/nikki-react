/// <reference types="cypress" />

describe("dailies page", () => {
  describe("search and add a word", () => {
    before(() => {
      cy.visit("http://localhost:3000/home");
    });
    it("can highlight text in the text editor", () => {
      // simulate selection with selectall and click
      cy.get("#daily").type("テスト{selectall}");
      cy.get("#daily").click();
    });

    it("should display the selected word in the modal - disabled", () => {
      cy.findByRole("dialog", { name: "add word" }).within(() =>
        cy.findByDisplayValue("テスト").should("be.disabled")
      );
    });

    it("can add translation", () => {
      cy.findByPlaceholderText("translation").type("translation");
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

    it("should add a searched word to daily word list on click and close the modal", () => {
      cy.get("[data-cy=searchWordList]").contains("テスト - test").click();
      cy.get("[data-cy=dailyWordList]").contains("テスト - test");
      cy.findByRole("dialog", { name: "add word" }).should("not.exist");
    });

    // TODO: move remove list item to cypress command
    // find better way to select icon - instead of :nth-child(2) >
    it("should remove a word from the daily word list on click x icon", () => {
      cy.get(
        `[data-cy=dailyWordList] :nth-child(1) > [data-cy="removeIcon"]`
      ).click();
      cy.get("[data-cy=dailyWordList]").should(
        "not.contain.text",
        "テスト - test"
      );
    });
  });

  describe("add a word", () => {
    before(() => {
      cy.visit("http://localhost:3000/home");
    });
    it("can highlight text in the text editor ", () => {
      // simulate selection with selectall and click
      cy.get("#daily").type("テスト{selectall}");
      cy.get("#daily").click();
    });

    it("should display the selected word in the modal - disabled", () => {
      cy.findByRole("dialog", { name: "add word" }).within(() =>
        cy.findByDisplayValue("テスト").should("be.disabled")
      );
    });

    it("can add translation", () => {
      cy.findByPlaceholderText("translation").type("translation");
      cy.findByDisplayValue("translation").should("exist");
    });

    it("can add the word to the current daily word list and close the modal", () => {
      cy.findByRole("dialog", { name: "add word" })
        .findByRole("button", { name: "add" })
        .click();

      cy.get("[data-cy=dailyWordList]").contains("テスト - translation");
      cy.findByRole("dialog", { name: "add word" }).should("not.exist");
    });

    // TODO: move remove list item to cypress command
    // find better way to select icon - instead of :nth-child(2) >
    it("should remove a word from the daily word list on click x icon", () => {
      cy.get(
        `[data-cy=dailyWordList] :nth-child(1) > [data-cy="removeIcon"]`
      ).click();
      cy.get("[data-cy=dailyWordList]").should(
        "not.contain.text",
        "テスト - test"
      );
    });
  });
});
