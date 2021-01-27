describe('Test Recycle Button', function() {
    beforeEach(() => {
        cy.visit('/')
    })

    it('view all items again when when they a all deleted', function() {
        cy.get('[data-cy=delete-button]')
            .each(($el) => {
                cy.get($el).click({multiple: true})
        })

        cy.get('[data-cy=recycle-button]').click()
        
        cy.get('[data-cy=individual-counter]').should('be.visible')

        cy.get('[data-cy=badge-value]').should('contain', 'Zero')
    })
})