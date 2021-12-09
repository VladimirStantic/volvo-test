describe('Declaimer component', () => {
  beforeEach(() => {
    cy.acceptCookies()
    cy.visit('/')
  })
  it('shows the declaimer', () => {
    //TODO move data to fixtures
    cy.get('[data-autoid="Disclaimer-1"]')
      .contains(
        ' These films contain true stories from real people, who have been compensated for their participation.',
      )
      .should('be.visible')

    cy.get('[data-autoid="Disclaimer-1"]')
      .contains(
        "Volvo Cars' safety features complement safe driving practices and are not intended to enable or encourage distracted, aggressive, or otherwise unsafe or illegal driving. Ultimately, the driver is responsible for safe operation of the vehicle at all times.",
      )
      .should('be.visible')
  })
})
