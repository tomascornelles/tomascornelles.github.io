describe('G001 - Baseline', () => {
  it('Load home', () => {
    cy.visit('http://localhost:8080')
  })

  it('Load blog', () => {
    cy.visit('http://localhost:8080/blog')
  })

  it('Load 404', () => {
    cy.visit('http://localhost:8080/404')
  })
})
