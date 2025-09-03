```typescript
/// <reference types="cypress" />
import TestCase1808538 from '../support/pageObjects/testcase_1808538_po';

describe('Test Case ID: 1808538', () => {
  const testCase1808538 = new TestCase1808538();

  cy.testCaseMapping([
    {
      testCaseId: "ADO:1808538",
      testCaseTitle: "Filter with multiple conditions should work",
      testCaseLink: "https://dev.azure.com/tr-corp-tax/onesource-global-trade/_workitems/edit/1808538",
    },
  ]);

  it('Filter with multiple conditions should work', () => {
    const username = Cypress.env('username'); //Get username from cypress.env
    const password = Cypress.env('password'); //Get password from cypress.env

    if (!username || !password) {
      throw new Error("Username or password not found in cypress.env");
    }


    testCase1808538.login(username, password);
    cy.url().should('not.include', '/login'); //Verify successful login - adjust as needed based on actual URL
    testCase1808538.navigateToCustomMappings();
    cy.get(testCase1808538.getCustomMappingPageSelector()).should('be.visible'); //Verify page load. Adjust selector as needed.
    testCase1808538.clearGrouping();
    testCase1808538.verifyGroupButton();
    testCase1808538.applyFilters();
    testCase1808538.verifyFilterButton();
    testCase1808538.verifyTableContent();

  });
});

```
