describe('My First Real Test', function() {
    it('Visits the Counter App', function() {
        cy.visit('http://localhost:3001/')

        cy.pause()

        cy.contains('Items')
    })
})