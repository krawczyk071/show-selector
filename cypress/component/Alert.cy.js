import Alert from "../../src/components/Alert";

describe("Is it diplaying data corectly", () => {
  beforeEach(() => {
    cy.mount(<Alert msg="test1" />);
  });

  it("showing correct text", () => {
    cy.get('[data-cy="msg"]').should("exist");
    cy.get('[data-cy="msg"]').contains("test1");
  });
});
