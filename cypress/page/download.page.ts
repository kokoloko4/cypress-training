class DownloadPage {
  private readonly baseUrl: string;
  private readonly downloadButton: string;

  constructor() {
    this.baseUrl = 'https://demoqa.com/upload-download';
    this.downloadButton = '#downloadButton';
  }

  public visitDownloadPage(): void {
    cy.visit(this.baseUrl);
  }

  public downloadImage(): void {
    cy.get(this.downloadButton).click();
  }

  public assertFileWasDownloaded(): void {
    cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist');
  }
}

export { DownloadPage };
