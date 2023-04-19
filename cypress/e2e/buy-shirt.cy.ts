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
    loginPage.visitLoginPage();
    loginPage.signIn();

    productsListPage.goToProduct('Sauce Labs Bolt T-Shirt');
    itemPage.addItemToCart();
    itemPage.goToCart();
    shoppingCartPage.checkoutCart();
    informationPage.fillOutInformation('Cypress', 'Workshop', '00000');
    overviewPage.finishOrder();

    checkoutCompletePage.assertOrderCompleted();
  });
});
