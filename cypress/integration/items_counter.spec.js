describe('Items Counter should be able to update', function() {
    beforeEach(() => {
        cy.visit('/')
    })

    it('verify if the number of items is shown correctly', function() {
        
        cy.get('[data-cy=plus-button]').click({multiple: true})
        
        cy.get('[data-cy=items-counter]').should('contain', '4')

        cy.get('[data-cy=minus-button]').click({multiple: true})
        
        cy.get('[data-cy=items-counter]').should('contain', '0')

        cy.get('[data-cy=plus-button]').dblclick({multiple: true})

        cy.get('[data-cy=items-counter]').should('contain', '4')

        cy.get('[data-cy=reset-button]').click()

        cy.get('[data-cy=items-counter]').should('contain', '0')
    })
})