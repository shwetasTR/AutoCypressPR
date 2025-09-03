```typescript
/// <reference types="cypress" />
import { TestCase937167 } from '../support/pageObjects/testcase_937167_po';

describe('Test Case ID: 937167 - Verify in edit function', () => {
  const selectors = { //Example selectors -  Replace with actual selectors from your application
    facility_ownership_section: '#facilityOwnershipSection',
    add_facility_ownership_button: '#addFacilityOwnershipButton',
    facility_ownership_dropdown: '#facilityOwnershipDropdown',
    save_facility_ownership_button: '#saveFacilityOwnershipButton',
    actions_button: '.actions-button',
    edit_facility_ownership_button: '#editFacilityOwnershipButton',
    save_changes_button: '#saveChangesButton'
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
    // Add any necessary before hooks here, such as login.  Example below:
    cy.login('valid_username', 'valid_password'); // Replace with your actual login function.

  });


  it('should successfully edit facility ownership', () => {
    const productId = '12345'; // Replace with actual product ID
    const hsNumber = '67890';   // Replace with actual HS Number
    const productNumber = '101112'; // Replace with actual Product Number
    const initialFacilityOwnership = 'Ownership A';
    const updatedFacilityOwnership = 'Ownership B';


    pageObject.navigateToProductRecordPage(productId, hsNumber, productNumber);
    pageObject.verifyPageLoadsSuccessfully();
    pageObject.facilityOwnershipSection.scrollIntoView();


    //Add a facility if none exists.  Error handling is needed for production code.
    pageObject.addFacilityOwnership(initialFacilityOwnership);
    pageObject.verifyFacilityOwnershipAdded(initialFacilityOwnership);

    pageObject.editFacilityOwnership(updatedFacilityOwnership);
    pageObject.verifyFacilityOwnershipAdded(updatedFacilityOwnership);
    pageObject.verifySuccessfulMessage();


  });
});

```
