describe('Tests Navbar', function() {
    it('The navbar is loaded correctly', function() {
        cy.visit('/');
        cy.get("nav").should("have.class", "bg-light");
        cy.get(".fa-shopping-cart").should("be.visible");
        cy.get(".badge-pill").should("be.visible");
        cy.contains("Items");
    })
})