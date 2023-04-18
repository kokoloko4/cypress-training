class ItemPage {
  private readonly addCartButton: string;
  private readonly cartButton: string;

  constructor() {
    this.addCartButton = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]';
    this.cartButton = '#shopping_cart_container';
  }

  public addItemToCart(): void {
    cy.get(this.addCartButton).click();
  }

  public goToCart(): void {
    cy.get(this.cartButton).click();
  }
}

export { ItemPage };
