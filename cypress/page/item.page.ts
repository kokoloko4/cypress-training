class ItemPage {
  private readonly addCartButton: string;
  private readonly cartButton: string;

  constructor() {
    this.addCartButton = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]';
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
