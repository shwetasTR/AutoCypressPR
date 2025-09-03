```typescript
class TestCase937167 {
  private readonly facilityOwnershipSection: string;
  private readonly addFacilityOwnershipButton: string;
  private readonly facilityOwnershipDropdown: string;
  private readonly saveFacilityOwnershipButton: string;
  private readonly actionsButton: string;
  private readonly editFacilityOwnershipButton: string;
  private readonly saveChangesButton: string;

  constructor(selectors: {
    [key: string]: string;
  }) {
    this.facilityOwnershipSection = selectors.facility_ownership_section;
    this.addFacilityOwnershipButton = selectors.add_facility_ownership_button;
    this.facilityOwnershipDropdown = selectors.facility_ownership_dropdown;
    this.saveFacilityOwnershipButton = selectors.save_facility_ownership_button;
    this.actionsButton = selectors.actions_button;
    this.editFacilityOwnershipButton = selectors.edit_facility_ownership_button;
    this.saveChangesButton = selectors.save_changes_button;

    // Input validation: Check if all selectors are defined.  Throw error if not.
    if (Object.values(selectors).some(selector => !selector)) {
      throw new Error("One or more selectors are missing or undefined.");
    }

  }


  getFacilityOwnershipSection() {
    return cy.get(this.facilityOwnershipSection);
  }

  getAddFacilityOwnershipButton() {
    return cy.get(this.addFacilityOwnershipButton);
  }

  getFacilityOwnershipDropdown() {
    return cy.get(this.facilityOwnershipDropdown);
  }

  getSaveFacilityOwnershipButton() {
    return cy.get(this.saveFacilityOwnershipButton);
  }

  getActionsButton() {
    return cy.get(this.actionsButton);
  }

  getEditFacilityOwnershipButton() {
    return cy.get(this.editFacilityOwnershipButton);
  }

  getSaveChangesButton() {
    return cy.get(this.saveChangesButton);
  }

  addFacilityOwnership(facilityOwnershipValue: string) {
    this.getAddFacilityOwnershipButton().click();
    this.getFacilityOwnershipDropdown().select(facilityOwnershipValue);
    this.getSaveFacilityOwnershipButton().click();
  }

  editFacilityOwnership(facilityOwnershipValue: string) {
    this.getActionsButton().first().click(); // Assumes multiple actions buttons are possible. Selects first one.
    this.getEditFacilityOwnershipButton().click();
    // Add logic to change the facility ownership value in the edit popup.  This requires selectors for the edit input field.
    // Example (assuming an input field with data-testid='facility-ownership-input'):
    // cy.get('[data-testid="facility-ownership-input"]').clear().type(facilityOwnershipValue);
    this.getSaveChangesButton().click();
  }


  navigateToProductRecordPage(productId: string, hsNumber: string, productNumber: string) {
    const url = `https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/gtm/product-classification/product-record?productId=${productId}&hsNumber=${hsNumber}&productNumber=${productNumber}&countryCode=US`;
    cy.visit(url);
  }

  verifyPageLoad() {
    cy.url().should('include', '/product-classification/product-record');
  }


}
```
