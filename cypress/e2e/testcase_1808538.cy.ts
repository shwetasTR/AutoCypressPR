```typescript
/// <reference types="cypress" />
import TestCase1808538 from '../support/pageObjects/testcase_1808538_po';

describe('Test Case ID: 1808538', () => {
  const testCase1808538 = new TestCase1808538(
    '[data-testid="grouping-button"]', // Replace with actual group button selector
    '[data-testid="filter-button"]'   // Replace with actual filter button selector

  );

  cy.testCaseMapping([
    {
      testCaseId: "ADO:1808538",
      testCaseTitle: "Filter with multiple conditions should work",
      testCaseLink: "https://dev.azure.com/tr-corp-tax/onesource-global-trade/_workitems/edit/1808538",
    },
  ]);

  it('Filter with multiple conditions should work', () => {
    const username = Cypress.env('username'); //get username from cypress.env
    const password = Cypress.env('password'); //get password from cypress.env

    if (!username || !password) {
      throw new Error("Username or password not found in cypress.env");
    }

    testCase1808538.login(username, password);
    testCase1808538.navigateToCustomMappings();
    testCase1808538.clearGrouping();
    testCase1808538.verifyGroupButton();

    const filters = [
      // Add your filter criteria here.  Example below:
      { key: 'filter1', value: 'value1' },
      { key: 'filter2', value: 'value2' },
    ];
    testCase1808538.applyFilters(filters);
    testCase1808538.verifyFilterButton(filters.length);

    //Test cases for both scenarios where data exists and data does not exist
    testCase1808538.verifyTableData(true); //Verify that data exists in the table
    //To test the scenario where data does not exist, you would need to apply filters that result in an empty table and then change the parameter to false
    //testCase1808538.verifyTableData(false); //Verify that data does not exist in the table

  });
});

```
