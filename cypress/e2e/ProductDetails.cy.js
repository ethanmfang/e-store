describe("Product Details functionality tests", () => {
  it("does the product details modal load on click", () => {
    cy.visit("http://localhost:3000");
    cy.getByData("product-title").eq(0).click();
    cy.getByData("product-details").should("exist");
  });
  it("does clicking ADD TO CART on product details add item to cart", () => {
    cy.getByData("addToCart-details").click();
    cy.getByData("detailsClose").click();
    cy.getByData("cartIcon").click();
    cy.getByData("cartItem").should("exist");
  });
});
