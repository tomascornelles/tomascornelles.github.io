describe('G001 - Baseline', () => {
  it('Load home', () => {
    cy.visit('http://localhost:3000')
  })

  it('Load 404', () => {
    cy.visit('http://localhost:8080/404')
  })
})
