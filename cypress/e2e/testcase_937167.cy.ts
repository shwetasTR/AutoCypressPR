```typescript
/// <reference types="cypress" />
import { TestCase937167 } from '../support/pageObjects/testcase_937167_po';

describe('Test Case ID 937167: Verify in edit function', () => {
  const pageObject = new TestCase937167();
  const productId = '123'; // Replace with actual product ID
  const hsNumber = '456'; // Replace with actual HS Number
  const productNumber = '789'; // Replace with actual Product Number
  const initialFacilityOwnership = 'Facility A';
  const updatedFacilityOwnership = 'Facility B';

  beforeEach(() => {
    cy.testCaseMapping([
      {
        testCaseId: "ADO:937167",
        testCaseTitle: "Verify in edit function.",
        testCaseLink: "https://dev.azure.com/tr-corp-tax/onesource-global-trade/_workitems/edit/937167",
      },
    ]);
    //Login -  replace with your actual login steps.  This is crucial for a working test.
    cy.visit('https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/');
    cy.get('#username').type('valid_username'); //Replace with valid username
    cy.get('#password').type('valid_password'); //Replace with valid password
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/gtm'); //Check if logged in successfully and navigated to the expected section. Adapt as needed based on your login flow.

  });


  it('should successfully edit facility ownership', () => {
    pageObject.navigateToProductRecordPage(productId, hsNumber, productNumber);
    pageObject.scrollIntoView();

    //Check if element exists before attempting to interact with it.
    pageObject.addFacilityOwnershipButton.should('be.visible').then(() => {
        pageObject.addFacilityOwnership(initialFacilityOwnership);
    });

    pageObject.verifyFacilityOwnership(initialFacilityOwnership);

    pageObject.editFacilityOwnership(updatedFacilityOwnership);

    pageObject.verifyFacilityOwnership(updatedFacilityOwnership);


  });
});

```
