import { PracticeFormPage } from '../page';

const practiceFormPage = new PracticeFormPage();

describe('Filling a form', () => {
  it('then the form is successfully filled', () => {
    const personalInformation = {
      name: 'Holmes',
      lastName: 'Salazar',
      email: 'test@email.com',
      gender: 'Male',
      dateOfBirth: '27 Jul 2016',
      mobileNumber: '3656589156',
      hobbies: ['Music', 'Reading'],
      currentAddress: 'Av siempreViva # 123',
      state: 'Haryana',
      city: 'Panipat'
    };

    cy.visit('https://demoqa.com/automation-practice-form');

    practiceFormPage.fillOutForm(personalInformation);

    practiceFormPage.assertConfirmationModalIsDisplayed();
    practiceFormPage.assertModalContainsCorrectInformation(personalInformation);
  });
});
