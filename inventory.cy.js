import InventoryPage from "../pages/InventoryPage";
import LoginPage from "../pages/LoginPage";

describe("Inventory Page Tests", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.enterUsername("standard_user");
    loginPage.enterPassword("secret_sauce");
    loginPage.submit();
  });

  it("should verify presence of main UI elements", () => {
    inventoryPage.verifyElementsPresent();
  });

  it("should verify sorting dropdown has 4 options", () => {
    inventoryPage.verifySortingOptions();
  });

  it("should navigate to item page on item click", () => {
    inventoryPage.selectItemByName("Sauce Labs Backpack");
    cy.url().should("include", "/inventory-item.html");
  });
});
