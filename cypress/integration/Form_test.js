const name = "John"
const email = "john@gmail.com"
const password = "pass1234"

describe('Form', () => {
  it('can navigate to site', () => {
    cy.visit('localhost:3000')
  })

  it('can submit a user', () => {
    cy.get('input[name="name"]')
      .type(name)
      .should('have.value', name)

    cy.get('input[name="email"]')
      .type(email)
      .should('have.value', email)

    cy.get('input[name="password"]')
      .type(password)
      .should('have.value', password)

      cy.get('input[name="tos"]')
      .check()
      .should('have.checked')
  })
});