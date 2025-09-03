```typescript
class TestCase937167 {
  private selectors: { [key: string]: string }

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
    this.actionsButton.click();
    this.editActionButton.click();
    // Assuming a selector for the facility ownership input field exists.  Replace with actual selector.
    cy.get('input[data-testid="facility-ownership-input"]').clear().type(facilityOwnershipValue);
    this.saveChangesButton.click();

  }


  verifyPageLoad() {
    cy.url().should('include', '/product-classification/product-record');
  }


  scrollIntoView() {
    this.facilityOwnershipSection.scrollIntoView();
  }

  verifyFacilityOwnershipAdded() {
      // Add assertion to verify facility ownership is added.  This needs a selector for the newly added facility ownership record.  Replace with actual selector.
      cy.get('[data-testid="newly-added-facility-ownership"]').should('be.visible');
  }

  verifyFacilityOwnershipUpdated() {
      // Add assertion to verify facility ownership is updated. This needs a selector for the updated facility ownership record. Replace with actual selector.
      cy.get('[data-testid="updated-facility-ownership"]').should('be.visible');
      cy.contains('Facility ownership updated successfully').should('be.visible'); // Example success message - Replace with actual message.

  }
}

export default TestCase937167;

```
