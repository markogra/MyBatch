describe('ingredients', () => {
  it('renders all the content on the page', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('Welcome to MyBatch Home Page').should('be.visible');

    cy.contains('Inventory').click();

    cy.contains('Your Inventory').should('be.visible');

    cy.contains('Hops').should('be.visible');
    cy.contains('Malts').should('be.visible');
    cy.contains('Yeast').should('be.visible');
    cy.contains('Additional Ingredients').should('be.visible');
    
    cy.get('.hops-dd').should('exist');
    cy.get('.yourmalts').should('exist');
    cy.get('.youryeast').should('exist');
    cy.get('.yourAdditions').should('exist');

    cy.get('input').should('have.length', 4);

    cy.contains('Add').should('be.visible')
  })
})