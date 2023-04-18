class ProductsListPage {
  private readonly inventoryContainer: string;
  private readonly itemBackPack_AddBtn: string;
  private readonly backpackTitle: string;
  private readonly prices: string;
  private readonly blackShirtTitle: string;

  constructor() {
    this.inventoryContainer = '#inventory_container';
    this.itemBackPack_AddBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
    this.backpackTitle = '#item_4_title_link';
    this.prices = '.inventory_item_price';
    this.blackShirtTitle = '#item_1_title_link';
  }

  public clickOnBlackShirt(): void {
    cy.get(this.blackShirtTitle).click();
  }

  public addItem(): void {
    cy.get(this.itemBackPack_AddBtn).click();
  }

  public verifyTitle(messages: string): void {
    cy.get(this.backpackTitle).should('have.text', messages);
  }

  public verifyPrice(messages: string): void {
    cy.get(this.prices).eq(0).should('have.text', messages);
  }

  public isContainerDisplayed(): void {
    cy.get(this.inventoryContainer).should('be.visible');
  }
}

export { ProductsListPage };
