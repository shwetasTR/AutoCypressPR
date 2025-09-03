```typescript
/// <reference types="cypress" />
import { TestCase937167 } from '../support/pageObjects/testcase_937167_po';

describe('Test Case ID: 937167 - Verify in edit function', () => {
  const selectors = {
    facility_ownership_section: '[data-testid="facility-ownership-section"]', // Replace with actual selector
    add_facility_ownership_button: '[data-testid="add-facility-ownership-button"]', // Replace with actual selector
    facility_ownership_dropdown: '[data-testid="facility-ownership-dropdown"]', // Replace with actual selector
    save_facility_ownership_button: '[data-testid="save-facility-ownership-button"]', // Replace with actual selector
    actions_button: '[data-testid="actions-button"]', // Replace with actual selector
    edit_facility_ownership_button: '[data-testid="edit-facility-ownership-button"]', // Replace with actual selector
    save_changes_button: '[data-testid="save-changes-button"]', // Replace with actual selector
    // Add other selectors as needed
  };

  const pageObject = new TestCase937167(selectors);

  before(() => {
    cy.testCaseMapping([
      {
        testCaseId: "ADO:937167",
        testCaseTitle: "Verify in edit function.",
        testCaseLink: "https://dev.azure.com/tr-corp-tax/onesource-global-trade/_workitems/edit/937167",
      },
    ]);
    //Login -  Replace with your actual login implementation
    cy.login('valid_username', 'valid_password'); 
  });

  it('should successfully add and edit facility ownership', () => {
    const productId = '123'; // Replace with actual product ID
    const hsNumber = '456'; // Replace with actual HS Number
    const productNumber = '789'; // Replace with actual Product Number

    pageObject.navigateToProductRecordPage(productId, hsNumber, productNumber);
    pageObject.verifyPageLoad();

    pageObject.getFacilityOwnershipSection().scrollIntoView();


    // Add facility ownership if no records exist.  Requires robust error handling and checking for existence of elements.
    pageObject.getAddFacilityOwnershipButton().should('be.visible').then(($button) => {
        if ($button.length > 0) {
            pageObject.addFacilityOwnership('Facility Ownership Value'); // Replace with actual value
        }
    });


    pageObject.editFacilityOwnership('New Facility Ownership Value'); // Replace with actual value

    // Add assertions to verify successful message and updated facility ownership.  Requires selectors for these elements.
    // Example:
    // cy.contains('Facility ownership updated successfully').should('be.visible');
    // cy.get('[data-testid="facility-ownership-display"]').should('contain', 'New Facility Ownership Value');

  });
});

```
