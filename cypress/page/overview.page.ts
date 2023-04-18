class OverviewPage {
  private readonly finishButton: string;

  constructor() {
    this.finishButton = '.cart_footer > button#finish';
  }

  finishOrder(): void {
    cy.get(this.finishButton).click();
  }
}

export { OverviewPage };
