```typescript
class TestCase937167 {
  private selectors: any;

  constructor(selectors: any) {
    this.selectors = selectors;
  }


  getLoginButton() {
    return cy.get(this.selectors.login_button);
  }

  getProductRecordPageLink() {
    return cy.get(this.selectors.product_record_page_link);
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

  getSaveButton() {
    return cy.get(this.selectors.save_button);
  }

  getActionsButton() {
    return cy.get(this.selectors.actions_button);
  }

  getEditButton() {
    return cy.get(this.selectors.edit_button);
  }

  getSaveChangesButton() {
    return cy.get(this.selectors.save_changes_button);
  }


  login(username: string, password: string): void {
    //  Implementation needs refinement based on actual login form structure.  This is a placeholder.
    cy.get('input[type="text"]').type(username); // Replace with accurate selector
    cy.get('input[type="password"]').type(password); // Replace with accurate selector
    this.getLoginButton().click();
  }

  navigateToProductRecordPage(productId: string, hsNumber: string, productNumber: string): void {
    const url = `https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/gtm/product-classification/product-record?productId=${productId}&hsNumber=${hsNumber}&productNumber=${productNumber}&countryCode=US`;
    this.getProductRecordPageLink().invoke('attr', 'href').should('include', url).click();

  }

  scrollToFacilityOwnership(): void {
    this.getFacilityOwnershipSection().scrollIntoView();
  }

  addFacilityOwnership(facilityOwnershipValue: string): void {
    this.getAddFacilityOwnershipButton().click();
    this.getFacilityOwnershipDropdown().select(facilityOwnershipValue);
    this.getSaveButton().click();
  }

  editFacilityOwnership(facilityOwnershipValue: string): void {
    this.getActionsButton().first().click();//Assumes at least one Actions button exists.  Error handling needed for no records.
    this.getEditButton().click();
    //This section needs refinement based on the Edit popup's structure.  Placeholders are used below.
    cy.get('input[name="facilityOwnership"]').clear().type(facilityOwnershipValue); //Replace with accurate selector
    this.getSaveChangesButton().click();

  }
}

export default TestCase937167;
```
