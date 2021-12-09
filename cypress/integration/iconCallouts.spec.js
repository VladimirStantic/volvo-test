import IconCallouts from '../ComponentsObjects/iconCallouts'
import iconCallouts from '../fixtures/iconCallouts.json'
describe('Icon callouts component', () => {
  beforeEach(() => {
    cy.acceptCookies()
    cy.visit('/')
  })
  it('shows icon callouts', () => {
    IconCallouts.iconCallouts.scrollIntoView()
    //TODO sometimes icon element is detached from the DOM, need to investigate and make assertion to make sure it is properly loaded before continuing. For now we added wait time

    /* eslint-disable cypress/no-unnecessary-waiting */
    cy.wait(4000)
    /* eslint-enable cypress/no-unnecessary-waiting */

    IconCallouts.iconTextItem.should(
      'have.length',
      iconCallouts.iconTextItems.length,
    )
    iconCallouts.iconTextItems.forEach(($item, $index) => {
      IconCallouts.iconTextItem
        .eq($index)
        .contains(iconCallouts.iconTextItems[$index].title)
        .should('be.visible')
      IconCallouts.iconTextItemText
        .eq($index)
        .contains(iconCallouts.iconTextItems[$index].text)
        .should('be.visible')
      IconCallouts.iconTextItemIcon.eq($index).should('be.visible')
    })
  })
  it('makes a call to action', () => {
    IconCallouts.callToAction
      .contains('Learn more about car safety')
      .should('be.visible')
    IconCallouts.callToAction.should('have.attr', 'href', '/intl/v/car-safety')
    IconCallouts.callToAction.click()
    cy.url().should('include', '/intl/v/car-safety')
  })
  it('shown the declaimer', () => {
    IconCallouts.iconCallouts
      .find('[data-nosnippet="true"]')
      .contains(
        'Features depicted may not be standard or available for all styles, engine options, model years and regions.',
      )
      .should('be.visible')
  })
})
