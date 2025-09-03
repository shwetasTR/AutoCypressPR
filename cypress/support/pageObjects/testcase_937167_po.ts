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
    this.actionsButton.click();
    this.editActionButton.click();
    // Assuming there's an input field to change facility ownership.  Replace with actual selector.
    cy.get('input[data-testid="facility-ownership-input"]').clear().type(facilityOwnershipValue);
    this.saveChangesButton.click();

  }

  verifyPageLoadedSuccessfully(){
    cy.url().should('include', '/product-classification/product-record');
  }

  verifyFacilityOwnershipAdded(){
    //Add assertion to check if facility ownership is added successfully.  This will depend on your UI.  Example:
    cy.contains('Facility Ownership Added Successfully').should('be.visible');

  }

  scrollIntoView(){
    this.facilityOwnershipSection.scrollIntoView();
  }

}

export default TestCase937167;
```
