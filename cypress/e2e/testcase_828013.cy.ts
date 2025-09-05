```typescript
/// <reference types="cypress" />
import TestCase828013 from '../support/pageObjects/testcase_828013_po';

describe('Test Case ID: ADO:828013 - Confirm Denial Of A Blocked Company Partner', () => {
  const testCase828013 = new TestCase828013();

  beforeEach(() => {
    cy.testCaseMapping([
      {
        testCaseId: "ADO:828013",
        testCaseTitle: "Confirm Denial Of A Blocked Company Partner",
        testCaseLink: "https://dev.azure.com/tr-corp-tax/onesource-global-trade/_workitems/edit/828013",
      },
    ]);
    // Add any necessary beforeEach setup here, like clearing cookies or local storage.

  });


  it('Confirms denial of a blocked company partner', () => {
    testCase828013.login();
    testCase828013.navigateToDPSQuickScreening();
    testCase828013.performSearch('Test Company'); // Replace 'Test Company' with an actual search query that returns results.

    //Attempt Submit without Reason or Note
    testCase828013.confirmDenial('', '');
    cy.get(testCase828013.selectors.confirmDenial.errorMessage).should('contain', 'Reason or note is required to save');
    cy.get(testCase828013.selectors.confirmDenial.closeButton).click();

    //Attempt Submit with Reason
    testCase828013.confirmDenial('Reason 1', 'Test Note'); // Replace with actual reason and note.
    cy.get(testCase828013.selectors.confirmDenial.successMessageAfterSubmission).should('be.visible');


    testCase828013.generateReport();
    testCase828013.navigateToDPSManagement();
    testCase828013.reviewDPSManagement('testuser'); // Replace 'testuser' with the actual username.

  });
});

```
