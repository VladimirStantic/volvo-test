describe('Text statement component', () => {
  beforeEach(() => {
    cy.acceptCookies()
    cy.visit('/')
  })
  it('shown the text statement', () => {
    //TODO move data to fixtures
    cy.get('[data-autoid="TextStatement-1"]').scrollIntoView()
    cy.get('[data-autoid="TextStatement-1"]').should('be.visible')
    cy.get('[data-autoid="TextStatement-1"]').contains('A million more.')
    cy.get('[data-autoid="TextStatement-1"]').contains(
      'With new and existing safety features, we are determined to save a million more lives.',
    )
  })
})
