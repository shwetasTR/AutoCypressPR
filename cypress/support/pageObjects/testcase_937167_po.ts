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
    //This assumes at least one facility ownership exists.  Robust error handling would be needed in a production environment.
    this.actionsButton.first().click(); //Click the first actions button.  Needs improvement for multiple facilities.
    this.editFacilityOwnershipButton.click();
    this.facilityOwnershipDropdown.select(facilityOwnershipValue);
    this.saveChangesButton.click();

  }

  verifyPageLoadsSuccessfully(){
    cy.url().should('include', '/product-classification/product-record'); // Adjust as needed for your specific URL pattern.
  }

  verifyFacilityOwnershipAdded(facilityOwnershipValue: string){
    this.facilityOwnershipSection.contains(facilityOwnershipValue).should('be.visible');
  }

  verifySuccessfulMessage(){
    //Implement a check for a success message.  The exact implementation depends on how success is indicated on the page.
    cy.contains('Success!').should('be.visible'); //Replace 'Success!' with the actual success message text.
  }


}
```
