describe('how to brew', () => {
  it('renders the content', () => {
    cy.visit('http://localhost:3000/how-to-brew');

    cy.contains('How to get Started Brewing your own Beer').should('be.visible');

    cy.contains('Understanding the Basics').should('be.visible');

    cy.contains("To begin brewing, you'll need some basic equipment. This includes a fermenter, brew kettle, airlock, hydrometer, thermometer, and sanitizing solution. These tools are essential for a successful brewing experience and can be found at local brewing supply stores or online.").should('be.visible');
  })

  it('the links work', () => {
    cy.visit('http://localhost:3000/how-to-brew');

    cy.origin('https://www.homebrewersassociation.org', () => {
      cy.on('uncaught:exception', (e) => {
        if (e.message.includes('dataLayer is not defined')) {
          return false;
        }
      });
    });

    cy.contains('Find the specific equipment needed here').click();
  })
})