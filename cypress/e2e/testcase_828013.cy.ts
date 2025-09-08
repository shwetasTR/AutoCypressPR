```typescript
/// <reference types="cypress" />
import TestCase828013 from '../support/pageObjects/testcase_828013_po';

describe('Test Case ID: 828013 - Confirm Denial Of A Blocked Company Partner', () => {
  const testCase = new TestCase828013();

  cy.testCaseMapping([
    {
      testCaseId: "ADO:828013",
      testCaseTitle: "Confirm Denial Of A Blocked Company Partner",
      testCaseLink: "https://dev.azure.com/tr-corp-tax/onesource-global-trade/_workitems/edit/828013",
    },
  ]);

  it('should confirm denial of a blocked company partner', () => {
    testCase.login();
    testCase.navigateToDPSQuickScreening();
    testCase.performSearch('TestCompany'); // Replace 'TestCompany' with a valid search term

    //Attempt Denial without reason or note
    testCase.confirmDenial();
    cy.get(testCase.reasonOrNoteRequiredMessage).should('be.visible');
    testCase.closeButton.click();
    cy.get(testCase.confirmDenialRadWindow).should('not.exist');


    //Confirm Denial with reason and note
    testCase.confirmDenial('Reason1', 'Test Note');
    testCase.verifyDenialSuccess();

    //Verify Create Report option is available after denial
    testCase.actionsButton.click();
    cy.get(testCase.createReportOption).should('be.visible');

    testCase.navigateToDPSManagement();
    testCase.searchDPSManagement('DPSUser'); // Replace 'DPSUser' with the actual username used for login.
  });
});

```
