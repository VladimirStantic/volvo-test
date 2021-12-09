class ImageWithText {
  get header() {
    return cy.get('[data-autoid="imageWithText:title"]')
  }

  get paragraph() {
    return cy.get('[data-autoid="imageWithText:description"]')
  }

  get image() {
    return cy.get('[data-autoid="imageWithText:image"]')
  }

  get callToAction() {
    return cy.get('[data-autoid="imageWithText:primaryCta"]')
  }
}

export default new ImageWithText()
