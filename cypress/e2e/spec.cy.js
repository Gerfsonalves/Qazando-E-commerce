/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach('Visit', () => {
    cy.visit('https://automationpratice.com.br/')
  })


  it('Cadastro', () => {
    cy.get('.right_list_fix > :nth-child(2) > a').click()
    cy.get('#user').type('José silva')
    cy.get('#email').type('jose@gmail.com')
    cy.get('#password').type('12345678')
    cy.get('#btnRegister').click()
    cy.get('#swal2-title').should('be.visible')
      .should('have.text', 'Cadastro realizado!')
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

  it('Navegação no menu icon', () => {
    cy.get(':nth-child(4) > .offcanvas-toggle > .fa').click()
    cy.get(':nth-child(2) > #menuShopMenu').click()
    cy.get(':nth-child(2) > :nth-child(1) > .mobile-sub-menu > :nth-child(1) > a').click()

    cy.get(':nth-child(4) > .offcanvas-toggle > .fa').click()
    cy.get(':nth-child(2) > #menuShopMenu').click()
    cy.get(':nth-child(2) > :nth-child(1) > .mobile-sub-menu > :nth-child(2) > a').click()

    cy.get(':nth-child(4) > .offcanvas-toggle > .fa').click()
    cy.get(':nth-child(2) > #menuShopMenu').click()
    cy.get(':nth-child(2) > :nth-child(1) > .mobile-sub-menu > :nth-child(3) > a').click()

    cy.get(':nth-child(4) > .offcanvas-toggle > .fa').click()
    cy.get(':nth-child(2) > #menuShopMenu').click()
    cy.get(':nth-child(2) > :nth-child(1) > .mobile-sub-menu > :nth-child(4) > a').click()

    cy.get(':nth-child(4) > .offcanvas-toggle > .fa').click()
    cy.get(':nth-child(2) > #menuShopMenu').click()
    cy.get(':nth-child(2) > :nth-child(1) > .mobile-sub-menu > :nth-child(5) > a').click()

    cy.get('.logo > img').should('be.visible')
  })

  it('Pesquisa de produto', () => {
    cy.get(':nth-child(1) > .search_width > img').click()
    cy.get('form > input').type("Skate Dress")
    cy.get('.btn').click()
    cy.get('#swal2-title').should('be.visible')
  })

  it('Adicionar e verificar carrinho', () => {
    cy.get(':nth-child(4) > .offcanvas-toggle > .fa').click()
    cy.get(':nth-child(2) > #menuShopMenu').click()
    cy.get(':nth-child(2) > :nth-child(1) > .mobile-sub-menu > :nth-child(1) > a').click()
    cy.get(':nth-child(1) > .product_wrappers_one > .thumb > .image > .hover-image').click()
    cy.get('.links_Product_areas > .theme-btn-one').click()
    cy.get('#swal2-title').should('be.visible')
    cy.wait(2000)
    cy.get(':nth-child(3) > .offcanvas-toggle').click()
    cy.contains('Shopping Cart').should('be.visible');

  })

})