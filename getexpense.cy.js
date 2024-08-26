describe("GET Expenses", () => {
  it("should fetch all expenses", () => {
    cy.request("GET", "https://qauto.forstudy.space/api/expenses").then(
      (response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("expenses");
      }
    );
  });

  it("should return 404 for non-existing expense ID", () => {
    cy.request({
      method: "GET",
      url: "https://qauto.forstudy.space/api/expenses/99999",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});
