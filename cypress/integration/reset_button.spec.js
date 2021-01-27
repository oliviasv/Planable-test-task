describe('Reset Button should refresh all items', function()  {
    beforeEach(() => {
        cy.visit('/')
    })

    it('reset all items that have been incremented', function() {
        
        let num1 = Math.floor(Math.random() * 10) 

        for(let n = 0; n < num1; n++) {
            cy.get('[data-cy=plus-button]').click({multiple: true})
        }

        cy.get('[data-cy=reset-button]').click()
        
        cy.get('[data-cy=badge-value]').should('contain', 'Zero')    
    })
})