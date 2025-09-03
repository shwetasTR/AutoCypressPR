```typescript
class TestCase937167 {
  private selectors = {
    login_button: "#submit-button",
    product_record_page: "a[href*='/gtm/product-classification/product-record']",
    facility_ownership_section: "#facility-ownership-section",
    add_facility_button: "button[data-testid='add-facility']",
    facility_ownership_dropdown: "select[name='facilityOwnership']",
    save_button: "button[type='submit'][data-testid='save-facility']",
    actions_button: "button[data-testid='actions-button']",
    edit_button: "button[data-testid='edit-facility']",
    save_changes_button: "button[type='submit'][data-testid='save-changes']",
  };

  // Getter methods for selectors
  getLoginButtonSelector() {
    return this.selectors.login_button;
  }

  getProductRecordPageSelector() {
    return this.selectors.product_record_page;
  }

  getFacilityOwnershipSectionSelector() {
    return this.selectors.facility_ownership_section;
  }

  getAddFacilityButtonSelector() {
    return this.selectors.add_facility_button;
  }

  getFacilityOwnershipDropdownSelector() {
    return this.selectors.facility_ownership_dropdown;
  }

  getSaveButtonSelector() {
    return this.selectors.save_button;
  }

  getActionsButtonSelector() {
    return this.selectors.actions_button;
  }

  getEditButtonSelector() {
    return this.selectors.edit_button;
  }

  getSaveChangesButtonSelector() {
    return this.selectors.save_changes_button;
  }


  // Action methods
  login(username: string, password: string): void {
    //  Implementation to login using provided username and password.  This will require selectors for username and password fields which are not provided.
    cy.visit("https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/"); //This assumes the login page is the base URL.  This may need adjustment.

    //Add selectors for username and password fields here and implement login logic
    cy.get('input[type="text"]').type(username); //Placeholder selector for username field - needs replacement.
    cy.get('input[type="password"]').type(password); //Placeholder selector for password field - needs replacement.
    cy.get(this.getLoginButtonSelector()).click();
  }

  navigateToProductRecordPage(productId: string, hsNumber: string, productNumber: string): void {
    const url = `https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/gtm/product-classification/product-record?productId=${productId}&hsNumber=${hsNumber}&productNumber=${productNumber}&countryCode=US`;
    cy.visit(url);
  }

  verifyPageLoad(): void {
    cy.url().should('include', '/gtm/product-classification/product-record'); // Adjust as needed based on expected URL
  }

  navigateToFacilityOwnership(): void {
    cy.get(this.getFacilityOwnershipSectionSelector()).scrollIntoView().should('be.visible');
  }

  addFacilityOwnership(facilityOwnershipValue: string): void {
    cy.get(this.getAddFacilityButtonSelector()).click();
    cy.get(this.getFacilityOwnershipDropdownSelector()).select(facilityOwnershipValue);
    cy.get(this.getSaveButtonSelector()).click();
  }

  editFacilityOwnership(facilityOwnershipValue: string): void {
    //This needs selectors to find and select a facility ownership record to edit.  This will need significant changes.
    cy.get(this.getActionsButtonSelector()).first().click(); // Placeholder - Needs to select the correct actions button
    cy.get(this.getEditButtonSelector()).click();
    //Add logic to change the facility ownership value in the edit popup
    //This will require selectors for the facility ownership field within the edit popup.
    cy.get('input[name="facilityOwnership"]').clear().type(facilityOwnershipValue); //Placeholder selector - needs replacement
    cy.get(this.getSaveChangesButtonSelector()).click();

  }
}
```
