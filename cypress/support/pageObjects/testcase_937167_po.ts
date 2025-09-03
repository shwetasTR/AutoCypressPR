```typescript
class TestCase937167 {
  private selectors: { [key: string]: string };

  constructor() {
    this.selectors = {
      facility_ownership_section: "#contents-facilityOwnership",
      add_facility_ownership_button: "button[aria-label='Add Facility Ownership']",
      facility_ownership_dropdown: "select[name='facilityOwnership']",
      save_facility_ownership_button: "button[type='submit']",
      actions_button: "button[aria-label='Actions']",
      edit_facility_ownership_button: "button[aria-label='Edit']",
      save_changes_button: "button[type='submit']",
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
    //Assuming a similar dropdown exists in the edit popup
    this.facilityOwnershipDropdown.select(facilityOwnershipValue);
    this.saveChangesButton.click();

  }

  verifyPageLoad() {
    cy.url().should('include', '/product-classification/product-record');
  }

  verifyFacilityOwnershipAdded() {
    // Add assertion to check if the facility ownership is added successfully.  This will depend on your UI.  Example:
    cy.contains('Facility Ownership Added Successfully').should('be.visible'); // Replace with your actual success message
  }

  scrollIntoView(){
    this.facilityOwnershipSection.scrollIntoView();
  }

}
```
