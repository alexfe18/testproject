describe("Registration tests", () => {
  it("should register a new user successfully", () => {
    cy.visit("/register");
    cy.get('input[name="name"]').type("Alex");
    cy.get('input[name="lastname"]').type("Fe");
    cy.get('input[name="email"]').type(`alex_fe+${Date.now()}@mail.com`);
    cy.get('input[name="password"]').type("VeryStrongPass12345!", {
      sensitive: true,
    });
    cy.get('input[name="password_repeat"]').type("VeryStrongPass12345!", {
      sensitive: true,
    });
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("should show error for empty required fields", () => {
    cy.visit("/register");
    cy.get('button[type="submit"]').click();
    cy.get(".error").should("contain", "Name is required");
    cy.get(".error").should("contain", "Last name is required");
    cy.get(".error").should("contain", "Email required");
    cy.get(".error").should("contain", "Password required");
  });
});
