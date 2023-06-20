// must have the stout recipe found in server/models/recipes.json in the ourRecipes database

describe('template spec', () => {
  it('render the content on the page', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('My recipes').click();

    cy.contains('Release creativity, create your own recipe').should('be.visible');

    cy.contains('Name').should('be.visible');

    cy.contains('Beer Style').should('be.visible');

    cy.contains('Add Your Instructions here').should('be.visible');

    cy.contains('Details').should('be.visible');

    cy.contains('Ingredients').should('be.visible');

    cy.contains('Hops').should('be.visible');
    cy.contains('Malts').should('be.visible');
    cy.contains('Yeas').should('be.visible');

    cy.contains('Qty').should('be.visible');

    cy.contains('Your recipe list').should('be.visible');
  })

  it('should be able to add recipes', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('My recipes').click();

    cy.get('input[type="text"]').eq(0).type('pale ale')
    cy.get('input[type="text"]').eq(1).type('ale')

    cy.get('textarea').type('this is where the instructions go')

    // cy.get('select').eq(0).select('Option 1')
    // cy.get('select').eq(1).select('Option 1')
    // cy.get('select').eq(2).select('Option 1')

    cy.get('input[type="text"]').eq(2).type(1)
    cy.get('input[type="text"]').eq(3).type(2)
    cy.get('input[type="text"]').eq(4).type(3) 

    cy.get('button[type="submit"]').click()
  })
})