describe("Login", () => {

  beforeEach(() => {
    cy.visit("/login");
  });

  it("Login com sucesso", () => {
    cy.get('#user').type('tatiane@teste.com');
    cy.get('#password').type('123456');
    cy.get('#btnLogin').click();
    cy.get('#swal2-title').should('have.text', 'Login realizado');
  });
  
  it("Login com senha inválida", () => {
    cy.get('#user').type('tatiane@teste.com');
    cy.get('#password').type('12345');
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('have.text', 'Senha inválida.');
  });

   it("Login com senha vazia", () => {
    cy.get('#user').type('tatiane@teste.com');
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('have.text', 'Senha inválida.');
  });

   it("Login com e-mail vazio", () => {
    cy.get('#password').type('123456');
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
  });
});