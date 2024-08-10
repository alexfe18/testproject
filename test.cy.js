describe("Header and Footer Elements on QAuto", () => {
  beforeEach(() => {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
  });

  it("Should verify all elements in the header", () => {
    cy.get("a.header_logo").should("be.visible");

    cy.get('nav.header_nav a[href="/"]').contains("Home").should("be.visible");

    cy.get("nav.header_nav button").contains("About").should("be.visible");

    cy.get("nav.header_nav button").contains("Contacts").should("be.visible");

    cy.get("button.header-link.-guest")
      .contains("Guest log in")
      .should("be.visible");

    cy.get("button.btn.header_signin").contains("Sign In").should("be.visible");

    cy.get("button.hero-descriptor_btn")
      .contains("Sign up")
      .should("be.visible");
  });

  it("Should verify all elements in the footer", () => {
    cy.get("footer").contains("© 2021 Hillel IT school").should("be.visible");

    cy.get("footer")
      .contains(
        "Hillel auto developed in Hillel IT school for educational purposes of QA courses."
      )
      .should("be.visible");

    cy.get("a.footer_logo").should("be.visible");

    cy.get("h2").contains("Contacts").should("be.visible");

    cy.get('a[href="https://www.facebook.com/Hillel.IT.School"]').should(
      "be.visible"
    );
    cy.get('a[href="https://t.me/ithillel_kyiv"]').should("be.visible");
    cy.get(
      'a[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]'
    ).should("be.visible");
    cy.get('a[href="https://www.instagram.com/hillel_itschool/"]').should(
      "be.visible"
    );
    cy.get('a[href="https://www.linkedin.com/school/ithillel/"]').should(
      "be.visible"
    );

    cy.get('a[href="https://ithillel.ua"]').should("be.visible");

    cy.get('a[href="mailto:developer@ithillel.ua"]').should("be.visible");
  });
});
