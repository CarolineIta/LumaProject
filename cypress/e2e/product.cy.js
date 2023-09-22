describe("Product Tests", () => {

    beforeEach(() => {
      cy.visit("/women/tops-women/jackets-women.html");
    })
  
    it("Add Product to Cart with success", () => {
      cy.addProductToCart("L" , "black")
      cy.get('.message-success').contains("You added Olivia 1/4 Zip Light Jacket to your")
    });
  });
  