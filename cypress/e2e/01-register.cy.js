describe("Register", () => {
  it("Validar que é possível cadastrar um novo usuário", () => {
    cy.visit("http://localhost:4000/");
    cy.contains("a", "Cadastrar-se").click();
    cy.get("[name=login]").click().type("axel.araujo");
    cy.get("[name=senha]").click().type("123456");
    cy.contains("button", "Cadastrar").click();
  });
  it("Validar que não é possível cadastrar um usuário já existente no sistema", () => {
    cy.visit("http://localhost:4000/");
    cy.contains("a", "Cadastrar-se").click();
    cy.get("[name=login]").click().type("axel.araujo");
    cy.get("[name=senha]").click().type("123456");
    cy.contains("button", "Cadastrar").click();
    cy.contains("Usuário já existe").should("be.visible");
  });
});

