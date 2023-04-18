class OverviewPage {
  private readonly finishButton: string;

  constructor() {
    this.finishButton = '[data-test="finish"]';
  }

  finishOrder(): void {
    cy.get(this.finishButton).click();
  }
}

export { OverviewPage };
