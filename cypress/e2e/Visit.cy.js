describe('Full app test', () => {
  it('works as intended', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('Welcome to MyBatch Home Page').should('be.visible');

    cy.contains('Inventory').click();

    cy.get('.hops-dd').select('Fuggle');

    cy.get('input').first().type('3');

    cy.contains('Add').click();

    cy.reload();

    cy.contains('Fuggle 3').should('be.visible');

    cy.get('.deleteButton').first().click();

    cy.contains('Fuggle 3').should('not.exist');

    cy.contains('Our recipes').click();

    cy.contains('Stout').click();

    cy.contains('Recipe instructions').should('be.visible');

    cy.contains('My recipes').click();
  });
});
