```typescript
/// <reference types="cypress" />
import TestCase937167 from '../support/pageObjects/testcase_937167_po';

describe('Test Case ID: 937167 - Verify in edit function', () => {
  const pageObject = new TestCase937167();
  const username = 'valid_username'; // Replace with actual valid username
  const password = 'valid_password'; // Replace with actual valid password
  const productId = '12345'; // Replace with actual product ID
  const hsNumber = '67890'; // Replace with actual HS Number
  const productNumber = '101112'; //Replace with actual Product Number
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
    cy.visit(pageObject.baseUrl);
  });


  it('should successfully edit facility ownership', () => {
    const productRecordUrl = `${pageObject.baseUrl}gtm/product-classification/product-record?productId=${productId}&hsNumber=${hsNumber}&productNumber=${productNumber}&countryCode=US`;

    pageObject.login(username, password);
    pageObject.navigateToProductRecordPage(productRecordUrl);
    pageObject.clickFacilityOwnership();

    // Check if records exist, if not add one
    pageObject.addButton.should('be.visible').then(($addButton) => {
      if ($addButton.length > 0) {
          pageObject.addRecord(initialFacilityOwnership);
      }
    });

    pageObject.editRecord(updatedFacilityOwnership);
    //Add assertions to verify successful message and updated facility ownership
    cy.contains('Facility ownership updated successfully').should('be.visible'); //Example assertion, adjust as needed based on your actual success message.
    cy.get('#facilityOwnershipField').should('have.value', updatedFacilityOwnership); //Example assertion, adjust as needed based on your UI selectors.
  });
});

```
