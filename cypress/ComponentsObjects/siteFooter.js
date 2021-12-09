class SiteFooter {
  get footer() {
    return cy.get('[data-autoid="footer:container"]')
  }

  get footerLinks() {
    return cy.get('[data-autoid="footer:links"]')
  }

  get copyrights() {
    return cy.get('[data-autoid="footer:copyright"]')
  }
}
export default new SiteFooter()
