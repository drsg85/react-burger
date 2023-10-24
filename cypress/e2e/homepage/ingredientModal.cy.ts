import { email, password } from '../../fixtures/auth/loginRequest.json'
import { ingredients } from '../../fixtures/homepage/orderRequest.json'

describe('Test on open ingredient modal', function () {
  beforeEach(function () {
    // Visit Homepage
    cy.visit('')

    // Get ingredients
    cy.get('li[class^=ingredient_ingredient]').as('ingredients')
    cy.get('@ingredients').first().as('bun')
    cy.get('@ingredients').eq(3).as('ingredient')

    // Get plugs
    cy.get('[class^=burgerConstructor_plugWrapper]').as('plugs')

    // Get Drop zone
    cy.get('[class^=burgerConstructor_burgerConstructor]').as('dropTarget')
  })

  it('should find ingredients on the page', function () {
    cy.get('@ingredients').should('have.length.at.least', 3)
  })

  it('should open modal, check content and then close it', function () {
    // Open ingredient details modal
    cy.get('@ingredients').first().click()

    // Check existing of ingredient info
    cy.get('h3[class="text text_type_main-medium pl-10"]').should('exist')
    cy.get('p[class^=ingredientDetails_name]').should(
      'have.text',
      'Краторная булка N-200i',
    )
    cy.get('span[class^=ingredientDetails_ingredientDetails__value]').as(
      'nutrients',
    )
    cy.get('@nutrients').first().should('contain', 420)
    cy.get('@nutrients').last().should('contain', 53)
    cy.get('[class^=modal_button]').click()
  })

  it('should test dnd and order functionality', function () {
    // Check for plugs
    cy.get('@plugs').should('have.length', 3)
    cy.get('@plugs').first().contains('добавьте булку')
    cy.get('@plugs').eq(1).contains('добавьте ингредиенты')
    cy.get('@plugs').last().contains('добавьте булку')

    // DnD bun
    cy.get('@bun').drag('@dropTarget')

    // Check for bun in constructor
    cy.get('@plugs').should('exist').and('have.length', 3)
    cy.get('span[class=constructor-element__text]')
      .first()
      .contains('Краторная булка N-200i')

    // DnD ingredient
    cy.get('@ingredient').drag('@dropTarget')

    // Check for ingredient in constructor
    cy.get('span[class=constructor-element__text]')
      .eq(1)
      .contains('Соус фирменный Space Sauce')

    // Check for order functionality
    cy.get('button').contains('Оформить заказ').click()

    // Filling the form
    cy.get('[name=email]').type(`${email}`)
    cy.get('[name=password]').type(`${password}{enter}`)

    // Interception of requests
    cy.intercept('POST', 'api/auth/login', {
      fixture: 'auth/userResponse.json',
    }).as('loginRequest')

    // Click after login
    cy.get('button').contains('Оформить заказ').click()

    // Interception of the order and test its body
    cy.intercept('POST', 'api/orders', {
      fixture: 'homepage/orderResponse.json',
    }).as('orderRequest')

    cy.wait('@orderRequest')
      .its('request.body')
      .should('deep.equal', { ingredients })

    // Checking order modal
    cy.get('p[class^=orderDetails_orderNumber]').contains('1337')
    cy.get('p[class="text text_type_main-medium mb-15"]').contains(
      'Test burger name',
    )

    // Test for close modal
    cy.get('[class^=modal_button]').click()
  })
})
