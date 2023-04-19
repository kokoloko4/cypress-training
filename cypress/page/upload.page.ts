class UploadPage {
  private readonly uploadElementHTML5: string;
  private readonly uploadDnD: string;

  constructor() {
    this.uploadElementHTML5 = '#file-upload';
    this.uploadDnD = '#drag-drop-upload';
  }

  public visitUploadPage(): void {
    cy.visit('https://the-internet.herokuapp.com/upload');
  }

  public uploadHTML5File(fileName: string): void {
    cy.get(this.uploadElementHTML5).attachFile(fileName);
  }

  public uploadFileDnD(fileName: string): void {
    cy.get(this.uploadDnD).attachFile(fileName, {
      subjectType: 'drag-n-drop'
    });
  }

  public assertTitleHTML5File(fileName: string): void {
    cy.get(this.uploadElementHTML5).should('contain.value', fileName);
  }

  public assertTitleFileDnD(fileName: string): void {
    cy.get(this.uploadDnD)
      .find('[data-dz-name]')
      .should('contain.text', fileName);
  }
}

export { UploadPage };
