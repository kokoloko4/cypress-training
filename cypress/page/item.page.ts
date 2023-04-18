class ItemPage {
  private readonly addCartButton: string;
  private readonly cartButton: string;

  constructor() {
    this.addCartButton =
      '.inventory_details > .inventory_details_container > .inventory_details_desc_container > button';
    this.cartButton = '#shopping_cart_container';
  }

  addItemToCart(): void {
    cy.get(this.addCartButton).click();
  }

  goToCart(): void {
    cy.get(this.cartButton).click();
  }
}

export { ItemPage };
