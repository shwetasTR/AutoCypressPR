```typescript
class TestCase937167 {
  private selectors: { [key: string]: string }

  constructor() {
    this.selectors = {
      facility_ownership_section: "#contents-facilityOwnership",
      add_facility_ownership_button: "button[data-testid='add-facility-ownership']",
      facility_ownership_dropdown: "select[name='facilityOwnership']",
      save_facility_ownership_button: "button[type='submit']",
      actions_button: "button[data-testid='actions-button']",
      edit_facility_ownership_button: "button[data-testid='edit-facility-ownership']",
      save_changes_button: "button[data-testid='save-changes']"
    };
  }


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

  get editFacilityOwnershipButton() {
    return cy.get(this.selectors.edit_facility_ownership_button);
  }

  get saveChangesButton() {
    return cy.get(this.selectors.save_changes_button);
  }

  navigateToProductRecordPage(productId: string, hsNumber: string, productNumber: string) {
    const url = `https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/gtm/product-classification/product-record?productId=${productId}&hsNumber=${hsNumber}&productNumber=${productNumber}&countryCode=US`;
    cy.visit(url);
  }


  addFacilityOwnership(facilityOwnershipValue: string) {
    this.addFacilityOwnershipButton.click();
    this.facilityOwnershipDropdown.select(facilityOwnershipValue);
    this.saveFacilityOwnershipButton.click();
  }

  editFacilityOwnership(facilityOwnershipValue: string) {
    this.actionsButton.click();
    this.editFacilityOwnershipButton.click();
    // Assuming a way to interact with the edit popup to change the facility ownership
    cy.get('input[name="facilityOwnership"]').clear().type(facilityOwnershipValue); // Placeholder - Replace with actual selector
    this.saveChangesButton.click();
  }

  verifyFacilityOwnershipChange(expectedFacilityOwnership: string) {
      // Add assertion to verify the facility ownership has changed and a success message is displayed.
      // Replace with your actual assertion logic based on your application's UI.  Example:
      cy.contains(expectedFacilityOwnership).should('be.visible');
      cy.contains('Facility ownership updated successfully').should('be.visible'); //Example success message
  }


  scrollIntoView(){
    this.facilityOwnershipSection.scrollIntoView();
  }
}
```
