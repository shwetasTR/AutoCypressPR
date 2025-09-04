```typescript
class TEST123 {
  private navigateToProductPageSelector = 'body';
  private productNameSelector = '#productName';
  private productNumberSelector = '#productNumber';
  private productDescriptionSelector = '#productDescription';
  private productImageSelector = 'img.productImage';
  private hsCodeSelector = '#hsCode';
  private countryCodeSelector = '#countryCode';
  private classificationDetailsSelector = 'table.classificationDetails';


  navigateToProductPage() {
    cy.visit('https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/gtm/product-classification/product-record?productId=b127f5e6-09f1-4142-a6b7-8523d69b789e&productNumber=TST_dbS4B-tF4TV&hsNumber=&countryCode=US&activeWorkQueue=All%20products&previousPageUrl=WorkQueues');
    cy.get(this.navigateToProductPageSelector).should('be.visible');
  }

  getProductName(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.productNameSelector);
  }

  getProductNumber(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.productNumberSelector);
  }

  getProductDescription(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.productDescriptionSelector);
  }

  getProductImage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.productImageSelector);
  }

  getHsCode(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.hsCodeSelector);
  }

  getCountryCode(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.countryCodeSelector);
  }

  getClassificationDetails(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.classificationDetailsSelector);
  }

  verifyProductInformation() {
    this.getProductName().should('be.visible');
    this.getProductNumber().should('be.visible');
    this.getProductDescription().should('be.visible');
    this.getProductImage().should('be.visible');

  }

  verifyClassificationDetails() {
    this.getHsCode().should('be.visible');
    this.getCountryCode().should('be.visible');
    this.getClassificationDetails().should('be.visible');
  }
}
```
