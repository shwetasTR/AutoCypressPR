```typescript
class TestCase937167 {
  private selectors: any;

  constructor(selectors: any) {
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

  get facilityOwnershipActionsMenu() {
    return cy.get(this.selectors.facility_ownership_actions_menu);
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

  editFacilityOwnership(newFacilityOwnershipValue: string) {
    this.facilityOwnershipActionsMenu.first().click(); //Assumes actions menu is present for at least one facility.  Error handling might be needed for robustness.
    this.editFacilityOwnershipButton.click();
    // Assuming a method to interact with the edit popup exists,  replace with actual implementation.
    cy.get('input[name="facilityOwnership"]').clear().type(newFacilityOwnershipValue); // Placeholder - replace with actual selector
    this.saveChangesButton.click();

  }

  verifyPageLoad(){
    cy.url().should('include', '/product-classification/product-record'); // Adjust as needed for your URL structure
  }

  verifyFacilityOwnershipAdded(facilityOwnershipValue: string){
      //Add assertion to check if the facility ownership is added successfully.  This will depend on the UI structure.  Example below is a placeholder.
      cy.contains(facilityOwnershipValue).should('be.visible');
  }

  scrollIntoView(){
    this.facilityOwnershipSection.scrollIntoView();
  }
}

export default TestCase937167;
```
