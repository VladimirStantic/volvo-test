describe('Model intro component', () => {
  beforeEach(() => {
    cy.acceptCookies()
    cy.visit('/')
  })
  it('Should show the model intro header and paragraph', () => {
    //TODO move data to fixtures

    //check the header
    cy.get('[data-autoid="ModelIntro-1"]')
      .find('h2')
      .contains('Ideas that change the world are often the most controversial.')
      .should('be.visible')

    //check the paragraph
    cy.get('[data-autoid="ModelIntro-1"]')
      .find('p')
      .contains(
        "After we introduced the 3-point safety belt, we faced a world of criticism. Since then, it has saved more than a million lives. Now it's time for the next step. For everyone's safety.",
      )
      .should('be.visible')
  })
})
