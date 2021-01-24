describe('Test Counter App main page', function() {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Verify if there are 0 items when the app is loaded', function() {
        cy.get('.badge-info').should('contain', '0')
        // cy.get('.btn-secondary').first().click()
        // cy.get('.badge-info').should('contain', '1')
    })

    it('Test if each individual counter have the Zero value', function() {
        cy.get('div > .row').each( function() {
            cy.get('.badge-warning').should('contain', 'Zero');
        })
    })

    it('The value increases by 1 when plus button is clicked', function() {
        cy.get('.col-md-1 > span').then(($span) => {
            const num1 = parseFloat($span.text())

            cy.get('.btn-secondary').first().click().then( () => {
                const num2 = parseFloat($span.text())

            expect(num2).to.eq(num1 + 1)
            })
        })
    })

    it('The value deccreases by 1 when minus button is clicked', function() {
        cy.get('.col-md-1 > span').then(($span) => {
            const num1 = parseFloat($span.text())

            cy.get('.btn-info').first().click().then( () => {
                const num2 = parseFloat($span.text())

            expect(num2).to.eq(num1 - 1)
            })
        })
    })

    it('Verify the delete button', function() {
        cy.get('.btn-danger').first().click()
        cy.get('.row').should('not.be.visible')
    })
})