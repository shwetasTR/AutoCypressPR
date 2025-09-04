```typescript
class TestCase937167 {
  private selectors: { [key: string]: string };

  constructor(selectors: { [key: string]: string }) {
    this.selectors = selectors;
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

  get editActionButton() {
    return cy.get(this.selectors.edit_action_button);
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
      //This assumes at least one facility ownership record exists.  Error handling should be added for cases where no records exist.
    this.actionsButton.first().click(); //Click actions on the first available facility.  Improve selector for more robustness.
    this.editActionButton.click();
    // Add code here to locate and modify the facility ownership input field based on your application's structure.  This will likely involve finding an input field within the modal.  Example below is a placeholder.
    cy.get('input[type="text"][name="facilityOwnership"]').clear().type(facilityOwnershipValue);
    this.saveChangesButton.click();

  }

  verifyFacilityOwnership(facilityOwnershipValue: string){
    //Add assertions here to verify that the facility ownership has been successfully updated. This will require a selector to locate the updated facility ownership display.  Example below is a placeholder.
    cy.contains('p', facilityOwnershipValue).should('be.visible');
  }
}

export default TestCase937167;
```
