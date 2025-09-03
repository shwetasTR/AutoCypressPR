```typescript
/// <reference types="cypress" />
import { TestCase1808538 } from '../support/pageObjects/testcase_1808538_po';

describe('Test Case ID 1808538', () => {
  const pageObject = new TestCase1808538();

  it('should successfully perform all test steps', () => {
    const username = Cypress.env('username') || 'your_username'; // Replace with your environment variable or hardcoded value.
    const password = Cypress.env('password') || 'your_password'; // Replace with your environment variable or hardcoded value.


    pageObject.login(username, password);
    pageObject.navigateToCustomMappings();
    pageObject.clearGrouping();
    pageObject.applyFilters();
    pageObject.verifyTableData();
  });
});

```
