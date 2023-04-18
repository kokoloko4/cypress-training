class InformationPage {
  private readonly firstNameInput: string;
  private readonly lastNameInput: string;
  private readonly zipCodeInput: string;
  private readonly continueButton: string;

  constructor() {
    this.firstNameInput = 'input#first-name';
    this.lastNameInput = 'input#last-name';
    this.zipCodeInput = 'input#postal-code';
    this.continueButton = 'input[type="submit"]';
  }

  fillOutInformation(
    firstName: string,
    lastName: string,
    zipCode: string
  ): void {
    cy.get(this.firstNameInput).type(firstName);
    cy.get(this.lastNameInput).type(lastName);
    cy.get(this.zipCodeInput).type(zipCode);
    cy.get(this.continueButton).click();
  }
}

export { InformationPage };
