describe("General Functionality", () => {
  it("did the products load", () => {
    cy.visit("http://localhost:3000");
    cy.getByData("product-container");
  });
});
