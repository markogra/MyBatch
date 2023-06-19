// must have the stout recipe found in server/models/recipes.json in the ourRecipes database

describe('ingredients', () => {
  it('renders all the content on the page', () => {
    cy.visit('http://localhost:3000/');

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

  it('should add, save and delete ingredients', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('Inventory').click();

    cy.get('.hops-dd').select('Fuggle');

    cy.get('input').first().type('3');

    cy.contains('Add').click();

    cy.reload();

    cy.contains('Fuggle 3').should('be.visible');

    cy.get('.deleteButton').first().click();

    cy.contains('Fuggle 3').should('not.exist');
  })
})