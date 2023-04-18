class ProductsListPage {
  private readonly blackShirtTitles: string;

  constructor() {
    this.blackShirtTitles =
      '.inventory_list > .inventory_item > .inventory_item_description > .inventory_item_label > a#item_1_title_link';
  }

  clickOnBlackShirt(): void {
    cy.get(this.blackShirtTitles).click();
  }
}

export { ProductsListPage };
