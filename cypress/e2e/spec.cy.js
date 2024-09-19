/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach('Visit', () => {
    cy.visit('https://automationpratice.com.br/')
  })

  it('Login sem email', () => {
    cy.get('.right_list_fix > :nth-child(1) > a').click()
    cy.get('#password.form-control').type('12345678')
    cy.get('#btnLogin').click()
    cy.get('span.invalid_input').should('be.visible')
      .should('have.text', 'E-mail inválido.')
  })

  it('Login sem a senha', () => {
    cy.get('.right_list_fix > :nth-child(1) > a').click()
    cy.get('#user.form-control').type('jose@gmail.com')
    cy.get('#btnLogin').click()
    cy.get('span.invalid_input').should('be.visible')
      .should('have.text', 'Senha inválida.')
  })

  it('Login', () => {
    cy.get('.right_list_fix > :nth-child(1) > a').click()
    cy.get('#user.form-control').type('jose@gmail.com')
    cy.get('#password.form-control').type('12345678')
    cy.get('#btnLogin').click()
    cy.get('#swal2-title.swal2-title').should('be.visible')
      .should('have.text', 'Login realizado')
  })






})