class PracticeFormPage {
  private readonly form: string;
  private readonly firstNameInput: string;
  private readonly lastNameInput: string;
  private readonly emailInput: string;
  private readonly mobileInput: string;
  private readonly dateInput: string;
  private readonly dayDatepicker: string;
  private readonly monthDropdown: string;
  private readonly yearDropdown: string;
  private readonly subjectsInput: string;
  private readonly currentAddressInput: string;
  private readonly stateDropdown: string;
  private readonly cityDropdown: string;
  private readonly confirmationModal: string;
  private readonly months: any = {
    Jul: 'July'
  };

  constructor() {
    this.form = '#userForm';
    this.firstNameInput = '#firstName';
    this.lastNameInput = '#lastName';
    this.emailInput = '#userEmail';
    this.mobileInput = '#userNumber';
    this.dateInput = '#dateOfBirthInput';
    this.dayDatepicker = '.react-datepicker__day';
    this.monthDropdown = '.react-datepicker__month-select';
    this.yearDropdown = '.react-datepicker__year-select';
    this.subjectsInput = '#subjectsContainer';
    this.currentAddressInput = '#currentAddress';
    this.stateDropdown = '#state';
    this.cityDropdown = '#city';
    this.confirmationModal = '.modal-content';
  }

  private assertSubmittedValue(labelName: string, value: string): void {
    cy.get('tbody')
      .contains(labelName)
      .parent()
      .find('td')
      .eq(1)
      .should('contain.text', value);
  }

  public fillOutForm(personalInformation: PersonalInfo): void {
    const [day, month, year] = personalInformation.dateOfBirth.split(' ');

    cy.get(this.firstNameInput).type(personalInformation.name);
    cy.get(this.lastNameInput).type(personalInformation.lastName);
    cy.get(this.emailInput).type(personalInformation.email);
    cy.contains(personalInformation.gender).click();
    cy.get(this.mobileInput).type(personalInformation.mobileNumber);
    cy.get(this.dateInput).click();
    cy.get(this.monthDropdown).select(this.months[month]);
    cy.get(this.yearDropdown).select(year);
    cy.get(this.dayDatepicker)
      .not('.react-datepicker__day--outside-month')
      .contains(day)
      .click();
    for (const hobby of personalInformation.hobbies) cy.contains(hobby).click();
    cy.get(this.currentAddressInput).type(personalInformation.currentAddress);
    cy.get(this.stateDropdown).click();
    cy.contains(personalInformation.state).click();
    cy.get(this.cityDropdown).click();
    // eslint-disable-next-line cypress/no-force
    cy.contains(personalInformation.city).click({ force: true });
    cy.get(this.form).submit();
  }

  public assertConfirmationModalIsDisplayed(): void {
    cy.get(this.confirmationModal).should('be.visible');
  }

  public assertModalContainsCorrectInformation(
    personalInformation: PersonalInfo
  ): void {
    this.assertSubmittedValue(
      'Student Name',
      `${personalInformation.name} ${personalInformation.lastName}`
    );
    this.assertSubmittedValue('Student Email', personalInformation.email);
    this.assertSubmittedValue('Gender', personalInformation.gender);
    this.assertSubmittedValue('Mobile', personalInformation.mobileNumber);
    const [day, month, year] = personalInformation.dateOfBirth.split(' ');
    this.assertSubmittedValue(
      'Date of Birth',
      `${day} ${this.months[month]},${year}`
    );
    this.assertSubmittedValue(
      'Hobbies',
      personalInformation.hobbies.join(', ')
    );
    this.assertSubmittedValue('Address', personalInformation.currentAddress);
    this.assertSubmittedValue(
      'State and City',
      `${personalInformation.state} ${personalInformation.city}`
    );
  }
}

interface PersonalInfo {
  name: string;
  lastName: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  mobileNumber: string;
  hobbies: string[];
  currentAddress: string;
  state: string;
  city: string;
}

export { PracticeFormPage };
