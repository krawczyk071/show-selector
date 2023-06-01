describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays search box", () => {
    cy.get(".myipt").should("exist");
  });

  it("confirms what you searched for", () => {
    cy.get(".myipt").type("ninja");
    cy.get(".myipt-btn").click();
    cy.contains("Results for: ninja").should("be.visible");
    cy.get("[alt='cover']").eq(0).should("exist");
  });
});
