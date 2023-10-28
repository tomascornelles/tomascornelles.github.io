describe('G002 - Header links', () => {
  it('Logo link', () => {
    cy.visit('http://localhost:8080/blog');
    cy.get('header > a').click();
    cy.location('pathname').should('eq', '/');
  });
  
  it('About link', () => {
    cy.visit('http://localhost:8080/blog');
    cy.get('header summary').click();
    cy.contains('hola').click();
    cy.location('pathname').should('eq', '/');
  });
  
  it('Blog link', () => {
    cy.visit('http://localhost:8080');
    cy.get('header summary').click();
    cy.contains('blog').click();
    cy.location('pathname').should('eq', '/blog/');
  });
  
  it('Contact link', () => {
    cy.visit('http://localhost:8080');
    cy.get('header summary').click();
    cy.contains('¿hablamos?').click();
    cy.get('#hablamos').should('be.visible');
  });
})
