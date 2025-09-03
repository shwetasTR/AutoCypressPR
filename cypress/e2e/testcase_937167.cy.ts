```typescript
/// <reference types="cypress" />
import { TestCase937167 } from '../support/pageObjects/testcase_937167_po';

describe('Test Case ID: 937167 - Verify in edit function', () => {
  const pageObject = new TestCase937167();
  const username = Cypress.env('username'); // Replace with your environment variable
  const password = Cypress.env('password'); // Replace with your environment variable
  const productId = Cypress.env('productId'); // Replace with your environment variable
  const hsNumber = Cypress.env('hsNumber'); // Replace with your environment variable
  const productNumber = Cypress.env('productNumber'); // Replace with your environment variable


  before(() => {
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
    pageObject.getFacilityOwnershipSection().scrollIntoView();

    // Check if facility ownership records exist. If not, add one.
    pageObject.getFacilityOwnershipSection().find('tbody tr').should((records) => {
      if (records.length === 0) {
        pageObject.addFacilityOwnership('Facility Type 1'); // Replace 'Facility Type 1' with a valid facility type
      }
    });

    pageObject.editFacilityOwnership('Facility Type 2'); // Replace 'Facility Type 2' with a different valid facility type

    // Add assertions to verify successful edit and message display.  Replace with actual selectors and expected text.
    cy.contains('Facility ownership updated successfully').should('be.visible'); // Example assertion.  Replace with your actual success message.

  });
});

```
