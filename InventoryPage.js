class InventoryPage {
  verifyElementsPresent() {
    cy.get("#react-burger-menu-btn").should("be.visible");
    cy.get(".shopping_cart_link").should("be.visible");
    cy.get(".product_sort_container").should("be.visible");
  }

  verifySortingOptions() {
    cy.get(".product_sort_container").children().should("have.length", 4);
  }

  selectItemByName(name) {
    cy.contains(".inventory_item_name", name).click();
  }
}

export default InventoryPage;
