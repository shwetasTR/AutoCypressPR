class EditProductPage {
  visit() {
    cy.visit("https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/");
  }
  login(username, password) {
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("#login-button").click();
    cy.url().should("include", "/home");
  }
  selectGlobalClassification() {
    cy.contains("Global Classification").click();
    cy.contains("Classification Queues").click();
  }
  selectPartnerAndCountry(partner, country) {
    cy.get("#partner-dropdown").select(partner);
    cy.get("#country-dropdown").select(country);
    cy.get("#apply-filters-button").click();
  }
  selectFirstProduct() {
    cy.contains("All Products").click();
    cy.get(".product-list-item").first().click();
  }
  clickEdit() {
    cy.contains("Edit").click();
  }
  enterInvalidData() {
    cy.get("#required-field").clear();
    cy.get("#some-field").type("Invalid Data");
  }
  save() {
    cy.contains("Save").click();
  }
  clickErrorLink() {
    cy.get(".error-link").click();
  }
  fixRequiredField() {
    cy.get("#required-field").type("Valid Data");
  }
  assertSuccess() {
    cy.contains("Successfully saved").should("be.visible");
  }
}

export default EditProductPage;
