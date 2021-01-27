describe('Test Recycle Button', function() {
    beforeEach(() => {
        cy.visit('/')
    })

    it('delete all items then click recycle to view all items again', function() {
        
        cy.get('[data-cy=delete-button]').click({multiple: true})

        // cy.get('[data-cy=individual-counter]').should('not.be.visible')

        cy.get('[data-cy=recycle-button]').click()
        
        cy.get('[data-cy=individual-counter]').should('be.visible')

        cy.get('[data-cy=badge-value]').should('contain', 'Zero')
    })
})