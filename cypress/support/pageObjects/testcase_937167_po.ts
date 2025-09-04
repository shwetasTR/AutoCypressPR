```typescript
class TestCase937167 {
  private selectors = {
    facilityOwnershipSection: "#contents-panel a[href*='facilityOwnership']",
    addFacilityOwnershipButton: "button[aria-label='Add']",
    facilityOwnershipDropdown: "select[name='facilityOwnership']",
    saveFacilityOwnershipButton: "button[type='submit']",
    actionsButton: "tr td:last-child button",
    editOptionInActionsMenu: "li a[href*='edit']",
    saveChangesButton: "button[type='submit']",
    successfulMessage: ".success-message",
  };


  login(username: string, password: string): void {
    //Implementation for login using username and password.  This will depend on your login form selectors.  Example below:
    cy.visit("https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/");
    cy.get('input[type="text"]').type(username);
    cy.get('input[type="password"]').type(password);
    cy.get('button[type="submit"]').click();

    //Add assertions to verify successful login. For Example:
    cy.url().should('include', '/gtm'); // Or another appropriate assertion based on your application's post-login URL.

  }

  navigateToProductRecordPage(productId: string, hsNumber: string, productNumber: string): void {
    const url = `https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/gtm/product-classification/product-record?productId=${productId}&hsNumber=${hsNumber}&productNumber=${productNumber}&countryCode=US`;
    cy.visit(url);
    cy.url().should('include', `/product-record?productId=${productId}`); //Verify correct URL

  }

  getFacilityOwnershipSection(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.facilityOwnershipSection);
  }

  getAddFacilityOwnershipButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.addFacilityOwnershipButton);
  }

  getFacilityOwnershipDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.facilityOwnershipDropdown);
  }

  getSaveFacilityOwnershipButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.saveFacilityOwnershipButton);
  }

  getActionsButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.actionsButton);
  }

  getEditOptionInActionsMenu(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.editOptionInActionsMenu);
  }

  getSaveChangesButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.saveChangesButton);
  }

  getSuccessfulMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.successfulMessage);
  }


  addFacilityOwnership(facilityOwnershipValue: string): void {
    this.getAddFacilityOwnershipButton().click();
    this.getFacilityOwnershipDropdown().select(facilityOwnershipValue);
    this.getSaveFacilityOwnershipButton().click();
    // Add assertion to check for successful addition.  Example:
    this.getSuccessfulMessage().should('be.visible'); //Replace with actual success message check
  }

  editFacilityOwnership(newFacilityOwnershipValue: string): void {
    this.getActionsButton().first().click(); // Clicks the first Actions button.  Handle multiple rows as needed.
    this.getEditOptionInActionsMenu().click();
    //Find and interact with the edit form elements for facility ownership.  Selectors will be application specific.  Example:
    cy.get('select[name="facilityOwnership"]').select(newFacilityOwnershipValue); //Replace with your selector
    this.getSaveChangesButton().click();
    this.getSuccessfulMessage().should('be.visible'); //Replace with actual success message check

  }
}
```
