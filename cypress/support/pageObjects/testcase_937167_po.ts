```typescript
/// <reference types="cypress" />

class TestCase937167 {
  private baseUrl: string;
  private selectors: any;

  constructor(baseUrl: string, selectors: any) {
    this.baseUrl = baseUrl;
    this.selectors = selectors;
  }


  // Getter methods for selectors
  get loginUrl(): string {
    return `${this.baseUrl}/gtm/product-classification/product-record?productId=b127f5e6-09f1-4142-a6b7-8523d69b789e&productNumber=TST_dbS4B-tF4TV&hsNumber=&countryCode=US&activeWorkQueue=All%20products&previousPageUrl=WorkQueues`;
  }

  get facilityOwnershipSection(): string {
    return this.selectors.testSteps[1].target;
  }

  get addFacilityButton(): string {
    return this.selectors.testSteps[3].target;
  }

  get facilityOwnershipDropdown(): string {
    return this.selectors.testSteps[3].subSteps[0].target;
  }

  get saveFacilityButton(): string {
    return this.selectors.testSteps[3].subSteps[1].target;
  }

  get facilityActionsEditButton(): string {
    return this.selectors.testSteps[4].target;
  }

  get editFacilityModal(): string {
    return this.selectors.testSteps[4].assertions[0].selector;
  }

  get facilityOwnershipInput(): string {
    return this.selectors.testSteps[5].target;
  }

  get saveChangesButton(): string {
    return this.selectors.testSteps[6].target;
  }

  get successMessageSelector(): string {
    return this.selectors.testSteps[3].subSteps[1].assertions[0].selector || this.selectors.testSteps[6].assertions[0].selector;
  }


  // Action methods
  login(): void {
    cy.visit(this.loginUrl);
    cy.contains('Product Record').should('be.visible'); // Adjust assertion as needed
  }

  navigateToFacilityOwnership(): void {
    cy.get(this.facilityOwnershipSection).click();
    cy.get(this.facilityOwnershipSection).should('be.visible'); // Adjust assertion as needed

  }

  scrollToFacilityOwnership(): void {
    cy.scrollTo(this.facilityOwnershipSection);
    cy.get(this.facilityOwnershipSection).should('be.visible');
  }

  addFacilityOwnership(dropdownValue: string): void {
    cy.get(this.addFacilityButton).click();
    cy.get(this.facilityOwnershipDropdown).select(dropdownValue);
    cy.get(this.saveFacilityButton).click();
    cy.get(this.successMessageSelector).should('contain', 'Record added successfully'); // Adjust message as needed
  }

  editFacilityOwnership(newValue: string): void {
    cy.get(this.facilityActionsEditButton).click();
    cy.get(this.editFacilityModal).should('be.visible'); // Adjust selector as needed
    cy.get(this.facilityOwnershipInput).clear().type(newValue);
    cy.get(this.saveChangesButton).click();
    cy.get(this.successMessageSelector).should('contain', 'Changes saved successfully'); // Adjust message as needed

  }
}

export default TestCase937167;
```
