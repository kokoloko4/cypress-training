class CheckoutCompletePage {
  private readonly orderCompletedTitle: string;

  constructor() {
    this.orderCompletedTitle =
      '#contents_wrapper > .checkout_complete_container > h2';
  }

  assertOrderCompleted(): void {
    cy.get(this.orderCompletedTitle).should(
      'have.text',
      'Thank you for your order!'
    );
  }
}

export { CheckoutCompletePage };
