

describe('Logout', () => {
        beforeEach(() => { 
        cy.login(Cypress.env('user_name'), Cypress.env('user_password'))
    })
    
    it('Successfully', () => {

        cy.logout()

    })
})