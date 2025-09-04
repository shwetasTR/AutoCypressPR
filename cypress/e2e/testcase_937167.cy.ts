```typescript
/// <reference types="cypress" />
import TestCase937167 from '../support/pageObjects/testcase_937167_po';

describe('Test Case ID: 937167 - Verify in edit function', () => {
  const selectors = { //Example selectors. Replace with your actual selectors.
    facility_ownership_section: '#facilityOwnershipSection',
    add_facility_ownership_button: '#addFacilityOwnershipButton',
    facility_ownership_dropdown: '#facilityOwnershipDropdown',
    save_facility_ownership_button: '#saveFacilityOwnershipButton',
    actions_button: '.actionsButton',
    edit_facility_ownership_button: '#editFacilityOwnershipButton',
    save_changes_button: '#saveChangesButton',

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
  });


  it('should successfully edit facility ownership', () => {
    const username = Cypress.env('username'); //Get username from cypress.env
    const password = Cypress.env('password'); //Get password from cypress.env
    const productId = Cypress.env('productId'); //Get productId from cypress.env
    const hsNumber = Cypress.env('hsNumber'); //Get hsNumber from cypress.env
    const productNumber = Cypress.env('productNumber'); //Get productNumber from cypress.env

    //Check for required environment variables
    if (!username || !password || !productId || !hsNumber || !productNumber){
        throw new Error("Missing required environment variables. Please set username, password, productId, hsNumber, and productNumber in cypress.env.");
    }


    pageObject.login(username, password);
    pageObject.navigateToProductRecordPage(productId, hsNumber, productNumber);
    pageObject.scrollFacilityOwnershipSection();

    //Check if facility ownership records exist. If not, add one.
    pageObject.actionsButton.should('exist').then(($actionsButton) => {
      if ($actionsButton.length > 0) {
        //Records exist, proceed to edit.
        pageObject.editFacilityOwnership("New Facility Ownership Value");
      } else {
        //No records, add a new one before editing.
        pageObject.addFacilityOwnership("Initial Facility Ownership Value");
        pageObject.editFacilityOwnership("New Facility Ownership Value");
      }
    });


  });
});

```
