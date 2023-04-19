class ProductsListPage {
  private readonly inventoryContainer: string;
  private readonly inventoryItem: string;
  private readonly itemBackPack_AddBtn: string;
  private readonly titles: string;
  private readonly prices: string;

  constructor() {
    this.inventoryContainer = '#inventory_container';
    this.inventoryItem = '.inventory_item';
    this.itemBackPack_AddBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
    this.titles = '.inventory_item_name';
    this.prices = '.inventory_item_price';
  }

  private findProductByName(productName: string): string {
    return `:contains("${productName}")`;
  }

  public goToProduct(productName: string): void {
    cy.get(this.inventoryItem)
      .find(this.titles)
      .filter(this.findProductByName(productName))
      .click();
  }

  public addItem(): void {
    cy.get(this.itemBackPack_AddBtn).click();
  }

  public verifyTitle(productName: string): void {
    cy.get(this.inventoryItem)
      .find(this.titles)
      .filter(this.findProductByName(productName))
      .should('have.text', productName);
  }

  public verifyPrice(messages: string): void {
    cy.get(this.prices).contains(messages).should('have.text', messages);
  }

  public isContainerDisplayed(): void {
    cy.get(this.inventoryContainer).should('be.visible');
  }
}

export { ProductsListPage };
