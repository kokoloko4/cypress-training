class ItemPage {
  private readonly addCartButton: string;
  private readonly cartButton: string;

  constructor() {
    this.addCartButton = '.inventory_details_desc_container button';
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
