describe("Cash", () => {
  it("Validar o fluxo sequencial completo de contagem e o cálculo final correto", () => {
    cy.visit("http://localhost:4000/");
    cy.get("[name=login]").click().type("axel.araujo");
    cy.get("[name=senha]").click().type("123456");
    cy.contains("button", "Entrar").click();
    cy.contains("button", "Contagem").click();
    Cypress._.times(12, () => {
      cy.get("#quantidade").click().clear().type("1");
      cy.contains("button", "Confirmar e Próximo").click();
    });
    cy.contains("Total em dinheiro: R$ 388.90").should("be.visible");
  });
});
