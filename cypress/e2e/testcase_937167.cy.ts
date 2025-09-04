```typescript
/// <reference types="cypress" />
import { TestCase937167 } from '../support/pageObjects/testcase_937167_po';

describe('Test Case ID: 937167 - Verify Edit Function', () => {
  const pageObject = new TestCase937167();
  const username = Cypress.env('username'); //Retrieve username from cypress.env.json
  const password = Cypress.env('password'); //Retrieve password from cypress.env.json
  const productId = Cypress.env('productId'); //Retrieve productId from cypress.env.json
  const hsNumber = Cypress.env('hsNumber'); //Retrieve hsNumber from cypress.env.json
  const productNumber = Cypress.env('productNumber'); //Retrieve productNumber from cypress.env.json


  beforeEach(() => {
    cy.testCaseMapping([
      {
        testCaseId: "ADO:937167",
        testCaseTitle: "Verify in edit function.",
        testCaseLink: "https://dev.azure.com/tr-corp-tax/onesource-global-trade/_workitems/edit/937167",
      },
    ]);
  });

  it('should successfully edit facility ownership', () => {
    pageObject.login(username, password);
    pageObject.navigateToProductRecordPage(productId, hsNumber, productNumber);

    //Ensure the facility ownership section is visible before proceeding.
    pageObject.getFacilityOwnershipSection().scrollIntoView().should('be.visible');

    //Check if records exist. If not, add a record first.
    pageObject.getActionsButton().should(($el) => {
      if ($el.length === 0) {
        pageObject.addFacilityOwnership('Facility Ownership Value 1'); // Replace with actual value
      }
    });

    pageObject.editFacilityOwnership('Facility Ownership Value 2'); //Replace with actual value.

  });
});

```
