class OverviewPage {
  private readonly finishButton: string;

  constructor() {
    this.finishButton = '[data-test="finish"]';
  }

  public finishOrder(): void {
    cy.get(this.finishButton).click();
  }
}

export { OverviewPage };
