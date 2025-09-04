```typescript
class TestCase937167 {
  baseUrl = "https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com";
  selectors = {
    username: "[data-testid='username']",
    password: "[data-testid='password']",
    submitButton: "[type='submit']",
    loginSuccessValidation: ".success-message",
    pageLoadValidation: "body",
    facilityOwnershipLink: "[data-testid='facility-ownership']",
    facilityOwnershipValidation: "#facility-ownership-section",
    addButton: "[data-testid='add-facility']",
    dropdown: "select[name='ownershipType']",
    saveButton: "[data-testid='save-facility']",
    recordAddedValidation: ".success-message",
    actionsButton: "[data-testid='actions-button']",
    editButton: "[data-testid='edit-button']",
    editPopupValidation: ".edit-popup",
    ownershipField: "input[name='ownership']",
    ftzActiveCheckbox: "input[type='checkbox'][name='ftzActive']",
    saveChangesButton: "[data-testid='save-changes']",
    successMessageValidation: ".success-message",
  };

  constructor() {}


  get usernameField() {
    return cy.get(this.selectors.username);
  }

  get passwordField() {
    return cy.get(this.selectors.password);
  }

  get submitButton() {
    return cy.get(this.selectors.submitButton);
  }

  get loginSuccessMessage() {
    return cy.get(this.selectors.loginSuccessValidation);
  }

  get pageBody() {
    return cy.get(this.selectors.pageLoadValidation);
  }

  get facilityOwnershipLink() {
    return cy.get(this.selectors.facilityOwnershipLink);
  }

  get facilityOwnershipSection() {
    return cy.get(this.selectors.facilityOwnershipValidation);
  }

  get addFacilityButton() {
    return cy.get(this.selectors.addButton);
  }

  get ownershipDropdown() {
    return cy.get(this.selectors.dropdown);
  }

  get saveFacilityButton() {
    return cy.get(this.selectors.saveButton);
  }

  get recordAddedMessage() {
    return cy.get(this.selectors.recordAddedValidation);
  }

  get actionsButton() {
    return cy.get(this.selectors.actionsButton);
  }

  get editButton() {
    return cy.get(this.selectors.editButton);
  }

  get editPopup() {
    return cy.get(this.selectors.editPopupValidation);
  }

  get ownershipField() {
    return cy.get(this.selectors.ownershipField);
  }

  get ftzActiveCheckbox() {
    return cy.get(this.selectors.ftzActiveCheckbox);
  }

  get saveChangesButton() {
    return cy.get(this.selectors.saveChangesButton);
  }

  get successMessage() {
    return cy.get(this.selectors.successMessageValidation);
  }


  login(username: string, password: string) {
    this.usernameField.type(username);
    this.passwordField.type(password);
    this.submitButton.click();
    this.loginSuccessMessage.should('be.visible');
  }

  navigateToProductRecord(url: string) {
    cy.visit(`${this.baseUrl}${url}`);
    this.pageBody.should('be.visible');
  }

  clickFacilityOwnership() {
    this.facilityOwnershipLink.click();
    this.facilityOwnershipSection.should('be.visible');
  }

  addFacilityOwnership(ownershipType: string) {
    this.addFacilityButton.click();
    this.ownershipDropdown.select(ownershipType);
    this.saveFacilityButton.click();
    this.recordAddedMessage.should('be.visible');
  }

  editFacilityOwnership(newOwnership: string, ftzActive: boolean) {
    this.actionsButton.click();
    this.editButton.click();
    this.editPopup.should('be.visible');
    this.ownershipField.clear().type(newOwnership);
    this.ftzActiveCheckbox.check({ force: true }); //Force is used because the checkbox might be hidden initially.  Handle appropriately for your application.
    this.saveChangesButton.click();
    this.successMessage.should('be.visible');
  }
}
```
