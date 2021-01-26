describe('Reset Button', function()  {
    beforeEach(() => {
        cy.visit('/')
    })

    it('all counters returned to Zero on click', function() {
        let num1 = Math.floor(Math.random() * 10) 

        for(let n = 0; n < num1; n++) {
            cy.get('[data-cy=plus-button]').click({multiple: true})
        //   .each(($div, index, $divs) => {})
            .then(($divs) => {
                expect($divs).to.have.length(4)        
            })  
        }

        cy.get('[data-cy=reset-button]').click()
        cy.get('[data-cy=individual-counter]').each(() => {
            cy.get('[data-cy=badge-value]').should('contain', 'Zero')    
        })
    })
})