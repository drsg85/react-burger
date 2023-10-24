import { email, password } from '../../fixtures/auth/loginRequest.json'

describe('Login test', function () {
  beforeEach(function () {
    // Interception of requests
    cy.intercept('POST', 'api/auth/login', {
      fixture: 'auth/userResponse.json',
    }).as('loginRequest')
    cy.intercept('GET', 'api/auth/user', { fixture: 'auth/loginResponse.json' })

    // Go to Profile page
    cy.visit('profile')

    // Getting login form inputs
    cy.get('[name=email]').as('email')
    cy.get('[name=password]').as('password')

    // Filling the form
    cy.get('@email').type(`${email}{enter}`)
    cy.get('@password').type(`${password}{enter}`)
  })

  it('should login and show profile info', function () {
    cy.wait('@loginRequest').its('request.body')
    cy.get('@email').should('have.value', email)
  })

  it('should logout', function () {
    cy.get('button').contains('Выход').click()

    cy.intercept('POST', 'api/auth/logout', {
      fixture: 'auth/logoutResponse.json',
    }).as('logoutResponse')

    cy.wait('@logoutResponse')

    cy.get('[class^=login_form]').should('exist')
  })
})
