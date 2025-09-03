```typescript
class TestCase937167 {
  private selectors = {
    login_button: '#submit', // Replace with actual selector after inspection
    product_record_page: '[data-testid="product-record-page"]', //Example, replace with actual selector
    facility_ownership_section: '[data-testid="facility-ownership-section"]', //Example, replace with actual selector
    add_button: 'button[data-testid="add-facility"]', //Example, replace with actual selector
    dropdown: 'select[data-testid="facility-dropdown"]', //Example, replace with actual selector
    save_button: 'button[data-testid="save-facility"]', //Example, replace with actual selector
    actions_button: 'td button[data-testid="actions-button"]', //Example, replace with actual selector
    edit_button: 'a[data-testid="edit-facility"]', //Example, replace with actual selector
    save_changes_button: 'button[data-testid="save-changes"]', //Example, replace with actual selector

  };

  constructor() {}


  getLoginButton() {
    return cy.get(this.selectors.login_button);
  }

  getProductRecordPage() {
    return cy.get(this.selectors.product_record_page);
  }

  getFacilityOwnershipSection() {
    return cy.get(this.selectors.facility_ownership_section);
  }

  getAddButton() {
    return cy.get(this.selectors.add_button);
  }

  getDropdown() {
    return cy.get(this.selectors.dropdown);
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

  login(username: string, password: string) {
    // Replace with actual login logic based on your application's login form.
    //  This is a placeholder.  You need to inspect the login form and adapt this code accordingly.
    cy.get('input[type="text"]').type(username);
    cy.get('input[type="password"]').type(password);
    this.getLoginButton().click();
  }

  navigateToProductRecordPage(productId: string, hsNumber: string, productNumber: string) {
    const url = `https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/gtm/product-classification/product-record?productId=${productId}&hsNumber=${hsNumber}&productNumber=${productNumber}&countryCode=US`;
    cy.visit(url);
  }

  addFacilityOwnership(facilityType: string) {
    this.getAddButton().click();
    this.getDropdown().select(facilityType);
    this.getSaveButton().click();
  }

  editFacilityOwnership(newFacilityType: string) {
    this.getActionsButton().click();
    this.getEditButton().click();
    //  Assume a dropdown or input field for editing facility ownership exists.  Replace with actual selector.
    cy.get('select[data-testid="facility-dropdown"]').select(newFacilityType); //Example selector, replace with actual
    this.getSaveChangesButton().click();
  }

}
```
