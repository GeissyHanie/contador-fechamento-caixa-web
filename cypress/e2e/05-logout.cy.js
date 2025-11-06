describe("Login", () => {
  it("Validar que ao clicar no botão logout eu retorno a tela de login", () => {
    cy.visit("http://localhost:4000/");
    cy.get("[name=login]").click().type("axel.araujo");
    cy.get("[name=senha]").click().type("123456");
    cy.contains("button", "Entrar").click();
    cy.contains("button", "Logout").click();        
    cy.contains("button", "Entrar").should("be.visible");
  });
});
