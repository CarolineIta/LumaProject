describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvMi1kZW1vLm1hZ2ViaXQuY29tLw%2C%2C/');
  })

  it('Login with success', () => {
    cy.login("roni_cost@example.com","roni_cost3@example.com")
    cy.get('.logged-in').contains("Welcome, Veronica Costello!")
  })
  it('Login without success - wrong password', () => {
    cy.login("roni_cost@example.com","wrong password")
    cy.get('.message-error > div').contains("The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later")
  })
  it('Login without success - invalid email', () => {
    cy.login("roni_cost","roni_cost3@example.com")
    cy.get('#email-error').contains("Please enter a valid email address (Ex: johndoe@domain.com).")
  })
})
