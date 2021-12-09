class Navigation {
  get logo() {
    return cy.get('[data-autoid="nav:siteNavLogoSmall"]')
  }

  get volvoImage() {
    return cy.get('[alt="Volvo"]')
  }

  get ourCarsMenuButton() {
    return cy.get('[data-autoid="nav:topNavCarMenu"]')
  }

  get ourCarMenuDesktop() {
    return cy.get('[data-autoid="nav:carMenuDesktop"]')
  }

  get navMenuCarsSection() {
    return cy.get('[data-autoid="nav:carMenuDesktop"]').find('[role="tablist"]')
  }
  carMenuSectionTab(id) {
    return cy.get(`[id="site-nav-cars-menu-section-tab-${id}"]`)
  }

  carMenuSectionPanel(id) {
    return cy.get(`[id="site-nav-cars-menu-section-panel-${id}"]`)
  }

  get carMenuCloseButton() {
    return cy.get('[data-autoid="nav:carMenuCloseIcon"]')
  }
}

export default new Navigation()
