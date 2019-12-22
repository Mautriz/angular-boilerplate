beforeEach(() => {
  cy.visit("http://localhost:4200/");
  cy.server();
  cy.route("/assets/**/*").as("assets");
});

it("should change language", () => {
  cy.contains("Crazy subtitle").should("have.length", 1);
  cy.get("button")
    .contains("IT")
    .click();

  cy.wait("@assets");
  cy.contains("Sottotilo matto").should("have.length", 1);
  cy.contains("Crazy subtitle").should("not.have.length", 1);
  cy.get("button")
    .contains("EN")
    .click();
  cy.contains("Crazy subtitle").should("have.length", 1);
});
