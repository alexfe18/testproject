class LoginPage {
  visit() {
    cy.visit("/");
  }

  enterUsername(username) {
    cy.get("#user-name").type(username);
  }

  enterPassword(password) {
    cy.get("#password").type(password);
  }

  submit() {
    cy.get("#login-button").click();
  }
}

export default LoginPage;
