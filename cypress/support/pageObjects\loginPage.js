class LoginPage {
  visit() {
    cy.visit("/login");
  }
  enterUsername(username) {
    cy.get("#username").type(username);
  }
  enterPassword(password) {
    cy.get("#password").type(password);
  }
  clickLogin() {
    cy.get("#loginButton").click();
  }
  isDashboardVisible() {
    cy.get("#dashboard").should("be.visible");
  }
}
export default LoginPage;
