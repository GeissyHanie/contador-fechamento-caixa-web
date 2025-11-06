describe("Review", () => {
  it("Validar que as funcionalidades de Revisão, Edição e Recálculo do Total em dinheiro estão funcionando corretamente", () => {
    cy.visit("http://localhost:4000/");
    cy.get("[name=login]").click().type("axel.araujo");
    cy.get("[name=senha]").click().type("123456");
    cy.contains("button", "Entrar").click();
    cy.contains("button", "Contagem").click();
    Cypress._.times(12, () => {
      cy.get("#quantidade").click().clear().type("1");
      cy.contains("button", "Confirmar e Próximo").click();
    });
    cy.contains("button", "Revisar").click();
    cy.get(".edit-qtd").first().as("campo200").click().clear().type("2");
    cy.contains("button", "Recalcular Total").click();
    cy.contains("Total em dinheiro: R$ 588.90").should("be.visible");
  });
});
