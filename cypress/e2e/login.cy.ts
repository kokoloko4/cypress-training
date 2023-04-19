import { LoginPage, ProductsListPage } from '../page';

const loginPage = new LoginPage();
const productsListPage = new ProductsListPage();

describe('Login test', () => {
  it('Login in sauce Page with Empty fields', () => {
    // Arrange
    loginPage.visitLoginPage();
    // Action
    loginPage.loginWithEmptyFields();
    // Assertion
    loginPage.verifyErrorMessage('Epic sadface: Username is required');
  });

  it('Login in sauce Page with Valid credentials', () => {
    // Arrange
    loginPage.visitLoginPage();
    loginPage.signIn();
    // Action
    productsListPage.isContainerDisplayed();
    productsListPage.addItem();
    // Assertion
    cy.fixture('products.json').then((products) => {
      const product =
        products.products[
          Math.floor(Math.random() * products.products.length - 1)
        ];
      productsListPage.verifyTitle(product.productName);
      productsListPage.verifyPrice(product.productPrice);
    });
  });
});
