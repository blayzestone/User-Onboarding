const name = "John"

describe('Form', () => {
  it('can navigate to site', () => {
    cy.visit('localhost:3000')
  })

  it('can submit a user', () => {
    cy.get('input[name="name"]')
      .type(name)
      .should('have.value', name)
  })
});