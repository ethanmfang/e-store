describe("Product Functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("did the products render properly", () => {
    // cy.getByData("product").eq(0).should("exist");
    // cy.getByData("product").eq(1).should("exist");
    cy.getByData("product").should((items) => {
      expect(items[0]).to.contain("Fjallraven");
      expect(items[1]).to.contain("Mens Casual Premium");
      expect(items[2]).to.contain("Mens Cotton Jacket");
      expect(items[3]).to.contain("Mens Casual Slim Fit");
      expect(items[4]).to.contain("John Hardy Women's");
      expect(items[5]).to.contain("Solid Gold Petite");
      expect(items[6]).to.contain("White Gold Plated Princess");
    });
  });
});

describe("Search Functionality Test", () => {
  it("does the search input filter properly by jewelery", () => {
    cy.getByData("searchBar").type("jewelery");
    cy.getByData("product").should("have.length", 4);
  });
  it("does the search input filter properly by electronics", () => {
    cy.getByData("searchBar").clear().type("electronics");
    cy.getByData("product").should("have.length", 6);
  });
});
