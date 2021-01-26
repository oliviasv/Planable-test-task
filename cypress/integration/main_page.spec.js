describe('Test Counter App main page', function() {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Verify if there are 0 items when the app is loaded', function() {
        cy.get('[data-cy=items-counter]').should('contain', '0')  
    })

    it('Test each individual counter', function() {
        cy.get('[data-cy=individual-counter]').each(() => {
            cy.get('[data-cy=badge-value]').should('contain', 'Zero')    
        })

        let num = Math.floor(Math.random() * 10) 

        for(let n = 0; n < num; n++) {
            cy.get('[data-cy=plus-button]').click({multiple: true})
        //   .each(($div, index, $divs) => {})
            .then(($divs) => {
                expect($divs).to.have.length(4)        
            })  
        }
        
        cy.get('[data-cy=individual-counter]').each(() => {
            cy.get('[data-cy=badge-value]').should('contain', num)
        })

        for(let n = 0; n < num; n++) {
            cy.get('[data-cy=minus-button]').click({multiple: true})
            //   .each(($div, index, $divs) => {})
              .then(($divs) => {
                expect($divs).to.have.length(4)
            })          
        }
 
        cy.get('[data-cy=individual-counter]').each(() => {
            cy.get('[data-cy=badge-value]').should('contain', 'Zero')    
        })
    })

})