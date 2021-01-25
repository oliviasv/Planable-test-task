describe('Test Counter App main page', function() {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Verify if there are 0 items when the app is loaded', function() {
        cy.get('.badge-info').should('contain', '0')  
    })

    it('Test each individual counter', function() {
        cy.get('div > .row').each(() => {
            cy.get('.badge-warning').should('contain', 'Zero')    
        })

        cy.get('.btn-secondary').click({multiple: true})
        //   .each(($div, index, $divs) => {})
          .then(($divs) => {
            expect($divs).to.have.length(4)         
        }) 
        
        cy.get('div > .row').each(() => {
            cy.get('.badge-primary').should('contain', '1')
        })


        cy.get('.btn-info').click({multiple: true})
        //   .each(($div, index, $divs) => {})
          .then(($divs) => {
            expect($divs).to.have.length(4)
        }) 
      
        cy.get('div > .row').each(() => {
            cy.get('.badge-warning').should('contain', 'Zero')    
        })
    })

})