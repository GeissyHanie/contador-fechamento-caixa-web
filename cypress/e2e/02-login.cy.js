describe("Login", () => {
  it("Validar que não é possível acessar o sistema sem usuário cadastrado", () => {
    cy.visit("http://localhost:4000/");
    cy.get("[name=login]").click().type("gezilene.araujo");
    cy.get("[name=senha]").click().type("123456");
    cy.contains("button", "Entrar").click();
    cy.contains("Credenciais inválidas").should("be.visible");
  });
  it("Validar é possível acessar o sistema com usuário cadastrado", () => {
    cy.visit("http://localhost:4000/");
    cy.get("[name=login]").click().type("axel.araujo");
    cy.get("[name=senha]").click().type("123456");
    cy.contains("button", "Entrar").click();
    cy.contains("Menu").should("be.visible");
  });
});
