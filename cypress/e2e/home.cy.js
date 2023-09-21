describe('G003 - Home', () => {
  it('Post title', () => {
    cy.visit('http://localhost:8080');
    cy.get('#blog h2 a').click();
  });

  it('Post read more', () => {
    cy.visit('http://localhost:8080');
    cy.contains('Seguir leyendo').click();
  });

  it('Blog link', () => {
    cy.visit('http://localhost:8080');
    cy.contains('Leer mas articulos en el blog').click();
  });
})
