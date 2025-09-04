```typescript
class TestCase937167 {
  private selectors = {
    facility_ownership_section: "#contents-facilityOwnership",
    add_facility_ownership_button: "button[data-testid='add-facility-ownership']",
    facility_ownership_dropdown: "select[data-testid='facility-ownership-dropdown']",
    save_facility_ownership_button: "button[data-testid='save-facility-ownership']",
    actions_button: "button[data-testid='actions-button']",
    edit_action_button: "button[data-testid='edit-action']",
    save_changes_button: "button[data-testid='save-changes']",
  };

  //Getters for selectors
  get facilityOwnershipSection() {
    return cy.get(this.selectors.facility_ownership_section);
  }

  get addFacilityOwnershipButton() {
    return cy.get(this.selectors.add_facility_ownership_button);
  }

  get facilityOwnershipDropdown() {
    return cy.get(this.selectors.facility_ownership_dropdown);
  }

  get saveFacilityOwnershipButton() {
    return cy.get(this.selectors.save_facility_ownership_button);
  }

  get actionsButton() {
    return cy.get(this.selectors.actions_button);
  }

  get editActionButton() {
    return cy.get(this.selectors.edit_action_button);
  }

  get saveChangesButton() {
    return cy.get(this.selectors.save_changes_button);
  }


  // Actions methods
  login(username: string, password: string) {
    //Implementation for login using username and password.  Replace with actual login steps.
    cy.visit('https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/');
    //Add your login commands here.  This is a placeholder.
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#submit').click();

  }

  navigateToProductRecordPage(productId: string, hsNumber: string, productNumber: string) {
    const url = `https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/gtm/product-classification/product-record?productId=${productId}&hsNumber=${hsNumber}&productNumber=${productNumber}&countryCode=US`;
    cy.visit(url);
  }

  scrollToFacilityOwnership() {
    this.facilityOwnershipSection.scrollIntoView();
  }

  addFacilityOwnership(facilityOwnershipValue: string) {
    this.addFacilityOwnershipButton.click();
    this.facilityOwnershipDropdown.select(facilityOwnershipValue);
    this.saveFacilityOwnershipButton.click();
  }

  editFacilityOwnership(facilityOwnershipValue: string) {
      this.actionsButton.click(); //Assumes actions button is visible and selects the first available.  Add logic to select specific action button if needed.
      this.editActionButton.click();
      //Add logic to locate and update the facility ownership field based on your UI.  This is a placeholder.
      cy.get('[data-testid="facility-ownership-input"]').clear().type(facilityOwnershipValue);
      this.saveChangesButton.click();
  }

}
```
