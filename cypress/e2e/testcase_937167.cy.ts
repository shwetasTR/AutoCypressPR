```typescript
/// <reference types="cypress" />
import { TestCase937167 } from '../support/pageObjects/testcase_937167_po';

describe('Test Case ID 937167: Verify in edit function', () => {
  const pageObject = new TestCase937167();

  beforeEach(() => {
    cy.testCaseMapping([
      {
        testCaseId: "ADO:937167",
        testCaseTitle: "Verify in edit function.",
        testCaseLink: "https://dev.azure.com/tr-corp-tax/onesource-global-trade/_workitems/edit/937167",
      },
    ]);
    //Add login steps here using cy.login() if needed.  This example omits login for brevity but it's crucial for a real test.
    //Example: cy.login('validUsername', 'validPassword');

  });


  it('should successfully edit facility ownership', () => {
    const productId = 'YOUR_PRODUCT_ID'; // Replace with actual product ID
    const hsNumber = 'YOUR_HS_NUMBER';   // Replace with actual HS Number
    const productNumber = 'YOUR_PRODUCT_NUMBER'; // Replace with actual Product Number

    pageObject.navigateToProductRecordPage(productId, hsNumber, productNumber);
    pageObject.verifyPageLoad();
    pageObject.scrollIntoView();

    // Check if facility ownership records exist.  Add error handling for robustness.
    pageObject.getActionsButton().should('exist').then(($actionsButtons) => {
      if ($actionsButtons.length > 0) {
          pageObject.getActionsButton().first().click();
          pageObject.getEditFacilityOwnershipButton().click();
          pageObject.getFacilityOwnershipDropdown().select('New Facility Ownership Value'); //Replace with your desired value
          pageObject.getSaveChangesButton().click();
          // Add assertions to verify successful edit and message display.  Example below:
          cy.contains('Facility ownership updated successfully').should('be.visible'); //Adjust message as needed
      } else {
        pageObject.addFacilityOwnership('Initial Facility Ownership Value'); //Add initial record if none exists. Replace with your desired value.
        pageObject.getActionsButton().first().click();
        pageObject.getEditFacilityOwnershipButton().click();
        pageObject.getFacilityOwnershipDropdown().select('New Facility Ownership Value'); //Replace with your desired value
        pageObject.getSaveChangesButton().click();
        cy.contains('Facility ownership updated successfully').should('be.visible'); //Adjust message as needed

      }
    });

  });
});

```
