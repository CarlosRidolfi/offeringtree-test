describe("Trial with never end subscription", () => {
  it("Should navigate to the home page and fill the Product Price input", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("label", "Product Price").next().clear().type("3000");

    cy.contains("label", "Upfront Payment").next().clear().type("500");

    cy.contains("label", "Billing Frequency")
      .next("div")
      .within(() => {
        cy.get("input").clear().type("5");
      });

    cy.contains("label", "Billing Frequency")
      .next("div")
      .within(() => {
        cy.get("select").select("Weeks");
      });

    cy.contains("label", "Trial Period")
      .next("div")
      .within(() => {
        cy.get("select").select("Days");
      });

    cy.contains("label", "Trial Period")
      .next("div")
      .within(() => {
        cy.get("input").clear().type("4");
      });
  });
});
