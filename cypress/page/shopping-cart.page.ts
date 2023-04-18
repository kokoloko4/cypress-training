class ShoppingCartPage {
  private readonly checkoutButton: string;

  constructor() {
    this.checkoutButton = '.cart_footer > button#checkout';
  }

  checkoutCart(): void {
    cy.get(this.checkoutButton).click();
  }
}

export { ShoppingCartPage };
