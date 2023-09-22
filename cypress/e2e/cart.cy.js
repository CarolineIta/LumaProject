describe("Cart Tests - logged out", () => {
  beforeEach(() => {
    cy.visit("/women/tops-women/jackets-women.html");
    cy.addProductToCart("M", "purple");
    cy.contains("shopping cart").click();
  });

  it("logged out user completes purchase successfully", () => {
    cy.contains('.grand.totals', 'Order Total').should('be.visible');
    cy.get('button[data-role="proceed-to-checkout"]').click();

    cy.fillShippingInformation()
    cy.get('button[data-role="opc-continue"]').click();
    cy.get('[title="Place Order"]').click();
    cy.contains('Thank you for your purchase! ')
  });
});