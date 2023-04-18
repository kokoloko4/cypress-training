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
    productsListPage.verifyTitle('Sauce Labs Backpack');
    productsListPage.verifyPrice('$29.99');
  });
});
