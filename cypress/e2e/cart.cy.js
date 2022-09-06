describe("Cart Functionality Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("add items to cart and render cart", () => {
    cy.getByData("addToCart").eq(0).click();
    cy.getByData("addToCart").eq(5).click();
    cy.getByData("addToCart").eq(17).click();
    cy.getByData("cartIcon").click();
    cy.getByData("cartItem").should("have.length", 3);
    cy.getByData("cart").should("exist");
  });

  it("add 9+ items to cart and verify render of scroll indicator", () => {
    for (let i = 0; i < 11; i++) {
      cy.getByData("addToCart").eq(i).click();
    }
    cy.getByData("cartIcon").click();
    cy.getByData("scrollIndicator").should("exist");
  });

  it("clear cart button functionality", () => {
    for (let i = 0; i < 5; i++) {
      cy.getByData("addToCart").eq(i).click();
    }
    cy.getByData("cartIcon").click();
    cy.getByData("clearCartButton").click();
    cy.getByData("cartItem").should("have.length", 0);
  });
});
