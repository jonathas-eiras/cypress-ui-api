

describe('Cart items', () => {

    beforeEach(() => {
        cy.login(Cypress.env('user_name'), Cypress.env('user_password'))
    })

    it('Add items', () => {

        cy.addItems()
        cy.acessCart()  
        cy.get('[data-test="cart-list"]').should('contain', 'Sauce Labs Backpack')
        cy.get('[data-test="cart-list"]').should('contain', 'Sauce Labs Bike Light')

    
    })
    it('Remove items', () => { 

        cy.addItems()
         cy.acessCart()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible').click()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')

    })
})