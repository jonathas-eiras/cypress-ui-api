

describe('Login', () => {
    it('Successfully', () => {

        cy.login(Cypress.env('user_name'), Cypress.env('user_password'))    

        cy.url().should('include', '/inventory.html')
        cy.get('[data-test="header-container"]').should('be.visible')
        cy.get('[data-test="title"]').should('have.text', 'Products')
    })

    it('CredentialsError', () => {

        cy.login(Cypress.env('user_name'), "invalid_password")

        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })
})