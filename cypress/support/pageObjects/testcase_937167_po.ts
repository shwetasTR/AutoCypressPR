```typescript
class TestCase937167 {
  baseUrl = "https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/";

  constructor() {}


  get username() {
    return cy.get('#username');
  }

  get password() {
    return cy.get('#password');
  }

  get submitButton() {
    return cy.get('button[type="submit"]');
  }

  get successMessage() {
    return cy.get('.success-message');
  }

  get facilityOwnership() {
    return cy.get('#facilityOwnership');
  }


  get addButton() {
    return cy.contains('button', 'Add');
  }

  get dropdown() {
    return cy.get('select');
  }

  get saveButton() {
    return cy.contains('button', 'Save');
  }

  get actionsButton() {
    return cy.get('.actions-button');
  }

  get editButton() {
    return cy.contains('button', 'Edit');
  }

  get facilityOwnershipField() {
    return cy.get('#facilityOwnershipField');
  }

  get saveChangesButton() {
    return cy.contains('button', 'Save Changes');
  }

  get pageTitle() {
    return cy.title();
  }


  login(username: string, password: string) {
    this.username.type(username);
    this.password.type(password);
    this.submitButton.click();
    this.successMessage.should('be.visible');
  }

  navigateToProductRecordPage(url: string) {
    cy.visit(url);
    this.pageTitle.should('contain', 'Product Record');
  }

  clickFacilityOwnership() {
    this.facilityOwnership.click();
    //Custom command needed for scroll validation.  Example below.
    cy.scrollToFacilityOwnership(); //Requires custom command implementation
  }

  addRecord(dropdownValue: string) {
    this.addButton.click();
    this.dropdown.select(dropdownValue);
    this.saveButton.click();
    this.successMessage.should('be.visible');
  }

  editRecord(newFacilityOwnership: string) {
    this.actionsButton.click();
    this.editButton.click();
    this.facilityOwnershipField.clear().type(newFacilityOwnership);
    this.saveChangesButton.click();
    this.successMessage.should('be.visible');
  }
}

//Example custom command for scroll validation (add to your cypress/support/commands.js)
Cypress.Commands.add('scrollToFacilityOwnership', () => {
  cy.get('#facilityOwnership').then(($el) => {
    const elementTop = $el[0].offsetTop;
    const windowHeight = Cypress.$(window).height();
    const scrollPosition = elementTop - windowHeight /2 ; // Adjust as needed

    cy.scrollTo(0, scrollPosition, {ensureScrollable: false}); // ensureScrollable: false to prevent errors if element is not scrollable.

    // Add assertions to validate scroll position if needed.  Example:
    // cy.wrap($el).should('be.withinViewport');

  });
});

export default TestCase937167;
```
