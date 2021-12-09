import Navigation from '../ComponentsObjects/navigationComponent'

describe('Navigation bar', () => {
  beforeEach(() => {
    cy.acceptCookies()
    cy.visit('/')
  })
  it('loads Volvo logo image', () => {
    Navigation.volvoImage.eq(1).should('be.visible')
    Navigation.volvoImage.eq(1).then($img => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
  })

  it('Volvo logo takes the user to international page', () => {
    //TODO move date to fixtures
    const volvoLogoUrl = 'https://www.volvocars.com/intl'

    Navigation.logo.eq(1).should('have.attr', 'href', volvoLogoUrl)
    Navigation.logo.eq(1).click({force: true})
    cy.url().should('eq', volvoLogoUrl)
  })

  it('opens my cars menu and shows hybrids', () => {
    Navigation.ourCarsMenuButton.should('be.visible')
    Navigation.ourCarsMenuButton.click()
    Navigation.ourCarMenuDesktop.should('be.visible')
    Navigation.navMenuCarsSection.should('be.visible')

    Navigation.carMenuSectionTab(1).should('have.attr', 'aria-selected', 'true')

    Navigation.carMenuSectionPanel(1)
      .should('be.visible')
      .should('have.attr', 'aria-hidden', 'false')
  })

  it('can switch between car sections tabs', () => {
    Navigation.ourCarsMenuButton.click()
    Navigation.navMenuCarsSection.should('be.visible')
    //check the length
    Navigation.navMenuCarsSection.then(section => {
      cy.wrap(section).find('button').should('have.length', 3)
    })

    //check initial sections tabs are visible/hidden
    Navigation.carMenuSectionTab(0)
      .find('h2')
      .should('be.visible')
      .contains('Electric')
    Navigation.carMenuSectionTab(0)
      .find('p')
      .should('be.visible')
      .contains('Pure electric')
    Navigation.carMenuSectionTab(0).should(
      'have.attr',
      'aria-selected',
      'false',
    )

    Navigation.carMenuSectionTab(1)
      .find('h2')
      .should('be.visible')
      .contains('Hybrids')
    Navigation.carMenuSectionTab(1)
      .find('p')
      .should('be.visible')
      .contains('Plug-in hybrids')
    Navigation.carMenuSectionTab(1).should('have.attr', 'aria-selected', 'true')

    Navigation.carMenuSectionTab(2)
      .find('h2')
      .should('be.visible')
      .contains('Mild hybrids')
    Navigation.carMenuSectionTab(2)
      .find('p')
      .should('be.visible')
      .contains('Mild hybrids | Micro hybrids')
    Navigation.carMenuSectionTab(2).should(
      'have.attr',
      'aria-selected',
      'false',
    )

    //check initial section panels are visible/hidden
    Navigation.carMenuSectionPanel(0)
      .should('not.be.visible')
      .should('have.attr', 'aria-hidden', 'true')
    Navigation.carMenuSectionPanel(1)
      .should('be.visible')
      .should('have.attr', 'aria-hidden', 'false')
    Navigation.carMenuSectionPanel(2)
      .should('not.be.visible')
      .should('have.attr', 'aria-hidden', 'true')

    //Switch between the sections
    Navigation.carMenuSectionTab(0).click()
    Navigation.carMenuSectionTab(0).should('have.attr', 'aria-selected', 'true')
    Navigation.carMenuSectionPanel(0)
      .should('be.visible')
      .should('have.attr', 'aria-hidden', 'false')

    Navigation.carMenuSectionTab(1).click()
    Navigation.carMenuSectionTab(1).should('have.attr', 'aria-selected', 'true')
    Navigation.carMenuSectionPanel(1)
      .should('be.visible')
      .should('have.attr', 'aria-hidden', 'false')

    Navigation.carMenuSectionTab(2).click()
    Navigation.carMenuSectionTab(2).should('have.attr', 'aria-selected', 'true')
    Navigation.carMenuSectionPanel(2)
      .should('be.visible')
      .should('have.attr', 'aria-hidden', 'false')
  })

  it('user car selection tab persists when car menu is closed and opened again', () => {
    Navigation.ourCarsMenuButton.click()
    Navigation.ourCarMenuDesktop.should('be.visible')

    //selects  mild hybrids
    Navigation.carMenuSectionTab(2).click()
    Navigation.carMenuSectionTab(2).should('have.attr', 'aria-selected', 'true')
    Navigation.carMenuSectionPanel(2)
      .should('be.visible')
      .should('have.attr', 'aria-hidden', 'false')

    //closes the car menu
    Navigation.carMenuCloseButton.click()
    Navigation.ourCarMenuDesktop.should('not.be.visible')

    //opens the car menu
    Navigation.ourCarsMenuButton.click()
    Navigation.ourCarMenuDesktop.should('be.visible')

    //checks that the selection persisted
    Navigation.carMenuSectionTab(2).should('have.attr', 'aria-selected', 'true')
    Navigation.carMenuSectionPanel(2)
      .should('be.visible')
      .should('have.attr', 'aria-hidden', 'false')
  })

  //TODO Car menu selection panel
  //Idea is to have a fixture with all the data if json form

  //TODO Menu
  //TODO Menu logo
  //TODO Menu navigation
  //TODO Menu market selector
  //TODO Menu social media tags
})
