describe('G002 - Header links', () => {
  it('Logo link', () => {
    cy.visit('http://localhost:8080/blog');
    cy.get('header > a').click();
    cy.location('pathname').should('eq', '/');
  });
  
  it('About link', () => {
    cy.visit('http://localhost:8080/blog');
    cy.contains('inicio').click({force: true});
    cy.location('pathname').should('eq', '/');
  });
  
  it('Blog link', () => {
    cy.visit('http://localhost:8080');
    cy.contains('blog').click({force: true});
    cy.location('pathname').should('eq', '/blog/');
  });
  
  it('Contact link', () => {
    cy.visit('http://localhost:8080');
    cy.contains('¿hablamos?').click({force: true});
    cy.contains('¿Hablamos?').should('be.visible');
  });
})
