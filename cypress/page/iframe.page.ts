class IframePage {
  private readonly baseUrl: string;
  private readonly cssUrl: string;
  private readonly iframe: string;
  private readonly cssMenuButton: string;

  constructor() {
    this.baseUrl = 'https://www.w3schools.com/html/html_iframe.asp';
    this.cssUrl = 'https://www.w3schools.com/css/default.asp';
    this.iframe = 'iframe[title="W3Schools HTML Tutorial"]';
    this.cssMenuButton = '[title="CSS Tutorial"]';
  }

  public visit(): void {
    cy.visit(this.baseUrl);
    cy.frameLoaded(this.iframe);
  }

  public goToCssPageInFrame(): void {
    cy.iframe(this.iframe).find(this.cssMenuButton).click();
    cy.frameLoaded(this.iframe, {
      url: this.cssUrl
    });
  }

  public assertFrameTitle(title: string): void {
    cy.iframe(this.iframe).find('h1').should('contain.text', title);
  }
}

export { IframePage };
