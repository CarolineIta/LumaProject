describe("Register User Test", () => {
  beforeEach(() => {
    cy.visit("/customer/account/create/");
  });

  it("Register New User with Success", () => {
    cy.fillPersonalInformation();
    cy.fillSignInformation();
    cy.get("button.action.submit.primary").click();

    cy.get(".message-success").should(
      "contain",
      "Thank you for registering with Main Website Store."
    );
  });
});
