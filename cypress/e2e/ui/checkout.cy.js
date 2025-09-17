

describe('Checkout', () => {

    beforeEach(() => {
        cy.login(Cypress.env('user_name'), Cypress.env('user_password'))
        cy.addItems()
        cy.acessCart()
    })

    it('Successfully', () => {

        
        cy.get('[data-test="checkout"]').should('be.visible').click()
        cy.get('[data-test="firstName"]').type('Samuel').should('be.visible')
        cy.get('[data-test="lastName"]').type('Jackson').should('be.visible')
        cy.get('[data-test="postalCode"]').type('12345').should('be.visible')
        cy.get('[data-test="continue"]').should('be.visible').click()
        cy.get('[data-test="finish"]').should('be.visible').click()

        cy.get('[data-test="checkout-complete-container"]').should('be.visible')
        cy.get('[data-test="pony-express"]').should('be.visible')
    
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
        cy.get('[data-test="complete-text"]').should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        cy.get('[data-test="back-to-products"]').should('be.visible').click()

    
    })
})