Okay, I will generate a Cypress automation script based on the provided test case steps. I'll make assumptions about the login process (e.g., element IDs/classes for username, password, and submit button) since those details aren't explicitly provided. I'll also add comments to explain each step of the script.

```javascript
describe('Custom HS Mapping Tests', () => {
  const baseUrl = 'https://ogt-gtm-web-qa.8443.aws-int.thomsonreuters.com';
  const customMappingsUrl = `${baseUrl}/gtm/product-classification/custom-mappings`;

  beforeEach(() => {
    // Assuming you have a way to handle authentication.  Replace with your actual login steps.
    // This is a placeholder - you'll need to adapt it to your application's login mechanism.
    cy.visit(baseUrl); // Visit the base URL first

    // Replace these selectors and values with your actual login form elements
    cy.get('#username').type('your_username'); // Example username field
    cy.get('#password').type('your_password'); // Example password field
    cy.get('#company').select('GC 2'); // Assuming a company dropdown with value "GC 2"
    cy.get('#login-button').click(); // Example login button

    // Assertion to check successful login (adjust based on your application's behavior)
    cy.url().should('not.include', baseUrl); // Verify the URL changes after login, or
    // cy.contains('Welcome').should('be.visible'); // Check for a welcome message, or
    // cy.get('#logout-button').should('be.visible'); //Check for logout button

    // Now navigate to the Custom HS Mapping page
    cy.visit(customMappingsUrl);
  });

  it('Navigates to Custom HS Mapping page successfully', () => {
    // Verify that the Custom HS Mapping page loads successfully
    cy.url().should('eq', customMappingsUrl);
    cy.contains('Custom HS Mappings').should('be.visible'); // Or another unique element on the page
  });

  it('Clears all grouping and verifies Group button', () => {
    // Click the 'Group' button
    cy.contains('button', 'Group').click();

    // Clear all grouping (assuming there's a clear all option)
    cy.contains('button', 'Clear All').click();

    // Verify that the Group button does not contain numbers
    cy.contains('button', 'Group').should('not.contain', '('); // Assuming numbers are in parentheses
  });

  it('Applies filters and verifies Filter button', () => {
    // Click the 'Filter' button
    cy.contains('button', 'Filter').click();

    // Apply several filters (replace with your actual filter application steps)
    // Example:
    cy.get('#filter-field-1').select('HS Code'); // Example: Select a filter field
    cy.get('#filter-value-1').type('123456'); // Example: Enter a filter value
    cy.contains('button', 'Apply').click(); // Example: Apply the filter

    // Verify that the Filter button contains the number of applied filters
    cy.contains('button', 'Filter').should('contain', '(1)'); // Assuming 1 filter was applied
  });

  it('Displays data or empty table based on filter results', () => {
    // Check if there is data in the table
    cy.get('table').then(($table) => {
      if ($table.find('tbody tr').length > 0) {
        // If there is data, verify that it is displayed
        cy.log('Data found in table');
        cy.get('table tbody tr').should('be.visible'); //Verifies at least one row is visible

      } else {
        // If there is no data, verify that the table is empty
        cy.log('No data found in table');
        cy.contains('No data available').should('be.visible'); // Or another message indicating an empty table
      }
    });
  });
});
```