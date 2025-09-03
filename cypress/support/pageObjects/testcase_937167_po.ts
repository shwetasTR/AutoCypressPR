```typescript
class TestCase937167 {
  private selectors = {
    login_button: '#submit-button',
    product_record_page: 'a[href*="product-record"]',
    facility_ownership_section: '#facility-ownership-section',
    add_button: 'button.add-button',
    facility_ownership_dropdown: 'select[name="facilityOwnership"]',
    save_button: 'button[type="submit"]',
    actions_button: 'button.actions-button',
    edit_button: 'a.edit-link',
    save_changes_button: 'button[type="submit"]',
  };

  // Getters for selectors (Example -  replace with your actual selectors after inspection)
  getLoginButtonSelector() { return this.selectors.login_button; }
  getProductRecordPageSelector() { return this.selectors.product_record_page; }
  getFacilityOwnershipSectionSelector() { return this.selectors.facility_ownership_section; }
  getAddButtonSelector() { return this.selectors.add_button; }
  getFacilityOwnershipDropdownSelector() { return this.selectors.facility_ownership_dropdown; }
  getSaveButtonSelector() { return this.selectors.save_button; }
  getActionsButtonSelector() { return this.selectors.actions_button; }
  getEditButtonSelector() { return this.selectors.edit_button; }
  getSaveChangesButtonSelector() { return this.selectors.save_changes_button; }


  // Action methods (Example -  expand and refine based on your actual application's behavior)

  login(username: string, password: string): void {
    // Replace with your actual login logic.  This is a placeholder.
    cy.get(this.getLoginButtonSelector()).should('be.visible').click();
    // Add assertions to verify successful login.
  }

  navigateToProductRecordPage(productId: string, hsNumber: string, productNumber: string): void {
    const url = `https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/gtm/product-classification/product-record?productId=${productId}&hsNumber=${hsNumber}&productNumber=${productNumber}&countryCode=US`;
    cy.visit(url);
    cy.url().should('include', '/product-record'); // Assertion to check if the correct page loaded.
  }


  scrollToFacilityOwnership(): void {
    cy.get(this.getFacilityOwnershipSectionSelector()).scrollIntoView();
  }

  addFacilityOwnership(facilityOwnershipValue: string): void {
    cy.get(this.getAddButtonSelector()).click();
    cy.get(this.getFacilityOwnershipDropdownSelector()).select(facilityOwnershipValue);
    cy.get(this.getSaveButtonSelector()).click();
    // Add assertions to verify successful addition.
  }

  editFacilityOwnership(facilityOwnershipValue: string): void {
    cy.get(this.getActionsButtonSelector()).first().click(); // Assumes actions button is present for each facility
    cy.get(this.getEditButtonSelector()).click(); // Assumes edit link is present after actions button click.
    //Find the input or select field for facility ownership within the edit popup.  This selector needs to be updated based on your application structure.
    cy.get('input[name="facilityOwnership"]') //or cy.get('select[name="facilityOwnership"]') - replace with the correct selector
      .clear()
      .type(facilityOwnershipValue);
    cy.get(this.getSaveChangesButtonSelector()).click();
    // Add assertions to verify successful update.
  }
}
```
