```typescript
/// <reference types="cypress" />
import { TestCase1808538 } from '../support/pageObjects/testcase_1808538_po';

describe('Test Case ID 1808538', () => {
  const pageObject = new TestCase1808538();
  const username = Cypress.env('username'); //get username from cypress.env
  const password = Cypress.env('password'); //get password from cypress.env


  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();

  });

  it('Verify Custom HS Mapping functionalities', () => {
    pageObject.login(username, password);
    pageObject.navigateToCustomMappings();
    pageObject.clearGrouping();
    //Example filters.  Replace with your actual filter selectors and values.
    const filters = [
      { selector: '[data-testid="filter-select-1"]', value: 'Value 1' },
      { selector: '[data-testid="filter-select-2"]', value: 'Value 2' },
    ];
    pageObject.applyFilters(filters);
    pageObject.verifyTableData();
  });

  it('Verify Custom HS Mapping functionalities with no data', () => {
    pageObject.login(username, password);
    pageObject.navigateToCustomMappings();
    pageObject.clearGrouping();
    //Apply filters that are expected to return no results.
    const noDataFilters = [
      { selector: '[data-testid="filter-select-1"]', value: 'NonExistentValue' },
    ];
    pageObject.applyFilters(noDataFilters);
    pageObject.verifyTableData();
  });

});

```
