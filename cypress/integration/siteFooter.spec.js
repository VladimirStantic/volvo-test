import SiteFooter from '../ComponentsObjects/siteFooter'

describe('Footer container', () => {
  beforeEach(() => {
    cy.acceptCookies()
    cy.visit('/')
  })
  it('shows the links', () => {
    //TODO move data to fixtures
    const legalLinks = ['Cookies', 'Legal', 'Privacy', 'Social Media']
    SiteFooter.footer.scrollIntoView()
    SiteFooter.footer.should('be.visible')
    SiteFooter.footerLinks.should('have.length', 4)

    legalLinks.forEach(($link, $index) => {
      SiteFooter.footerLinks.eq($index).contains($link).should('be.visible')
      SiteFooter.footerLinks
        .eq($index)
        .should(
          'have.attr',
          'href',
          'https://www.volvocars.com/intl/v/legal/' +
            $link.toLowerCase().replace(' ', '-'),
        )
    })
  })

  it('shows the copyrights', () => {
    //TODO move data to fixtures

    SiteFooter.copyrights
      .contains(
        'Copyright © 2021 Volvo Car Corporation (or its affiliates or licensors)',
      )
      .should('be.visible')
  })
})
