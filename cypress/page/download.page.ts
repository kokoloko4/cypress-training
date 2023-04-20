class DownloadPage {
  private readonly downloadButton: string;

  constructor() {
    this.downloadButton = '#downloadButton';
  }

  public visitDownloadPage(): void {
    cy.visit('https://demoqa.com/upload-download');
  }

  public downloadImage(): void {
    cy.get(this.downloadButton).click();
  }

  public assertFileWasDownloaded(): void {
    cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist');
  }
}

export { DownloadPage };
