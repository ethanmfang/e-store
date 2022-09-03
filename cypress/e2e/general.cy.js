describe("Product Functionality", () => {
  it("did the products render properly", () => {
    cy.visit("http://localhost:3000");
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
