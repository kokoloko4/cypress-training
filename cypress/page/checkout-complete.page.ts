class CheckoutCompletePage {
  private readonly orderCompletedTitle: string;

  constructor() {
    this.orderCompletedTitle = '.complete-header';
  }

  assertOrderCompleted(): void {
    cy.get(this.orderCompletedTitle).should(
      'have.text',
      'Thank you for your order!'
    );
  }
}

export { CheckoutCompletePage };
