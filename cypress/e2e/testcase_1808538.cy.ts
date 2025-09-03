```typescript
/// <reference types="cypress" />
import TestCase1808538 from '../support/pageObjects/testcase_1808538_po';

describe('Test Case ID 1808538: Filter with multiple conditions should work', () => {
  const selectors = {
    group_button: '[data-testid="group-button"]', //Replace with your actual selector
    filter_button: '[data-testid="filter-button"]', //Replace with your actual selector

  };
  const pageObject = new TestCase1808538(selectors);

  beforeEach(() => {
    cy.testCaseMapping([
      {
        testCaseId: "ADO:1808538",
        testCaseTitle: "Filter with multiple conditions should work",
        testCaseLink: "https://dev.azure.com/tr-corp-tax/onesource-global-trade/_workitems/edit/1808538",
      },
    ]);
  });


  it('should successfully filter with multiple conditions', () => {
    const username = Cypress.env('username'); //get username from cypress.env
    const password = Cypress.env('password'); //get password from cypress.env

    if (!username || !password) {
      throw new Error("Username or password not found in cypress.env");
    }

    pageObject.login(username, password);
    pageObject.navigateToCustomMappings();
    pageObject.clearGrouping();
    pageObject.verifyGroupButton();
    const filters = [
      { selector: '[data-testid="filter1"]', value: 'filterValue1' }, //Replace with your actual selectors and values
      { selector: '[data-testid="filter2"]', value: 'filterValue2' },//Replace with your actual selectors and values
    ];
    pageObject.applyFilters(filters);
    pageObject.verifyFilterButton();
    pageObject.verifyTableData();

  });
});

```
