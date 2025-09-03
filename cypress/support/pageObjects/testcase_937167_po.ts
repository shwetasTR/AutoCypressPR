```typescript
class TestCase937167 {
  private selectors: any;

  constructor(selectors: any) {
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

  login(username: string, password: string) {
    //Implementation for login using username and password.  This needs to be fleshed out based on your application's login mechanism.  Example below assumes standard form inputs.  Replace with your actual selectors.
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();

    // Assertion to check successful login.  This needs to be adjusted based on your application's post-login state.
    cy.contains('Welcome, '+ username).should('be.visible');

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
    //Implementation to change facility ownership in the edit popup.  This needs to be fleshed out based on your application's UI elements.  Example below assumes a standard input field. Replace with your actual selector.
    cy.get('#facilityOwnershipInput').clear().type(facilityOwnershipValue);
    this.saveChangesButton.click();
  }


  verifyPageLoad(){
    cy.url().should('include', '/product-classification/product-record'); //Adapt this assertion to your needs
  }

  verifyFacilityOwnershipAdded(){
    // Add assertion to check if the facility ownership record is added successfully.  This needs to be fleshed out based on your application's UI elements.
    cy.contains('Facility Ownership Added Successfully').should('be.visible'); //Example assertion - replace with your actual success message.
  }

  scrollFacilityOwnershipSection(){
    this.facilityOwnershipSection.scrollIntoView();
  }

}

export default TestCase937167;
```
