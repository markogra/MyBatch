describe('homepage', () => {
  it('renders all the content on the homepage', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('Welcome to MyBatch Home Page').should('be.visible');

    cy.contains('MyBatch is your ultimate homebrewing companion, designed to assist homebrewers with crafting their perfect brews and managing their ingredient stock.').should('be.visible');
   
    cy.contains('Explore a vast collection of recipes sourced from experienced homebrewers worldwide or create your own unique recipes from scratch. With MyBatch, the recipe creation process is simplified and streamlined.').should('be.visible');
   
    cy.contains("Unlock your creativity with MyBatch's intuitive interface, where you can experiment with different beer styles, customize instructions, and fine-tune ingredient quantities to achieve the desired flavors and aromas.").should('be.visible');
  })
})