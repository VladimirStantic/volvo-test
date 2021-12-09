import imageWithText from '../fixtures/imageWithText.json'
import ImageWithText from '../ComponentsObjects/imageWithText'

describe('Image with text component', () => {
  beforeEach(() => {
    cy.acceptCookies()
    cy.visit('/')
  })
  it('can show the header', () => {
    ImageWithText.header.scrollIntoView({offset: {top: -150, left: 0}})
    ImageWithText.header.should('be.visible')
    ImageWithText.header.contains(imageWithText.header)
  })

  it('can show the paragraph', () => {
    ImageWithText.paragraph.scrollIntoView({offset: {top: -150, left: 0}})
    ImageWithText.paragraph.should('be.visible')
    ImageWithText.paragraph.contains(imageWithText.paragraph)
  })

  it('can show the picture', () => {
    ImageWithText.image.scrollIntoView({offset: {top: -150, left: 0}})
    ImageWithText.image.should('be.visible')
    ImageWithText.image.should('have.attr', 'src', imageWithText.img)
    ImageWithText.image.should('have.attr', 'alt', imageWithText.alt)

    ImageWithText.image.then($img => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
  })

  it('can open the call to action', () => {
    ImageWithText.callToAction.scrollIntoView({offset: {top: -150, left: 0}})
    ImageWithText.callToAction.should('be.visible')
    ImageWithText.callToAction.should('have.attr', 'href', imageWithText.cta)
    ImageWithText.callToAction.click()
    cy.url().should('eq', imageWithText.cta_link)
  })
})
