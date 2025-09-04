```typescript
/// <reference types="cypress" />
import { TestCase937167 } from '../support/pageObjects/testcase_937167_po';

describe('Test Case ID: 937167 - Verify Edit Function', () => {
  const pageObject = new TestCase937167();
  const productId = 'YOUR_PRODUCT_ID'; // Replace with actual product ID
  const hsNumber = 'YOUR_HS_NUMBER';     // Replace with actual HS Number
  const productNumber = 'YOUR_PRODUCT_NUMBER'; // Replace with actual Product Number
  const initialFacilityOwnership = 'Initial Value'; // Replace with initial value
  const updatedFacilityOwnership = 'Updated Value'; // Replace with updated value


  before(() => {
    cy.testCaseMapping([
      {
        testCaseId: "ADO:937167",
        testCaseTitle: "Verify in edit function.",
        testCaseLink: "https://dev.azure.com/tr-corp-tax/onesource-global-trade/_workitems/edit/937167",
      },
    ]);
    //Login -  Replace with your actual login logic.  This is crucial!
    cy.visit('https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/');
    cy.get('#username').type('YOUR_USERNAME'); // Replace with your username
    cy.get('#password').type('YOUR_PASSWORD'); // Replace with your password
    cy.get('button[type="submit"]').click();

  });

  it('should successfully add and edit facility ownership', () => {
    pageObject.navigateToProductRecordPage(productId, hsNumber, productNumber);
    cy.url().should('include', `/product-record?productId=${productId}&hsNumber=${hsNumber}&productNumber=${productNumber}&countryCode=US`);

    pageObject.scrollIntoView();

    //Check if facility ownership exists. If not, add it.
    pageObject.actionsButton.should('be.visible').then(($el) => {
        if ($el.length ===0){
            pageObject.addFacilityOwnership(initialFacilityOwnership);
            pageObject.verifyFacilityOwnershipChange(initialFacilityOwnership);
        }
    })


    pageObject.editFacilityOwnership(updatedFacilityOwnership);
    pageObject.verifyFacilityOwnershipChange(updatedFacilityOwnership);
  });
});

```
