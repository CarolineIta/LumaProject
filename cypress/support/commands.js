import { faker } from '@faker-js/faker';

Cypress.Commands.add("login", (email, password) => {
  cy.get("#email").type(email)
  cy.get("#pass").type(password)
  cy.get("#send2").click()
});

Cypress.Commands.add("selectProductSize", (size) => {
  switch (size) {
    case "XS":
      cy.get("#option-label-size-157-item-170").click()
      break;
    case "S":
      cy.get("#option-label-size-157-item-171").click()
      break;
    case "M":
      cy.get("#option-label-size-157-item-172").click()
      break;
    case "L":
      cy.get("#option-label-size-157-item-173").click()
      break;
    case "XL":
      cy.get("#option-label-size-157-item-174").click()
      break;
    default:
      cy.log("🔴 Please choose a valid option, Ex: XS, S, M, L or XL")
  }

});


Cypress.Commands.add("selectProductColor", (color) => {
  switch (color) {
    case "black":
      cy.get("#option-label-color-93-item-49").click()
      break;
    case "blue":
      cy.get("#option-label-color-93-item-50").click()
      break;
    case "purple":
      cy.get("#option-label-color-93-item-57").click()
      break;
    default:
      cy.log("🔴 Please choose a valid option, Ex: black ,blue or purple")
  }
});

Cypress.Commands.add("addProductToCart", (size, color) => {
  cy.selectProductSize(size)
  cy.selectProductColor(color)
  cy.contains('Add to Cart').click({ force: true })
});


Cypress.Commands.add("mouseOver", (id) => {
  cy.get(id).trigger('mouseover')
});


Cypress.Commands.add("fillPersonalInformation", () => {
  const randomFirstName = faker.person.firstName()
  const randomLastName = faker.person.lastName()

  cy.get("#firstname").type(randomFirstName)
  cy.get("#lastname").type(randomLastName)
});


Cypress.Commands.add("fillSignInformation", () => {
  const randomEmail = faker.internet.email()
  const password = randomEmail + "23"

  cy.log("🤖 email => " + randomEmail)
  cy.log("🤖 password => " + password)

  cy.get("#email_address").type(randomEmail)
  cy.get("#password").type(password)
  cy.get("#password-confirmation").type(password)
});


Cypress.Commands.add("fillShippingInformation", () => {
  const randomEmail = faker.internet.email()
  const randomFirstName = faker.person.firstName()
  const randomLastName = faker.person.lastName()
  const randomStreetAddress = faker.location.street()
  const randomState = faker.location.state()
  const randomCity = faker.location.city()
  const randomZipCode = faker.location.zipCode('#####-####')
  const randomPhoneNumber = faker.phone.number()

  cy.get("#customer-email").should('be.visible');
  cy.get("#customer-email").type(randomEmail)
  cy.get('[name="firstname"]:visible').type(randomFirstName)
  cy.get("input[name=lastname]").type(randomLastName)
  cy.get("[name='street[0]']").type(randomStreetAddress)
  cy.get("[name='region_id'").select(randomState)
  cy.get("[name='city']").type(randomCity)
  cy.get("[name='postcode']").type(randomZipCode)
  cy.get("[name='telephone']").type(randomPhoneNumber)
  cy.get('[type="radio"]').check('tablerate_bestway')
});