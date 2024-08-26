describe("GET Cars", () => {
  it("should fetch all cars", () => {
    cy.request("GET", "https://qauto.forstudy.space/api/cars").then(
      (response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("cars");
      }
    );
  });

  it("should return 401 for unauthorized request", () => {
    cy.request({
      method: "GET",
      url: "https://qauto.forstudy.space/api/cars",
      auth: false,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(401);
    });
  });
});
