class ProductListCarousel {
  get title() {
    return cy.get('[data-autoid="productListCarousel:title"]')
  }

  get previousButton() {
    return cy.get('[data-autoid="springCarouselPreviousButton"]')
  }

  get nextButton() {
    return cy.get('[data-autoid="springCarouselNextButton"]')
  }

  get callToAction1() {
    return cy.get('[data-autoid="ProductListCarousel:cta1"]')
  }

  get callToAction2() {
    return cy.get('[data-autoid="ProductListCarousel:cta2"]')
  }

  get carouselItem() {
    return cy.get('[data-autoid="springCarouselPane:carouselItem"]')
  }

  carouselListItem(id) {
    return cy.get(`[data-autoid="productListCarouselItem-${id}"]`)
  }

  get carouselListItemCategory() {
    return cy.get('[data-autoid="productListCarouselItem:category"]')
  }

  get carouselListItemModelName() {
    return cy.get('[data-autoid="productListCarouselItem:modelName"]')
  }

  get carouselListItemRechargeType() {
    return cy.get('[data-autoid="productListCarouselItem:rechargeType"]')
  }

  get carouselListItemImage() {
    return cy.get('img')
  }

  get carouselItemLink1() {
    return cy.get('[data-autoid="productListCarouselItem:link1"]')
  }

  get carouselItemLink2() {
    return cy.get('[data-autoid="productListCarouselItem:link2"]')
  }
}

export default new ProductListCarousel()
