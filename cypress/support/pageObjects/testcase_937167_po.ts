```typescript
class TestCase937167 {
  private selectors: { [key: string]: string };

  constructor() {
    this.selectors = {
      facility_ownership_section: "#contents-facilityOwnership",
      add_facility_ownership_button: "button[data-testid='add-facility-ownership']",
      facility_ownership_dropdown: "select[data-testid='facility-ownership-dropdown']",
      save_facility_ownership_button: "button[data-testid='save-facility-ownership']",
      actions_button: "button[data-testid='actions-button']",
      edit_action_button: "button[data-testid='edit-action']",
      save_changes_button: "button[data-testid='save-changes']",
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
      // Assuming a similar dropdown exists in the edit popup
      this.facilityOwnershipDropdown.select(facilityOwnershipValue);
      this.saveChangesButton.click();
  }

  verifyFacilityOwnership(expectedFacilityOwnership: string) {
    // Add assertion to verify the facility ownership value.  This requires knowing the selector for the displayed facility ownership.  Example:
    cy.contains('td', expectedFacilityOwnership).should('be.visible');
  }

  scrollIntoView() {
    this.facilityOwnershipSection.scrollIntoView();
  }
}
```
