import LoginPage from "../pages/LoginPage";

describe("Login Page Tests", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it("should login successfully with standard_user", () => {
    loginPage.enterUsername("standard_user");
    loginPage.enterPassword("secret_sauce");
    loginPage.submit();
    cy.url().should("include", "/inventory.html");
  });

  it("should show an error for incorrect password", () => {
    loginPage.enterUsername("standard_user");
    loginPage.enterPassword("wrong_password");
    loginPage.submit();
    cy.get(".error-message-container").should(
      "contain",
      "Message: Username and password do not match"
    );
  });

  it("should show an error for locked out user", () => {
    loginPage.enterUsername("locked_out_user");
    loginPage.enterPassword("secret_sauce");
    loginPage.submit();
    cy.get(".error-message-container").should(
      "contain",
      "Message: Sorry, this user has been locked out."
    );
  });

  it("should show an error for missing password", () => {
    loginPage.enterUsername("standard_user");
    loginPage.submit();
    cy.get(".error-message-container").should(
      "contain",
      "Message: Password is required"
    );
  });

  it("should show an error for missing username", () => {
    loginPage.enterPassword("secret_sauce");
    loginPage.submit();
    cy.get(".error-message-container").should(
      "contain",
      "Message: Username is required"
    );
  });
});
