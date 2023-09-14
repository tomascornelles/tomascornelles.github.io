describe('G003 - Footer links', () => {
  it('Cookies link', () => {
    cy.visit('http://localhost:8080');
    cy.get('tc-footer section:last-child a').eq(0).click();
    cy.location('pathname').should('eq', '/politica-de-cookies/');
  });

  it('Privacidad link', () => {
    cy.visit('http://localhost:8080');
    cy.get('tc-footer section:last-child a').eq(1).click();
    cy.location('pathname').should('eq', '/politica-de-privacidad/');
  });
 })
