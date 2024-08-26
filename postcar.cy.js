describe("POST Cars", () => {
  it("should create a new car", () => {
    cy.request("POST", "https://qauto.forstudy.space/api/cars", {
      carBrandId: 3,
      carModelId: 5,
      mileage: 15000,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("id");
    });
  });

  it("should return 400 for missing required fields", () => {
    cy.request({
      method: "POST",
      url: "https://qauto.forstudy.space/api/cars",
      body: {
        carBrandId: 3,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });
});
