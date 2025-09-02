```javascript
import TestCase_1808538_Page from './cypress/support/pageObjects/testcase_1808538_po.js';

describe('Test Case ID 1808538', () => {
  const testCasePage = new TestCase_1808538_Page();

  beforeEach(() => {
    // Login to the application (replace with your actual login steps)
    cy.visit('https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com/');
    cy.setCookie('company', 'GC 2');
    // Assuming there's a login form, fill it and submit. Example:
    // cy.get('#username').type('your_username');
    // cy.get('#password').type('your_password');
    // cy.get('#login-button').click();
    // cy.url().should('include', '/gtm/product-classification'); // Verify successful login.  Adjust as needed.

    // Alternatively, if login is handled by cookies:
    // cy.setCookie('your_auth_cookie', 'your_auth_token');
  });

  it('Custom HS Mapping Functionality', () => {
    // Navigate to Custom HS Mapping page
    testCasePage.navigateToCustomMappings();

    // Verify Custom HS Mapping page is loaded (add an assertion if needed, e.g., URL check)
    cy.url().should('include', '/gtm/product-classification/custom-mappings');

    // Click to 'Group' button and clear all grouping
    testCasePage.clearGrouping();

    // Group button should not contain numbers
    testCasePage.assertGroupButtonHasNoNumbers();

    // Click to 'Filter' button and apply several filters
    // Example: Apply filters 'Filter1' and 'Filter2'
    testCasePage.applyFilters(['Filter1', 'Filter2']);

    // Filter button should contain number of applied filters
    testCasePage.getAppliedFilterCount().should('be.greaterThan', 0);

    // If there is a suitable data it should be displayed in the table
    // If there is not a suitable data, table should be empty
    testCasePage.getTableRowCount().then((rowCount) => {
      if (rowCount > 0) {
        testCasePage.assertTableIsNotEmpty();
        // Example: Verify data in the first row
        testCasePage.getTableCellText(0, 0).should('not.be.empty');
      } else {
        testCasePage.assertTableIsEmpty();
      }
    });
  });
});
```