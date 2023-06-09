class ShoppingCartPage {
  private readonly checkoutButton: string;

  constructor() {
    this.checkoutButton = '[data-test="checkout"]';
  }

  public checkoutCart(): void {
    cy.get(this.checkoutButton).click();
  }
}

export { ShoppingCartPage };
