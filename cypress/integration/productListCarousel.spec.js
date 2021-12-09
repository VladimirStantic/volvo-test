import ProductListCarousel from '../ComponentsObjects/productListCarousel'
import productListCarousel from '../fixtures/productListCarousel.json'

describe('Product list carousel component', () => {
  beforeEach(() => {
    cy.acceptCookies()
    cy.visit('/')
  })
  it('shows the title', () => {
    ProductListCarousel.title.should('be.visible')
    ProductListCarousel.title.contains(productListCarousel.header)
  })

  it('can navigate through carousel using buttons', () => {
    //check the length of the carousel
    ProductListCarousel.carouselItem.should('have.length', 8)

    //scrolls into viewport
    ProductListCarousel.carouselListItem(0).scrollIntoView()

    //check that the previous button is disabled
    ProductListCarousel.previousButton.should(
      'have.attr',
      'aria-disabled',
      'true',
    )
    ProductListCarousel.nextButton.click()
    ProductListCarousel.carouselListItem(0).should('not.be.visible')
    ProductListCarousel.carouselListItem(4).should('be.visible')

    //navigate to the end and check next button is disabled
    ProductListCarousel.nextButton.click()
    ProductListCarousel.nextButton.click()
    ProductListCarousel.nextButton.click()
    ProductListCarousel.nextButton.should('have.attr', 'aria-disabled', 'true')
    ProductListCarousel.carouselListItem(5).should('be.visible')
    ProductListCarousel.carouselListItem(6).should('be.visible')
    ProductListCarousel.carouselListItem(7).should('be.visible')

    //navigate two items back and check correct items are visible
    ProductListCarousel.previousButton.click()
    ProductListCarousel.previousButton.click()
    ProductListCarousel.carouselListItem(2).should('be.visible')
    ProductListCarousel.carouselListItem(3).should('be.visible')
    ProductListCarousel.carouselListItem(4).should('be.visible')
    ProductListCarousel.carouselListItem(5).should('be.visible')
  })

  it('should load the item details', () => {
    //TODO It would be good to have a json with all the carousel data

    //scrolls into viewport
    ProductListCarousel.carouselListItem(0).scrollIntoView({
      offset: {top: -150, left: 0},
    })

    //checks the item category
    ProductListCarousel.carouselListItem(0).within(() => {
      ProductListCarousel.carouselListItemCategory.contains(
        productListCarousel.items.item1.category,
      )
    })

    //check the item model name and recharge type
    ProductListCarousel.carouselListItem(0).within(() => {
      ProductListCarousel.carouselListItemModelName.should('be.visible')
      ProductListCarousel.carouselListItemModelName.contains(
        productListCarousel.items.item1.modelName,
      )
      ProductListCarousel.carouselListItemRechargeType.should('be.visible')
      ProductListCarousel.carouselListItemRechargeType.contains(
        productListCarousel.items.item1.rechargeType,
      )
    })

    //check the image is loaded
    //TODO
    //The image is rerendering here so we need to find a way to make sure that the image is there before continuing
    //One way is to intercept the image request but the tests are flaky, there is some caching
    // cy.intercept('GET', productListCarousel.items.item1.img + '**').as(
    //   'request',
    // )
    // cy.wait('@request').then(res => {
    //   expect(res.response.statusCode).to.eq(200)
    // })

    //For now we wait for 2 seconds
    /* eslint-disable cypress/no-unnecessary-waiting */
    cy.wait(4000)
    /* eslint-enable cypress/no-unnecessary-waiting */
    ProductListCarousel.carouselListItem(0).within(() => {
      ProductListCarousel.carouselListItemImage.should('be.visible')
      ProductListCarousel.carouselListItemImage.then($img => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    })

    //check the links
    ProductListCarousel.carouselItem.eq(0).within(() => {
      ProductListCarousel.carouselItemLink1.should('be.visible')
      ProductListCarousel.carouselItemLink1.should(
        'have.attr',
        'href',
        productListCarousel.items.item1.link1.path,
      )
      ProductListCarousel.carouselItemLink1.contains(
        productListCarousel.items.item1.link1.name,
      )
      ProductListCarousel.carouselItemLink2.should('be.visible')
      ProductListCarousel.carouselItemLink2.should(
        'have.attr',
        'href',
        productListCarousel.items.item1.link2.url,
      )
      ProductListCarousel.carouselItemLink2.contains(
        productListCarousel.items.item1.link2.name,
      )

      //TODO click on the links and assert the url
    })
  })

  it('can click on call to action links', () => {
    //scrolls into viewport
    ProductListCarousel.callToAction1.scrollIntoView({
      offset: {top: -150, left: 0},
    })

    //TODO sometimes the cla element is detached from the DOM, need to investigate and make assertion to make sure it is properly loaded before continuing. For now we added wait time
    /* eslint-disable cypress/no-unnecessary-waiting */
    cy.wait(4000)
    /* eslint-enable cypress/no-unnecessary-waiting */

    ProductListCarousel.callToAction1.should('be.visible')
    ProductListCarousel.callToAction1.should(
      'have.attr',
      'href',
      productListCarousel.callToAction1.path,
    )
    ProductListCarousel.callToAction1.contains(
      productListCarousel.callToAction1.name,
    )

    ProductListCarousel.callToAction2.should('be.visible')
    ProductListCarousel.callToAction2.should(
      'have.attr',
      'href',
      productListCarousel.callToAction2.path,
    )
    ProductListCarousel.callToAction2.contains(
      productListCarousel.callToAction2.name,
    )

    ProductListCarousel.callToAction1.click()
    cy.url().should('include', productListCarousel.callToAction1.path)

    cy.visit('/')
    ProductListCarousel.callToAction2.click()
    cy.url().should('include', productListCarousel.callToAction2.path)
  })
})
