


const url = Cypress.config('baseUrl')

Cypress.Commands.add("login", (user_name, user_password) => {

    cy.visit(url)
    cy.get('[data-test="username"]').type(user_name, { log: false }).should('be.visible')
    cy.get('[data-test="password"]').type(user_password, { log: false }).should('be.visible')
    cy.get('[data-test="login-button"]').click()

})

Cypress.Commands.add("addItems", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible').click()
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2')
})

Cypress.Commands.add("acessCart", () => {
    cy.get('[data-test="shopping-cart-link"]').should('be.visible').click()
    cy.get('[data-test="cart-list"]').should('be.visible')
})

Cypress.Commands.add("logout", () => {
    cy.get('#react-burger-menu-btn').should('be.visible').click()
    cy.get('[data-test="logout-sidebar-link"]').should('have.css', 'display', 'block').click()
    cy.url().should('include', '/')
    cy.get('[data-test="login-container"]').should('be.visible')
    cy.get('[data-test="login-container"]').should('be.visible')
})