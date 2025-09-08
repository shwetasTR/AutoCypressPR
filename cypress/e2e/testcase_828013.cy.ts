```typescript
/// <reference types="cypress" />
import TestCase828013 from '../support/pageObjects/testcase_828013_po';

describe('Test Case ID: ADO:828013 - Confirm Denial Of A Blocked Company Partner', () => {
  const testCase828013 = new TestCase828013();

  cy.testCaseMapping([
    {
      testCaseId: "ADO:828013",
      testCaseTitle: "Confirm Denial Of A Blocked Company Partner",
      testCaseLink: "https://dev.azure.com/tr-corp-tax/onesource-global-trade/_workitems/edit/828013",
    },
  ]);

  it('should confirm denial of a blocked company partner', () => {
    const username = 'DPS'; // Replace with actual DPS username
    const partnerId = '2035';
    const searchTerm = 'Acme Corp'; // Replace with a valid search term that returns results
    const reason = 'Duplicate'; // Replace with a valid reason from the dropdown
    const note = 'This is a test note.';


    testCase828013.login(username, partnerId);
    testCase828013.navigateToDPSQuickScreening();
    testCase828013.performSearch('company', searchTerm);

    //Attempting submit without reason or note
    testCase828013.confirmDenial();
    cy.get(testCase828013.selectors.reasonOrNoteRequiredMessage).should('be.visible');
    cy.get(testCase828013.selectors.closeButton).click();
    cy.get(testCase828013.selectors.confirmDenialRadWindow).should('not.be.visible');


    //Confirm denial with reason and note
    testCase828013.confirmDenial(reason, note);
    testCase828013.verifyDenialSuccess();

    //Verify Actions button and Create Report option are displayed.  Consider adding a check to ensure the option is clickable.
    cy.get(testCase828013.selectors.actionsButton).click();
    cy.get(testCase828013.selectors.createReportOption).should('be.visible');


    testCase828013.navigateToDPSManagement();
    testCase828013.verifyReviewStatus(username, 'Denied');
  });
});

```
