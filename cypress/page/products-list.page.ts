class ProductsListPage {
  private readonly blackShirtTitles: string;

  constructor() {
    this.blackShirtTitles = '#item_1_title_link';
  }

  clickOnBlackShirt(): void {
    cy.get(this.blackShirtTitles).click();
  }
}

export { ProductsListPage };
