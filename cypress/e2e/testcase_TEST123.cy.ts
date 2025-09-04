```typescript
/// <reference types="cypress" />
import { TEST123 } from '../support/pageObjects/testcase_TEST123_po';

describe('Test Product Classification Page Analysis', () => {
  const productPage = new TEST123();

  beforeEach(() => {
    cy.testCaseMapping([
      {
        testCaseId: "ADO:TEST123",
        testCaseTitle: "Test Product Classification Page Analysis",
        testCaseLink: "https://dev.azure.com/tr-corp-tax/onesource-global-trade/_workitems/edit/TEST123",
      },
    ]);
  });


  it('Verify Product Classification Page', () => {
    productPage.navigateToProductPage();
    productPage.verifyProductInformation();
    productPage.verifyClassificationDetails();
  });
});

```
