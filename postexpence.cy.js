describe("POST Expense", () => {
  it("should create a new expense", () => {
    cy.request("POST", "https://qauto.forstudy.space/api/expenses", {
      carId: 3,
      amount: 50,
      date: "2024-08-25",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("id");
    });
  });

  it("should return 400 for invalid date format", () => {
    cy.request({
      method: "POST",
      url: "https://qauto.forstudy.space/api/expenses",
      body: {
        carId: 3,
        amount: 50,
        date: "invalid-date",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });
});
