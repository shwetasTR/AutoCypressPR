```typescript
class TestCase937167 {
  private selectors = {
    facility_ownership_section: "#contents-facilityOwnership",
    add_facility_ownership_button: "button[data-testid='add-facility-ownership']",
    facility_ownership_dropdown: "select[name='facilityOwnership']",
    save_facility_ownership_button: "button[type='submit']",
    actions_button: "button[data-testid='actions-button']",
    edit_facility_ownership_button: "button[data-testid='edit-facility-ownership']",
    save_changes_button: "button[type='submit']",
  };

  navigateToProductRecordPage(productId: string, hsNumber: string, productNumber: string) {
    const url = `https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/gtm/product-classification/product-record?productId=${productId}&hsNumber=${hsNumber}&productNumber=${productNumber}&countryCode=US`;
    cy.visit(url);
    cy.url().should('include', `/product-record?productId=${productId}`); //add assertion to ensure correct page is loaded

  }


  getFacilityOwnershipSection() {
    return cy.get(this.selectors.facility_ownership_section);
  }

  getAddFacilityOwnershipButton() {
    return cy.get(this.selectors.add_facility_ownership_button);
  }

  getFacilityOwnershipDropdown() {
    return cy.get(this.selectors.facility_ownership_dropdown);
  }

  getSaveFacilityOwnershipButton() {
    return cy.get(this.selectors.save_facility_ownership_button);
  }

  getActionsButton() {
    return cy.get(this.selectors.actions_button);
  }

  getEditFacilityOwnershipButton() {
    return cy.get(this.selectors.edit_facility_ownership_button);
  }

  getSaveChangesButton() {
    return cy.get(this.selectors.save_changes_button);
  }

  addFacilityOwnership(facilityOwnershipValue: string) {
    this.getAddFacilityOwnershipButton().click();
    this.getFacilityOwnershipDropdown().select(facilityOwnershipValue);
    this.getSaveFacilityOwnershipButton().click();
    cy.contains('Facility ownership added successfully').should('be.visible'); //Example success message assertion. Adjust as needed.

  }

  editFacilityOwnership(facilityOwnershipValue: string) {
    this.getActionsButton().first().click(); //Assumes at least one facility exists. Handle no facilities case.
    this.getEditFacilityOwnershipButton().click();
    this.getFacilityOwnershipDropdown().select(facilityOwnershipValue);
    this.getSaveChangesButton().click();
    cy.contains('Facility ownership updated successfully').should('be.visible'); //Example success message assertion. Adjust as needed.
  }

  scrollFacilityOwnershipIntoView(){
    this.getFacilityOwnershipSection().scrollIntoView();
  }


}
```
