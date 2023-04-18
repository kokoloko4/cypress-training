class LoginPage {
  private readonly loginURL: string;
  private readonly userNameField: string;
  private readonly passwordField: string;
  private readonly loginButton: string;

  constructor() {
    this.loginURL = 'http://saucedemo.com/';
    this.userNameField = '[data-test="username"]';
    this.passwordField = '[data-test="password"]';
    this.loginButton = '[data-test="login-button"]';
  }

  public visitLoginPage(): void {
    cy.visit(this.loginURL);
  }

  public signIn(): void {
    cy.get(this.userNameField).type('standard_user');
    cy.get(this.passwordField).type('secret_sauce');
    cy.get(this.loginButton).click();
  }
}

export { LoginPage };
