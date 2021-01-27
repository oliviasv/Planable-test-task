describe('Test each individual counter', function() {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Counters should increment and decrement', function() {
        cy.get('[data-cy=individual-counter]')
            .each(() => {
                cy.get('[data-cy=badge-value]')
                    .should('contain', 'Zero')    
        })

        let num = Math.floor(Math.random() * 10) 

        for(let n = 0; n < num; n++) {
            cy.get('[data-cy=plus-button]')
                .click({multiple: true})
            //   .each(($div, index, $divs) => {})
            // .then(($divs) => {
            //     expect($divs).to.have.length(4)        
            // })  
        }
        
        cy.get('[data-cy=individual-counter]')
            .each(() => {
                cy.get('[data-cy=badge-value]')
                    .should('contain', num)
        })

        for(let n = 0; n < num; n++) {
            cy.get('[data-cy=minus-button]')
                .click({multiple: true})
            //   .each(($div, index, $divs) => {})
            //   .then(($divs) => {
            //     expect($divs).to.have.length(4)
            // })          
        }
 
        cy.get('[data-cy=individual-counter]')
            .each(() => {
            cy.get('[data-cy=badge-value]')
                .should('contain', 'Zero')    
        })
    })

})