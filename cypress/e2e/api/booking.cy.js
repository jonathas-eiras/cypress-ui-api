

describe('Booking', () => {


    beforeEach(() => {

        cy.getAuthToken()

        const booking = {
            firstname: "Jim",
            lastname: "Brown",
            totalprice: 111,
            depositpaid: true,
            bookingdates: {
                checkin: "2025-12-01",
                checkout: "2026-01-01"
            },
            additionalneeds: "Breakfast"
        }
        cy.createBooking(booking)
    })


    it('Validate create booking', () => {

        cy.get('@responseCreateBooking').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('bookingid')
            expect(response.body).to.have.property('booking')
        })

    })
    it('Find booking by firstname', () => {


        cy.get('@responseCreateBooking').then((response) => {
            const firstname = response.body.booking.firstname
            const bookingid = response.body.bookingid

            cy.getBookingByFirstName(firstname).then((response) => {
                expect(response.status).to.eq(200)
                const ids = response.body.map(booking => booking.bookingid)
                expect(ids).to.include(bookingid)

            })
        })
    })

    it('Delete booking by id', () => {


        cy.get('@authToken').then((token) => {
            cy.get('@responseCreateBooking').then((response) => {
                const bookingid = response.body.bookingid
                cy.deleteBooking(bookingid, token).then((response) => {

                    expect(response.status).to.eq(201)

                })
            })

        })
    })
})