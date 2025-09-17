

describe('Products list', () => {

     beforeEach(() => {
        cy.login(Cypress.env('user_name'), Cypress.env('user_password'))
        cy.get('[data-test="inventory-list"]').should('be.visible')
    })

    it('Sort products', () => {

        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')

        cy.get('[data-test="inventory-item-price"]').first().invoke('text').then((priceFirstProduct) => {
            const firstPrice = parseFloat(priceFirstProduct.replace('$', ''))

            cy.get('[data-test="inventory-item-price"]').last().invoke('text').then((priceLastProduct) => {
                const lastPrice = parseFloat(priceLastProduct.replace('$', ''))
                expect(firstPrice).to.be.lessThan(lastPrice)
            })

        })
    })
})