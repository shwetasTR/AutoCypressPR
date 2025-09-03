```typescript
/// <reference types="cypress" />
import TestCase937167 from '../support/pageObjects/testcase_937167_po';

describe('Test Case ID: 937167 - Verify in edit function', () => {
  const selectors = {
    facility_ownership_section: '[data-testid="facility-ownership-section"]', //Replace with your actual selector
    add_facility_ownership_button: '[data-testid="add-facility-ownership"]', //Replace with your actual selector
    facility_ownership_dropdown: '[data-testid="facility-ownership-dropdown"]', //Replace with your actual selector
    save_facility_ownership_button: '[data-testid="save-facility-ownership"]', //Replace with your actual selector
    actions_button: '[data-testid="actions-button"]', //Replace with your actual selector
    edit_action_button: '[data-testid="edit-action"]', //Replace with your actual selector
    save_changes_button: '[data-testid="save-changes"]', //Replace with your actual selector

  };

  const pageObject = new TestCase937167(selectors);

  beforeEach(() => {
    cy.testCaseMapping([
      {
        testCaseId: "ADO:937167",
        testCaseTitle: "Verify in edit function.",
        testCaseLink: "https://dev.azure.com/tr-corp-tax/onesource-global-trade/_workitems/edit/937167",
      },
    ]);
    //Add your login steps here using cy.login() or similar custom command if you have one.  Replace with your actual login details.
    cy.login('validUsername', 'validPassword');

  });


  it('should successfully edit facility ownership', () => {
    const productId = 'yourProductId'; // Replace with actual product ID
    const hsNumber = 'yourHsNumber';   // Replace with actual HS Number
    const productNumber = 'yourProductNumber'; // Replace with actual Product Number

    pageObject.navigateToProductRecordPage(productId, hsNumber, productNumber);
    pageObject.verifyPageLoadedSuccessfully();
    pageObject.scrollIntoView();

    // Check if facility ownership records exist.  If not, add one.
    pageObject.actionsButton.should('exist').then(($el) => {
      if ($el.length === 0){
        pageObject.addFacilityOwnership('Facility Ownership Value'); // Replace with a valid value
        pageObject.verifyFacilityOwnershipAdded();
      }
    });


    pageObject.editFacilityOwnership('New Facility Ownership Value'); // Replace with a new valid value

    // Add assertions to verify successful edit.  Example:
    cy.contains('Facility Ownership Updated Successfully').should('be.visible'); // Replace with your actual success message

  });
});

```
