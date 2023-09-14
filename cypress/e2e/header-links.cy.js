describe('G002 - Header links', () => {
  it('Logo link', () => {
    cy.visit('http://localhost:8080/blog');
    cy.get('tc-menu section > a').click();
    cy.location('pathname').should('eq', '/');
  });
  
  it('About link', () => {
    cy.visit('http://localhost:8080/blog');
    cy.contains('sobre mi').click({force: true});
    cy.location('pathname').should('eq', '/');
  });
  
  it('Blog link', () => {
    cy.visit('http://localhost:8080');
    cy.contains('blog').click({force: true});
    cy.location('pathname').should('eq', '/blog/');
  });
  
  it('Contact link', () => {
    cy.visit('http://localhost:8080');
    // cy.contains('contacto').click({force: true});
    cy.contains('Contáctame').should('be.visible');
  });
})
