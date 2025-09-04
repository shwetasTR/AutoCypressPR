```typescript
/// <reference types="cypress" />
import { TestCase937167 } from '../support/pageObjects/testcase_937167_po';

describe('Test Case ID: 937167 - Verify Edit Function', () => {
  const pageObject = new TestCase937167();
  const productId = '12345'; // Replace with actual product ID
  const hsNumber = '67890'; // Replace with actual HS Number
  const productNumber = '112233'; // Replace with actual Product Number
  const initialFacilityOwnership = 'Ownership 1';
  const updatedFacilityOwnership = 'Ownership 2';


  cy.testCaseMapping([
    {
      testCaseId: "ADO:937167",
      testCaseTitle: "Verify in edit function.",
      testCaseLink: "https://dev.azure.com/tr-corp-tax/onesource-global-trade/_workitems/edit/937167",
    },
  ]);

  beforeEach(() => {
    // Login logic -  Replace with your actual login steps using cy.
    cy.visit('https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/');
    cy.get('#username').type('valid_username'); // Replace with valid username
    cy.get('#password').type('valid_password'); // Replace with valid password
    cy.get('button[type="submit"]').click();

  });

  it('should successfully edit facility ownership', () => {
    pageObject.navigateToProductRecordPage(productId, hsNumber, productNumber);
    pageObject.verifyPageLoad();
    pageObject.scrollFacilityOwnership();


    //Check if facility ownership exists. If not, add one.
    pageObject.facilityOwnershipSection.find(pageObject.actionsButton).should('exist').then(($el) => {
      if ($el.length === 0) {
        pageObject.addFacilityOwnership(initialFacilityOwnership);
      }
    });

    pageObject.actionsButton.first().click();
    pageObject.editActionButton.click();
    pageObject.editFacilityOwnership(updatedFacilityOwnership);

    // Add assertions to verify successful edit and message display.  Replace with actual selectors and expected values.
    cy.contains('Facility ownership updated successfully').should('be.visible'); //Example assertion - replace with your actual success message

  });
});

```
