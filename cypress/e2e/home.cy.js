describe('G003 - Home', () => {
  it('Post title', () => {
    cy.visit('http://localhost:8080');
    cy.get('#blog h2 a').click({force: true});
  });

  it('Post read more', () => {
    cy.visit('http://localhost:8080');
    cy.contains('Continúa leyendo').click({force: true});
  });

  it('Blog link', () => {
    cy.visit('http://localhost:8080');
    cy.contains('Leer más artículos en el blog').click({force: true});
  });
})
