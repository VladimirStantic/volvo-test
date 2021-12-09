class IconCallouts {
  get iconCallouts() {
    return cy.get('[data-autoid="IconCallouts-1"]')
  }

  get iconTextItem() {
    return cy.get('[data-autoid="iconCallouts:iconTextItem"]')
  }

  get iconTextItemIcon() {
    return cy.get('[data-autoid="IconTextList:icon"]')
  }

  get iconTextItemText() {
    return cy.get('[data-autoid="IconTextItem:text"]')
  }
  get callToAction() {
    return cy.get('[data-autoid="iconCallouts:cta"]')
  }
}

export default new IconCallouts()
