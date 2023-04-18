describe('Buy a black t-shirt', () => {
  it('then the t-shirt should be bought', () => {
    cy.visit('https://www.saucedemo.com/'); // (1)
    cy.get('.login-box > form > div > input#user-name').type('standard_user'); // (2)
    cy.get('.login-box > form > div > input#password').type('secret_sauce'); // (2)
    cy.get('form').submit(); // (2)

    cy.get(
      '.inventory_list > .inventory_item > .inventory_item_description > .inventory_item_label > a#item_1_title_link'
    ).click(); // (3)
    cy.get(
      '.inventory_details > .inventory_details_container > .inventory_details_desc_container > button'
    ); // (4)
    cy.get('#shopping_cart_container').click(); // (5)
    cy.get('.cart_footer > button#checkout').click(); // (6)
    cy.get('input#first-name').type('Cypress'); // (7)
    cy.get('input#last-name').type('Workshop'); // (8)
    cy.get('input#postal-code').type('00000'); // (9)
    cy.get('form').submit(); // (10)
    cy.get('.cart_footer > button#finish').click(); // (11)

    cy.get('#contents_wrapper > .checkout_complete_container > h2').should(
      'have.text',
      'Thank you for your order!'
    ); // (12)
  });
});
