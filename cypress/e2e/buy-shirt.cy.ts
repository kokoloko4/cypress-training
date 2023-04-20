import {
  CheckoutCompletePage,
  InformationPage,
  ItemPage,
  LoginPage,
  OverviewPage,
  ProductsListPage,
  ShoppingCartPage
} from '../page';

const loginPage = new LoginPage();
const productsListPage = new ProductsListPage();
const itemPage = new ItemPage();
const shoppingCartPage = new ShoppingCartPage();
const informationPage = new InformationPage();
const overviewPage = new OverviewPage();
const checkoutCompletePage = new CheckoutCompletePage();

describe('Buy a black t-shirt', () => {
  it('then the t-shirt should be bought', () => {
    cy.fixture('products.json').as('products');
    cy.fixture('buyInformation.json').as('data');
    loginPage.visitLoginPage();
    loginPage.signIn();

    cy.get('@products').then((products: any) => {
      const productName: string = Cypress._.sampleSize(products.products, 1)[0]
        .productName;
      productsListPage.goToProduct(productName);
    });
    itemPage.addItemToCart();
    itemPage.goToCart();
    shoppingCartPage.checkoutCart();
    cy.get('@data').then((data: any) => {
      informationPage.fillOutInformation(
        data.firstName,
        data.lastName,
        data.zipCode
      );
    });
    overviewPage.finishOrder();

    checkoutCompletePage.assertOrderCompleted();
  });
});
