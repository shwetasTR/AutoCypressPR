```typescript
class TestCase937167 {
  private facilityOwnershipSection: string;
  private addFacilityOwnershipButton: string;
  private facilityOwnershipDropdown: string;
  private saveFacilityOwnershipButton: string;
  private actionsButton: string;
  private editFacilityOwnershipButton: string;
  private saveChangesButton: string;

  constructor() {
    this.facilityOwnershipSection = '#contents-facilityOwnership';
    this.addFacilityOwnershipButton = 'button[data-testid="add-facility-ownership"]';
    this.facilityOwnershipDropdown = 'select[name="facilityOwnership"]';
    this.saveFacilityOwnershipButton = 'button[type="submit"]';
    this.actionsButton = 'button[data-testid="actions-button"]';
    this.editFacilityOwnershipButton = 'button[data-testid="edit-facility-ownership"]';
    this.saveChangesButton = 'button[type="submit"]';
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
    this.getActionsButton().first().click(); // Assuming multiple actions buttons, selecting the first one.  Error handling should be added for robustness.
    this.getEditFacilityOwnershipButton().click();
    // Assuming a similar dropdown for editing.  Adjust selector if different.
    this.getFacilityOwnershipDropdown().select(facilityOwnershipValue);
    this.getSaveChangesButton().click();

  }


  navigateToProductRecordPage(productId: string, hsNumber: string, productNumber: string) {
    const url = `https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/gtm/product-classification/product-record?productId=${productId}&hsNumber=${hsNumber}&productNumber=${productNumber}&countryCode=US`;
    cy.visit(url);
  }

  verifyPageLoad() {
    cy.url().should('include', '/product-classification/product-record'); // Adjust as needed for your specific URL structure.
  }

  scrollIntoView() {
    this.getFacilityOwnershipSection().scrollIntoView();
  }
}
```
