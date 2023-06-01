describe("watchlist", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.themoviedb.org/3//movie/*", {
      fixture: "popular.json",
    }).as("mockedPopular");
    cy.visit("http://localhost:3000/");
  });

  it("allows to add to favorite and remove it later", () => {
    cy.get(".fa-star.fa-regular").parent().first().as("firststar");
    cy.get("@firststar").click();
    cy.contains("Watchlist").click();
    cy.contains("MK John").should("exist");
    cy.contains("MK John").parent().parent().as("selected");

    cy.get("@selected").find(".fa-star").click();
    cy.root().should("not.contain", "MK John");
  });
});
