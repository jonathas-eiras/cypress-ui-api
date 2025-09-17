


const url = Cypress.config('baseApiUrl')


Cypress.Commands.add("createBooking", (booking) => {
    cy.request({
        method: 'POST',
        url: `${url}/booking`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            firstname: booking.firstname,
            lastname: booking.lastname,
            totalprice: booking.totalprice,
            depositpaid: booking.depositpaid,
            bookingdates: {
                checkin: booking.bookingdates.checkin,
                checkout: booking.bookingdates.checkout
            },
            additionalneeds: booking.additionalneeds
        }
    }).as('responseCreateBooking')

})

Cypress.Commands.add("getBookingByFirstName", (firstName) => {

    cy.request({
        method: 'GET',
        url: `${url}/booking`,
        qs: {
            firstname: firstName
        }
    })

})

Cypress.Commands.add("deleteBooking", (bookingId, authToken) => {

    cy.request({
        method: 'DELETE',
        url: `${url}/booking/${bookingId}`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${authToken}`
        }
    })

})

Cypress.Commands.add('getAuthToken', () => {
    cy.request({
        method: 'POST',
        url: `${url}/auth`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            username: 'admin',
            password: 'password123'
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('token')

        cy.wrap(response.body.token).as('authToken')
    })

})