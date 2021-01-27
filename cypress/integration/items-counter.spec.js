describe('Items Counter should be able to update', function() {
    beforeEach(() => {
        cy.visit('/')
    })

    it('verify if the number of items is shown correctly', function() {
        cy.get('[data-cy=plus-button]')
            .each(($el) => {
                cy.get($el).click({multiple: true})
        })
        
        cy.get('[data-cy=items-counter]')
            .should('contain', '4')

        cy.get('[data-cy=minus-button]')
        .each(($el) => {
            cy.get($el).click({multiple: true})
        })

        cy.get('[data-cy=items-counter]')
            .should('contain', '0')

    })

})